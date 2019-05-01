
import firebase from 'firebase'
 
const config = {
    apiKey: "AIzaSyAGwpHRRCE6sf63MVj0uH9pE0-vhYmOhcY",
    authDomain: "homeless-sandiego.firebaseapp.com",
    databaseURL: "https://homeless-sandiego.firebaseio.com",
    projectId: "homeless-sandiego",
    storageBucket: "homeless-sandiego.appspot.com",
    messagingSenderId: "649377071014"
  };

  firebase.initializeApp(config);

export default firebase; 