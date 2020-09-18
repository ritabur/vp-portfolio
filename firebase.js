import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7x2hh66lna_giobPWFJgPFKrdAKNI1tU",
    authDomain: "vp-comments.firebaseapp.com",
    databaseURL: "https://vp-comments.firebaseio.com",
    projectId: "vp-comments",
    storageBucket: "vp-comments.appspot.com",
    messagingSenderId: "299284706014",
    appId: "1:299284706014:web:b6bdfc059e8fb08495884f"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
