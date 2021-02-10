import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCuwGcQEtC4eUCWzWRl1pMUT1I-s-dfvCk",
  authDomain: "life-organizer-dev.firebaseapp.com",
  projectId: "life-organizer-dev",
  storageBucket: "life-organizer-dev.appspot.com",
  messagingSenderId: "877792606852",
  appId: "1:877792606852:web:1feb7174e47c7213b1a0d1"
};

try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase init error', err.stack)
  }
}

const fire = firebase

export default fire;