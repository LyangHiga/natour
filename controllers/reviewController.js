const Review = require('../models/reviewModel');
const {
  deleteOne,
  updateOne,
  createOne,
  getOne,
  getAll,
} = require('./handlerFactory');

exports.getAllReviews = getAll(Review);

exports.getReview = getOne(Review);

exports.setTourUserIds = (req, res, next) => {
  //   take from url param
  if (!req.body.tour) req.body.tour = req.params.tourId;
  // take user id from protect middleware
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.createReview = createOne(Review);

exports.updateReview = updateOne(Review);

exports.deleteReview = deleteOne(Review);
