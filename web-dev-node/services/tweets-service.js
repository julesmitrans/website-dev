const tweets = require('../../src/reducers/data/tweets.json');

module.exports = (app) => {
    const findAllTweets = (req, res) => {
        res.json(tweets);
    }

    app.get('/api/tweets', findAllTweets);
};

let tweets = require('../data/tweets.json');

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        res.json(tweets);
    }

    app.get('/api/tweets', findAllTweets);
};

const deleteTweet = (req, res) => {
    const id = req.params['id'];
    tweets = tweets.filter(tweet => tweet._id !== id);
    res.sendStatus(200);
}
app.delete('/api/tweets/:id', deleteTweet);

const likeTweet = (req, res) => {
    const id = req.params['id'];
    tweets = tweets.map(tweet => {
        if (tweet._id === id) {
            if (tweet.liked === true) {
                tweet.liked = false;
                tweet.stats.likes--;
            } else {
                tweet.liked = true;
                tweet.stats.likes++;
            }
            return tweet;
        } else {
            return tweet;
        }
    });
    res.sendStatus(200);
}
app.put('/api/tweets/:id/like', likeTweet);



