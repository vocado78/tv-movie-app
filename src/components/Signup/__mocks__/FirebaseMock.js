import firebase from 'firebase/app';
// import 'firebase/auth';

jest.mock('firebase/app', () => ({
  initializeApp: (config) => (config),
  auth: () => ({
    createUserWithEmailAndPassword: (email, password) => {
      const id = Math.floor(Math.random() * 100) + password.length;
      return { email, id };
    },
    signInWithEmailAndPassword: (email, password) => {
      const id = Math.floor(Math.random() * 100) + password.length;
      return { email, id };
    },
    signOut: () => {}
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
  }

  doCreateUserWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  doSignInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut = () => this.auth.signOut();
}

export default FirebaseMock;
