const express = require('express');
const {createComment, getAllComments, updateComment} = require("./comment.controller");
const router = express.Router();

router.get('/:profileId', getAllComments);
router.put('/:commentId', updateComment);
router.post('/create', createComment);


module.exports = router;
