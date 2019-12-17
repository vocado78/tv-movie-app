import firebase from 'firebase/app';


jest.mock('firebase/app', () => ({
  initializeApp: (config) => (config),
  auth: () => ({
    createUserWithEmailAndPassword: (email, password) => {
      return new Promise((resolve) => {
        const user = {
          userId: Math.floor(Math.random() * 10) + password.length,
          email
        };
        process.nextTick(() => {
          resolve(user);
        });
      });
    },
    signInWithEmailAndPassword: () => {},
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
