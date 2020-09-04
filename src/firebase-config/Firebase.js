import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
    this.firestore = app.firestore;
  }

  //inscription
  signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  //connexion
  loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //deconnexion
  logoutUser = () => this.auth.signOut();

  //ajouter utilisateur bdd
  userAdd = (uid) => this.db.doc(`users/${uid}`);

  //recupérer utilisateur bdd

  userActu = (uid) => this.db.doc(`users/${uid}`);

  // Ajouter des éléments à la database

  dataAdd = (id) => this.firestore.FieldValue.arrayUnion(id);

  // Supprimer des elements de la database.

  dataRemove = (id) => this.firestore.FieldValue.arrayRemove(id);

  dataReplace = (id) => this.firestore.FieldValue.increment(id);

  userChat = (uid, gamovoreId) => this.db.doc(`users/${uid}/${gamovoreId}`);
}

export default Firebase;
