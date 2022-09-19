const router = require('express').Router();
const { notes } = require('../../db/db');

const ShortUniqueId = require('short-unique-id');

const { createNewNote } = require('../../lib/db');


// Retrieves all notes
router.get('/notes', (req, res) => {
    res.json(notes);
})

// Adds new note
router.post('/notes', (req, res) => {
    // generates a unique short id
    const uid = new ShortUniqueId();

    req.body.id = uid();

    const note = createNewNote(req.body, notes);
    res.json(notes);
})

module.exports = router;