const express = require('express');
const {createComment} = require("./comment.controller");
const router = express.Router();

// router.get('/all', getAllProfiles);
// router.get('/:id', getProfile);
router.post('/create', createComment);


module.exports = router;
