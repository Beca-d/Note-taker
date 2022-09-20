const router = require('express').Router();
const { notes } = require('../../db/db');
const ShortUniqueId = require('short-unique-id');

const { 
    createNewNote,
    findById,
    deleteNote
} = require('../../lib/notes');

// Gets all the notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// Get note by id
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result)
    } else {
        res.send(404);
    }
})

// Adds note
router.post('/notes', (req, res) => {
    // generates a new unique id
    const uid = new ShortUniqueId();  
    req.body.id = uid();
    // creates a new note
    const result = createNewNote(req.body, notes);
    res.json(result);
});

// Deletes note by id
router.delete('/notes/:id', (req, res) => {
    const result = deleteNote(req.params.id, notes);
    res.json(result);
});

module.exports = router;