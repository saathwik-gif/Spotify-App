const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String, 
    required: true,
  },
  duration: {
    type: Number, //in seconds
    required: true,
  },
});

module.exports = mongoose.model('Song', songSchema);
