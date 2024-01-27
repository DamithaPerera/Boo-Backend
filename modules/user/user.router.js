const express = require('express');
const {createProfile, getAllProfiles, getProfile} = require("./user.controller");
const router = express.Router();

router.get('/all', getAllProfiles);
router.get('/:id', getProfile);
router.post('/create', createProfile);


module.exports = router;
