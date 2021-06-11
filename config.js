import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyD2cmzmrO7AD-6Y7n1tws6HAB581eIv2tQ",
  authDomain: "booksanta-57783.firebaseapp.com",
  databaseURL:'https://console.firebase.google.com/project/undefined/firestore/data/',
  projectId: "booksanta-57783",
  storageBucket: "booksanta-57783.appspot.com",
  messagingSenderId: "227014905313",
  appId: "1:227014905313:web:389f8aacb93e4a51e816a0"
};
if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig)
}
export default firebase.firestore()