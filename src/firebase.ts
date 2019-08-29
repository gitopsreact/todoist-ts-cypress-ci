import 'firebase/firestore'

import firebase from 'firebase/app'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCiUf7JgSm0snPUYSbjaHgTglbqBBqEFhQ',
  authDomain: 'todoist-ts-cypress-ci.firebaseapp.com',
  databaseURL: 'https://todoist-ts-cypress-ci.firebaseio.com',
  projectId: 'todoist-ts-cypress-ci',
  storageBucket: 'todoist-ts-cypress-ci.appspot.com',
  messagingSenderId: '804952308005',
  appId: '1:804952308005:web:34e18c5159112bfb',
})

export { firebaseConfig as firebase }
