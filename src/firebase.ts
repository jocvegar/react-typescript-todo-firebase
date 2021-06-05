import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MID,
};
firebase.initializeApp(config);
firebase.analytics();
const db = firebase.firestore();
const todosCollection = db.collection("todos");
export { db, todosCollection };
export default firebase;
