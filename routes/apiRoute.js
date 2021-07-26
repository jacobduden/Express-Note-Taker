const express = require('express');
const db = require('../db/db.json');
const path = require('path');
const router = express(); 
const fs = require('fs');

fs.readFile(path.join(__dirname, '../db/db.json'), "utf8", (err, data)=>{
    if (err) throw err

const note = JSON.parse(data);

router.get('/notes', (req, res)=>{
    res.send(note); 
});

router.post('/notes', (req, res)=>{
   let newNote = req.body;
   note.push(newNote)
    updateDatabase(note);
});

router.get('/notes/:id', (req, res) =>{
    res.json(note[req.params.id]);
});
router.delete('/notes/:id', (req, res)=>{
    note.splice(req.params.id, 1);
    updateDatabase();
})
});

updateDatabase = function(note){
fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(note), err =>{
   if(err) {
       console.log(err)
    }
});
}

module.exports = router