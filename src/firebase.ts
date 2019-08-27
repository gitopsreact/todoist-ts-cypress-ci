import 'firebase/firestore'

import firebase from 'firebase/app'

const firebaseConfig = firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  databaseUrl: '',
  projectId: '',
  storageBucket: '',
  messageSenderId: '',
  apiId: '',
})

export { firebaseConfig as firebase }
