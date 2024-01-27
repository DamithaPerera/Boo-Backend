// Requiring modules
const express = require('express');
const connectDB = require('./database/db');
const cors = require('cors');

const profile = require('./modules/user/user.router');
const comment = require('./modules/comment/comment.router');
// Creating express object
const app = express();


connectDB()

app.use(cors());
app.use(express.json());


app.use('/v1/profile', profile);
app.use('/v1/comment', comment);


// Server Setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


module.exports = app;