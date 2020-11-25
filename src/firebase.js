import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCRIVjeLK4LhPYZSi7nkRSCG_J14ePj9OM",
    authDomain: "whatsapp-mern-75567.firebaseapp.com",
    databaseURL: "https://whatsapp-mern-75567.firebaseio.com",
    projectId: "whatsapp-mern-75567",
    storageBucket: "whatsapp-mern-75567.appspot.com",
    messagingSenderId: "656414541373",
    appId: "1:656414541373:web:5fdb0b07e4cf36c03acc54"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;