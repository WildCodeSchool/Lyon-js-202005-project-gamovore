import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDuZ7SjWW2gHhzyy2VbWAhoLSCDFsLKBbY",
  authDomain: "gamovore-app.firebaseapp.com",
  databaseURL: "https://gamovore-app.firebaseio.com",
  projectId: "gamovore-app",
  storageBucket: "gamovore-app.appspot.com",
  messagingSenderId: "373025067815",
  appId: "1:373025067815:web:0dcea5ad7cfb3b3a1e0f02",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  //inscription
  signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  //connexion
  loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //deconnexion
  logoutUser = () => this.auth.signOut();
}

export default Firebase;
