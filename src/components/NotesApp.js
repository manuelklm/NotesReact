import React, { useState, useEffect } from "react";
import { db, collection, addDoc, onSnapshot, deleteDoc, doc } from '../firebaseConfiguration';
import LoggedInBox from './LoggedInBox';
import './styles/NotesApp.css';

function NotesApp({ user }) {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    useEffect(() => {
        if (!user) return;

        const unsubscribe = onSnapshot(collection(db, `users/${user.uid}/notes`), (snapshot) => {
            const notesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setNotes(notesData);
        });

        return () => unsubscribe();
    }, [user]);

    const handleAddNewNote = () => {
        if (newNote !== '') {
            addDoc(collection(db, `users/${user.uid}/notes`), {
                text: newNote
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                setNotes([{ id: docRef.id, text: newNote }, ...notes]);
                setNewNote('');
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddNewNote();
        } 
    };

    const handleRemoveNote = (id) => {
        deleteDoc(doc(db, `users/${user.uid}/notes`, id))
        .then(() => {
            const updatedNotes = notes.filter(note => note.id !== id);
            setNotes(updatedNotes);
        })
        .catch((error) => {
            console.error("Error removing document: ", error);
        });
    };

    return (
        <div className="notesAppDiv">
            <LoggedInBox name={user.email}/>
            <h1>Notes App!</h1>
            <div id='addNoteDiv'>
                <input 
                    id='newNoteTextField'
                    type='text' 
                    value={newNote} 
                    onChange={(e) => setNewNote(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="New note"
                />
                <button 
                    id='newNoteButton'
                    onClick={handleAddNewNote}
                >
                    Add
                </button>
            </div>
            <ul className='notesList'>
                {notes.map((note) => (
                    <li className='noteListItem' key={note.id}>
                        <div className="noteListItemText">
                            {note.text}
                        </div>
                        <div className="noteListItemButton">
                            <button 
                                id='removeNoteButton' 
                                onClick={() => handleRemoveNote(note.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NotesApp;
