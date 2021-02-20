import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDOdKeq83GYl3BEjsgXvvKmS_-sW8Y4C3g',
  authDomain: 'noted-f0146.firebaseapp.com',
  projectId: 'noted-f0146',
  storageBucket: 'noted-f0146.appspot.com',
  messagingSenderId: '796608900628',
  appId: '1:796608900628:web:82c940d7fe7f3d3c544101',
  measurementId: 'G-HYQD9YKQ4R'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
