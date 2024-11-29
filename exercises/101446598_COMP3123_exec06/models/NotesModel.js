const mongoose = require('mongoose');

// Create Note Schema
const NoteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
    },
    noteDescription: {
        type: String,
    },
    priority: {
        type: String,
        enum: ['HIGH', 'MEDIUM', 'LOW'],  
    }
}, {
    timestamps: { createdAt: 'dateAdded', updatedAt: 'dateUpdated' }  // Automatically manage timestamps
});

const Note = mongoose.model('Note', NoteSchema);
module.exports = Note;
