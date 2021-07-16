import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBOiAAX7Ja3lNrWXgRqdFE8C5ka4cYt2nA",
  authDomain: "thecardsoul-267a9.firebaseapp.com",
  projectId: "thecardsoul-267a9",
  storageBucket: "thecardsoul-267a9.appspot.com",
  messagingSenderId: "499653662268",
  appId: "1:499653662268:web:9fb9d82b4aeb5e6cca1539"
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore;