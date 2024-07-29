import React from "react";
import { getAuth, signOut } from 'firebase/auth';
import './styles/LoggedInBox.css';

function LoggedInBox(props) {

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                console.log("User signed out");
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            });
    };

    return (
        <div className="loggedInDiv">
            <div id='textDiv'>
                <p>Currently logged in using <strong>{props.name}</strong></p>    
            </div>
            <div id='buttonDiv'>
                <button id='signOutButton' onClick={handleSignOut}>Sign out</button>    
            </div>
            
        </div>
    );
}

export default LoggedInBox;