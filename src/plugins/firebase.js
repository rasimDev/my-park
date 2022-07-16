import Firebase from 'firebase'

Firebase.initializeApp({
    apiKey: "AIzaSyCN-pIN23ZgIOY0WlxSBQVYdHdASZ0cak0",
    authDomain: "mypark-d4eb6.firebaseapp.com",
    projectId: "mypark-d4eb6",
    storageBucket: "mypark-d4eb6.appspot.com",
    messagingSenderId: "473835636126",
    appId: "1:473835636126:web:6254304199ca376550028f"
});

export const DB = Firebase.firestore();
