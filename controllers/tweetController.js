const Tweet = require('../models/Tweet');

const postTweet = async (req, res) => {
  try {
    const { text } = req.body;
    const tweet = new Tweet({ userId: req.user.userId, text });
    await tweet.save();
    res.status(201).json(tweet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserTimeline = async (req, res) => {
  try {
    const tweets = await Tweet.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(tweets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { postTweet, getUserTimeline };
