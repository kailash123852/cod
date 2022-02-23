import firebase from "firebase"

 const firebaseConfig = {
    apiKey: "AIzaSyArGdZ2QDwFxTkbzVRfMfFUMzS2jMPO_9Y",
    authDomain: "newsletter-37a73.firebaseapp.com",
    databaseURL: "https://newsletter-37a73.firebaseio.com",
    projectId: "newsletter-37a73",
    storageBucket: "newsletter-37a73.appspot.com",
    messagingSenderId: "24100353124",
    appId: "1:24100353124:web:bf8260614405684c101b71"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();