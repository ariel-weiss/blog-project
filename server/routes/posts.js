
const postsControls = require('../controllers/posts')
const express = require('express');

const router = express.Router();

router.get('/', postsControls.getPosts);
router.post('/', postsControls.createPost);
router.patch('/:id', postsControls.updatePost);

exports.router = router;