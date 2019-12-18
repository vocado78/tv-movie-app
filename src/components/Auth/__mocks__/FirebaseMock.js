import firebase from 'firebase/app';


jest.mock('firebase/app', () => ({
  initializeApp: (config) => (config),
  auth: () => ({
    // createUserWithEmailAndPassword: (email, password) => {
    //   return new Promise((resolve) => {
    //     const user = {
    //       userId: Math.floor(Math.random() * 10) + password.length,
    //       email
    //     };
    //     process.nextTick(() => {
    //       resolve(user);
    //     });
    //   });
    // },
    createUserWithEmailAndPassword: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    sendEmailVerification: jest.fn(),
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

  doSendEmailVerification = () => this.auth.currentUser.sendEmailVerification({
    url: process.env.REACT_APP_VERIFICATION_REDIRECT
  });

  doSignOut = () => this.auth.signOut();

  user = (uid) => this.db.collection('users').doc(uid);
}

export default FirebaseMock;
