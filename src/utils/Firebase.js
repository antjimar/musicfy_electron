import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyDlMQao2EcvLgTdoPHzEdd05MH-hEJB9qg",
    authDomain: "musicfy-1788c.firebaseapp.com",
    databaseURL: "https://musicfy-1788c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "musicfy-1788c",
    storageBucket: "musicfy-1788c.appspot.com",
    messagingSenderId: "659420031056",
    appId: "1:659420031056:web:32d1727ddc93b28518c955"
  };

  export default firebase.initializeApp(firebaseConfig);