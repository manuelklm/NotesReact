import React, { useState } from "react";
import './styles/NotesApp.css';

function NotesApp() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    const handleAddNewNote = () => {
        if (newNote !== '') {
            setNotes([...notes, { text: newNote }]);
            setNewNote('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddNewNote();
        } 
    };

    const handleRemoveNote = (index) => {
        const updatedNotes = notes.filter((note, i) => i !== index);
        setNotes(updatedNotes);
    };

    return (
        <div className="notesAppDiv">
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
            onClick={handleAddNewNote}>Add</button>
            </div>
            <ul className='notesList'>
                {notes.map((note, index) => (
                    <li className='noteListItem' key={index}>
                        <div className="noteListItemText">
                            {note.text}
                        </div>
                        <div className="noteListItemButton">
                            <button id='removeNoteButton' onClick={() => handleRemoveNote(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NotesApp;