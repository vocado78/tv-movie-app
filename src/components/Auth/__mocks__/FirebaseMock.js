/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-vars */
import firebase from 'firebase/app';


jest.mock('firebase/app', () => ({
  initializeApp: (config) => (config),
  auth: () => ({
    createUserWithEmailAndPassword: (email, password) => {
      return new Promise((resolve, reject) => {
        const emails = { exist: 'exist@test.com' };
        const authUser = {
          user: {
            uid: Math.floor(Math.random() * 10) + password.length,
            email
          }
        };
        process.nextTick(() => (
          emails.exist === email ? reject({ message: 'Email already in use.' }) : resolve(authUser)
        ));
      });
    },
    signInWithEmailAndPassword: jest.fn(),
    currentUser: {
      sendEmailVerification: () => {},
    },
    signOut: () => {}
  }),
  firestore: () => ({
    collection: (str) => ({
      doc: (uid) => ({
        set: (obj) => obj
      })
    })
  })
}));

const mockConfig = {
  apiKey: 'apiKey',
  authDomain: 'authDomain',
  databaseURL: 'databaseURL',
  projectId: 'projectId',
  storageBucket: 'storageBucket',
  messagingSenderId: 'messagingSenderId',
  appId: 'appId'
};

class FirebaseMock {
  constructor() {
    firebase.initializeApp(mockConfig);

    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  doCreateUserWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  doSignInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  doSendEmailVerification = jest.fn(() => this.auth.currentUser.sendEmailVerification({
    url: process.env.REACT_APP_VERIFICATION_REDIRECT
  }));

  doSignOut = () => this.auth.signOut();

  user = (uid) => this.db.collection('users').doc(uid);
}

export default FirebaseMock;
