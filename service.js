var _ = require('lodash')
var uuid = require('uuid')
var data = [];

var saveReviews = async (req, res) => {
    var id = req.params.id;
    var review = req.body;
    console.log(review)
    review.reviewId = uuid();
    console.log(review);
    data.push(review);
    res.json(review);
}

var getReviews = async (req, res) => {
    console.log("call")
    var id = req.params.id;
    const resp = [];
    _.forEach(data, (review) => {
        if (review.isbn === id) {
            resp.push(review);
        }
    })

    res.json(resp)
}

module.exports.saveReviews = saveReviews;
module.exports.getReviews = getReviews;