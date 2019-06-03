/*
 * Initializes firebase for app, sets the appropriate config values
 */


import firebase from 'firebase'
 
const config = {
    apiKey: "AIzaSyBe4a2dlsyqd8FGCR-osDivSbsGpzD7dD4",
    authDomain: "cogs121-bc7c0.firebaseapp.com",
    databaseURL: "https://cogs121-bc7c0.firebaseio.com",
    projectId: "cogs121-bc7c0",
    storageBucket: "cogs121-bc7c0.appspot.com",
    messagingSenderId: "628287166848"
  };

  firebase.initializeApp(config);

export default firebase; 