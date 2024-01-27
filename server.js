// Requiring modules
const express = require('express');
const {connectDB} = require('./database/db');

// Creating express object
const app = express();


connectDB()

// Server Setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});