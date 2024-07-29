import { initializeApp } from 'firebase/app';
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import NotesApp from './components/NotesApp';
import Footer from './components/Footer';
import Auth from './components/Auth';
import { firebaseConfig } from './firebaseConfiguration';
import './App.css';

const firebaseApp = initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth(firebaseApp);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <div className="App">
      <header className="App-header">
        {!user ? <Auth /> : <NotesApp user={user} />}
      </header>
      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
