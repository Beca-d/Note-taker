const fs = require('fs');
const path = require('path');


function createNewNote(body, notesArray) {
    const newNote = body;
    // adds new note to existing notes array
    notesArray.push(newNote);
    // uploads new notes array as .json
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray}, null, 2)
    );
    return newNote;
}

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

function deleteNote(id, notesArray) {
    // Finds index of id
    const index = notesArray.findIndex(note => {
        return note.id === id
    });

    // remove note from notes array given index of id
    notesArray.splice(index, 1);

    // uploads new notes array as .json
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray}, null, 2)
    );

    return notesArray;
}

module.exports = {
    createNewNote,
    findById,
    deleteNote
}