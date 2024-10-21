const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL of the image
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
