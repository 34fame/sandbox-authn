const admin = require("firebase-admin")
const serviceAccount = require("../../authn-service-account.json")
admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
   databaseURL: "https://authn-3c57e.firebaseio.com",
})
exports.fs = admin.firestore()
exports.auth = admin.auth()
