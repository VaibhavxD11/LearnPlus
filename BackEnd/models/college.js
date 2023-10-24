const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
    name: String,
    rank: String,
    description: String,
    link: String,
    courses: {
        type: Object,
        of: Array,
    },
});

const College = mongoose.model("college", collegeSchema);
module.exports = { College };