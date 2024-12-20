const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/NoteRoutes'); // Import the noteRoutes correctly


const DB_URL = "mongodb+srv://truongthuykyduyen:R2YYaUii0fPspBwk@mycluster.a0u4z.mongodb.net/MyDB?retryWrites=true&w=majority&appName=MyCluster";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL) 
.then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

app.use(noteRoutes);

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});