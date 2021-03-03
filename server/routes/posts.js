
const postsControls = require('../controllers/posts')
const express = require('express');

const router = express.Router();

router.get('/', postsControls.getPosts);
router.post('/', postsControls.createPost);

exports.router = router;