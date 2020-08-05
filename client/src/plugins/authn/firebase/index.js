import {
   firebaseInstance,
   providerFacebook,
   providerGitHub,
   providerGoogle,
   providerTwitter,
} from 'boot/firebase'

export function register(email, password) {
   return firebaseInstance.auth().createUserWithEmailAndPassword(email, password)
}

export function isAuthenticated() {
   return !!firebaseInstance.auth().currentUser
}

export async function login({ method, credentials }) {
   switch (method) {
      case 'EmailPassword':
         try {
            const { email, password } = credentials
            return await firebaseInstance.auth().signInWithEmailAndPassword(email, password)
         } catch (err) {
            console.error('firebase - login - EmailPassword', err)
            return { error: true, message: err.message }
         }

      case 'Facebook':
         return firebaseInstance.auth().signInWithRedirect(providerFacebook)

      case 'GitHub':
         return firebaseInstance.auth().signInWithRedirect(providerGitHub)

      case 'Google':
         return firebaseInstance.auth().signInWithRedirect(providerGoogle)

      case 'Twitter':
         return firebaseInstance.auth().signInWithRedirect(providerTwitter)

      case 'Phone':
         try {
            const { number, recaptcha } = credentials
            return await firebaseInstance.auth().signInWithPhoneNumber(number, recaptcha)
         } catch (err) {
            console.error('firebase - login - Phone', err)
            return { error: true, message: err.message }
         }

      default:
         return { message: 'System Error: Invalid authentication method.' }
   }
}

export function getLoginResult() {
   return firebaseInstance.auth().getRedirectResult()
}

export function logout() {
   return firebaseInstance.auth().signOut()
}
