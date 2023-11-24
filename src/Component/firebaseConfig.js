import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyCTwUWE9na7CG1x3wN-85Vq-Gk4wK9je2k",
    authDomain: "project-app-ef48a.firebaseapp.com",
    databaseURL: "https://project-app-ef48a-default-rtdb.firebaseio.com",
    projectId: "project-app-ef48a",
    storageBucket: "project-app-ef48a.appspot.com",
    messagingSenderId: "528984770823",
    appId: "1:528984770823:web:7c6f2231c9c7f5282cdda2"
  };

  const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();