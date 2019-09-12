import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAXJ79T3DJlShxo0WAOiH0bFG5GMVE2d9s",
  authDomain: "todoist-project.firebaseapp.com",
  databaseURL: "https://todoist-project.firebaseio.com",
  projectId: "todoist-project",
  storageBucket: "todoist-project.appspot.com",
  messagingSenderId: "1050342706388",
  appId: "1:1050342706388:web:372eef163f9e6aeba63f41"
});

export { firebaseConfig as firebase };
