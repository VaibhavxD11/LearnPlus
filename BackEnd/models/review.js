const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, required: true },
    college: { type: String, requiured: true },
    review: { type: String, required: true }

});

const Review = mongoose.model("review", reviewSchema);
module.exports = { Review };