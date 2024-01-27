const express = require('express');
const {createProfile} = require("./user.controller");
const router = express.Router();


router.post('/create', createProfile);


module.exports = router;
