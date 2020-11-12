const express = require('express');
const uuid = require('uuid');
const app = express();
const fs = require('fs');

const PORT = 3000; // process.env.PORT ?

// will share any static html files with the browser
app.use( express.static('public') );
// accept incoming POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dbFile = './app/db.json';

let noteList = [{id: "0000-0000-0000-0000", title: 'note1', text: 'note1 text'}];

// Endpoints =================================================

// you will need to create 3 endpoints here, and it should work magically :)
// note: for app.post: newNote.id = uuid.v4() // use a random unique id.
// ... code away ...

//read the `db.json` file and return all saved notes as JSON.
app.get('/api/notes', function(req, res){
    res.json(noteList);
})

//receive a new note to save on the request
app.post("/api/notes", function(req, res){
    const newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text
    }
    noteList.push(newNote);
    fs.appendFileSync(dbFile, newNote);
    res.send({message: "New note saved."});
});

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
app.delete('/api/notes/:id', function (req, res){

})
// Listener ==================================================
app.listen(PORT, function() {
    console.log(`Serving notes on PORT ${PORT}`)
})
