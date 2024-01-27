const express = require('express');
const {createComment, getAllComments, updateComment, likeComment} = require("./comment.controller");
const router = express.Router();

router.get('/:profileId', getAllComments);
router.put('/:commentId', updateComment);
router.post('/create', createComment);
router.post('/like', likeComment);


module.exports = router;
