import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'

const FIREBASE_CONFIG = {
   apiKey: process.env.FIREBASE_APIKEY,
   authDomain: process.env.FIREBASE_AUTHDOMAIN,
   databaseURL: process.env.FIREBASE_DATABASEURL,
   projectId: process.env.FIREBASE_PROJECTID,
   storageBucket: process.env.FIREBASE_STORAGEBUCKET,
   messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
   appId: process.env.FIREBASE_APPID
}

const firebaseInstance = firebase.initializeApp(FIREBASE_CONFIG)
const providerFacebook = new firebase.auth.FacebookAuthProvider()
const providerGitHub = new firebase.auth.GithubAuthProvider()
const providerGoogle = new firebase.auth.GoogleAuthProvider()
const providerTwitter = new firebase.auth.TwitterAuthProvider()

Vue.prototype.$firebase = firebaseInstance

export {
   firebaseInstance,
   providerFacebook,
   providerGitHub,
   providerGoogle,
   providerTwitter,
}
