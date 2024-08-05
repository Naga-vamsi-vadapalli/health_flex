const express = require('express');
const { postTweet, getUserTimeline } = require('../controllers/tweetController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, postTweet);
router.get('/:userId/timeline', auth, getUserTimeline);

module.exports = router;
