const mongoose = require('mongoose');

// Define schema
const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  views: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
});

// Create model
const Video = mongoose.model('QTube', videoSchema,'videos');

module.exports = Video;
