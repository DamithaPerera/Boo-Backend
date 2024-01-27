// Requiring modules
const express = require('express');
const connectDB = require('./database/db');
const cors = require('cors');

const profile = require('./modules/user/user.router');
// Creating express object
const app = express();


connectDB()

app.use(cors());
app.use(express.json());


app.use('/v1/profile', profile);


// Server Setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


module.exports = app;