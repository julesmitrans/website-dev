const tweets = require('../reducers/data/tweets.json');

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        res.json(tweets);
    }

    app.get('/api/tweets', findAllTweets);
};





























// const tweets = require('../../src/reducers/data/tweets.json');
//
//
// module.exports = (app) => {
//
//     const deleteTweet = (req, res) => {
//         const id = req.params['id'];
//         const tweets = tweets.filter(tweet => tweet._id !== id);
//         res.sendStatus(200);
//     }
//     app.delete('/api/tweets/:id', deleteTweet);
//
//
//     const likeTweet = (req, res) => {
//         const id = req.params['id'];
//         const tweets = tweets.map(tweet => {
//             if (tweet._id === id) {
//                 if (tweet.liked === true) {
//                     tweet.liked = false;
//                     tweet.stats.likes--;
//                 } else {
//                     tweet.liked = true;
//                     tweet.stats.likes++;
//                 }
//                 return tweet;
//             } else {
//                 return tweet;
//             }
//         });
//         res.sendStatus(200);
//     }
//     app.put('/api/tweets/:id/like', likeTweet);
//
//     const postNewTweet = (req, res) => {
//         const newTweet = {
//             _id: (new Date()).getTime() + '',
//             "topic": "Web Development",
//             "userName": "ReactJS",
//             "verified": false,
//             "handle": "ReactJS",
//             "time": "2h",
//             "avatar-image": "../../../images/react-blue.png",
//             "logo-image": "../../../images/react-blue.png",
//             "stats": {
//                 "comments": 123,
//                 "retweets": 234,
//                 "likes": 345
//             },
//             ...req.body,
//         }
//         // const tweets = [
//         //     newTweet,
//         //     ...tweets
//         // ];
//         res.json(newTweet);
//     }
//
//     app.post('/api/tweets', createTweet);
//
//
//
//     const findAllTweets = (req, res) => {
//         res.json(tweets);
//     }
//
//     app.get('/api/tweets', findAllTweets);
// };
//
//
//
//
//
