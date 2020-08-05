import * as authn from 'src/services/authn'
import * as storage from 'src/services/storage'
import { firebaseInstance } from 'boot/firebase'

const state = {
   isAuthenticated: false,
   loggedIn: null,
}

const mutations = {
   SET_IS_AUTHENTICATED: (state, value) => {
      state.isAuthenticated = value
   },

   SET_LOGGED_IN: (state, value) => {
      state.loggedIn = value
   },
}

const getters = {}

const actions = {
   login: ({ commit }, { plugin = 'firebase', method, credentials }) => {
      try {
         storage.set('session', 'session', 'pending')
         return authn.login(plugin, { method, credentials })
      } catch (err) {
         console.log('store-auth login', 'err', err)
         return err
      }
   },

   logout: async ({ commit }) => {
      await authn.logout('firebase')
      return true
   },

   handleAuthStateChange: async ({ commit }) => {
      console.group('handleAuthStateChange')
      return new Promise(async (resolve, reject) => {
         await firebaseInstance.auth().onAuthStateChanged(async session => {
            if (session) {
               console.log('session', session)

               let user = {
                  displayName: session.displayName ?
                     session.displayName : session.email ?
                        session.email : session.phoneNumber ?
                           session.phoneNumber : session.uid,
                  email: session.email,
                  phoneNumber: session.phoneNumber,
                  photoUrl: session.photoURL,
                  uid: session.uid,
               }
               storage.set('session', 'session', user)
               commit('SET_IS_AUTHENTICATED', true)
               commit('SET_LOGGED_IN', user)
               let sessionExists = storage.has('session', 'session')
               if (sessionExists) {
                  resolve('loggedIn')
               } else {
                  resolve('login')
               }
            } else {
               await storage.removeAll('session')
               commit('SET_IS_AUTHENTICATED', false)
               commit('SET_LOGGED_IN', null)
               resolve('logout')
            }
         })
         console.groupEnd()
      })
   },
}

export default {
   namespaced: true,
   state,
   mutations,
   getters,
   actions,
}
