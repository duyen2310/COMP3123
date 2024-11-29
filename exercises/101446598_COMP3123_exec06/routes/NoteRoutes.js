const noteModel = require('../models/NotesModel.js');
const express = require('express');
const app = express();
const router = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/notes', async (req, res) => {
    // Validate request
    const noteData= req.body;

    console.log(noteData)

    console.log(req.body);
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });

    }
    else{
        try {
            const note = new noteModel(noteData)

            const newNote = await note.save();
            res.send(newNote);
        }
        catch (error){
            res.status(500).send({message: error.message})
        }
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', async (req, res) => {
    //TODO - Write your code here to returns all note
    try {
        console.log('Received request for /notes');

        res.status(200).send(await noteModel.find({}))
    } catch (err) {
        res.error(err)
    }
            
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', async (req, res) => {

    //TODO - Write your code here to return onlt one note using noteid
    noteModel.findById(req.params.noteId).then((note) =>{
        if(note){
            res.send(note)
        } else {
            res.status(400).send({message: "Note not found"})
        }
    }).catch((error) =>{
        res.status(500).send({message: error.message})
    })

});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid

    noteModel.findByIdAndUpdate(req.params.noteId, req.body, {new: true})
        .then((note) => {
            if(note){
                res.send(note)
            } else{
                res.status(404).send({message:"Note not found"})
            }
        }).catch((error) => {
            res.status(500).send({message: error.message})
        })
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', async (req, res) => {
    //TODO - Write your code here to delete the note using noteid
    noteModel.findByIdAndDelete(req.params.noteId).then((note) =>{
        if(note){
            res.send(note)
        } else {
            res.status(400).send({message: "Note not found"})
        }
    }).catch((error) =>{
        res.status(500).send({message: error.message})
    })
});

module.exports = router;