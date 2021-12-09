import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCJXXbfy7S7_aGhvzwviXFFUCv-SZI8Rfw",
  authDomain: "insta-photo-gallery-27d89.firebaseapp.com",
  projectId: "insta-photo-gallery-27d89",
  storageBucket: "insta-photo-gallery-27d89.appspot.com",
  messagingSenderId: "899478410070",
  appId: "1:899478410070:web:b5fa5b9c1e05e5345e3cf7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFileStore = firebase.firestore();

export { projectStorage, projectFileStore };