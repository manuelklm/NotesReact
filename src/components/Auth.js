import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './styles/Auth.css';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const auth = getAuth();

    const errorMessages = {
        'auth/email-already-in-use': 'E-Mail address already taken.',
        'auth/invalid-email': 'Invalid E-Mail address.',
        'auth/operation-not-allowed': 'Operation not allowed.',
        'auth/weak-password': 'Password too weak.',
        'auth/user-disabled': 'This account was disabled.',
        'auth/user-not-found': 'User doesnt exist.',
        'auth/wrong-password': 'Wrong password.',
        'auth/missing-password': 'Password is missing',
        'auth/invalid-credential': 'E-Mail or password is incorrect'
    };

    const handleSignUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User signed up:', userCredential.user.uid);
        } catch (error) {
            setError(errorMessages[error.code] || error.message);
        }
    };

    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in:', userCredential.user.uid);
        } catch (error) {
            setError(errorMessages[error.code] || error.message);
        }
    };

    return (
        <div className='authDiv'>
            <h2 id='authHeader'>Welcome to Notes App!</h2>
            <div className='inputs'>
                <input className='inputField' id='emailInput' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <div className='passwordField'>
                    <input 
                        className='inputField'
                        id='passwordInput' 
                        type={showPassword ? "text" : "password"} 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                    />
                    <button 
                        className='togglePasswordButton' 
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                    </button>
                </div>
            </div>
            <div className='submitButtonsDiv'>
                <button className='submitButton' onClick={handleSignUp}>Sign Up</button>
                <button className='submitButton' onClick={handleSignIn}>Sign In</button>
            </div>
            {error && <p className='errorMessage'>{error}</p>}
        </div>
    );

};

export default Auth;