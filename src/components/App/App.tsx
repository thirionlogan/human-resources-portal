import React from 'react';
import './App.css';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SignIn from '../SignIn/SignIn';
import Table from '../Table/Table';

const firebaseConfig = {
  apiKey: 'AIzaSyBKtSIdqVLT_GI57N0umP-1iCLspLSvcFk',
  authDomain: 'human-resources-portal.firebaseapp.com',
  projectId: 'human-resources-portal',
  storageBucket: 'human-resources-portal.appspot.com',
  messagingSenderId: '100455932916',
  appId: '1:100455932916:web:89a96c3873fb0f01d08fa1',
  measurementId: 'G-FB60Y6TESV',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className='App'>
      <header></header>
      <section>{!user ? <Table /> : <SignIn auth={auth} />}</section>
    </div>
  );
}
export default App;
