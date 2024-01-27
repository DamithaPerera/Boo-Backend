const express = require('express');
const {createComment, getAllComments} = require("./comment.controller");
const router = express.Router();

router.get('/:profileId', getAllComments);
// router.get('/:id', getProfile);
router.post('/create', createComment);


module.exports = router;
