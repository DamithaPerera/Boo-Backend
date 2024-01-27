const express = require('express');
const {createProfile, getAllProfiles} = require("./user.controller");
const router = express.Router();

router.get('/all', getAllProfiles);
router.post('/create', createProfile);


module.exports = router;
