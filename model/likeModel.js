const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the objects in your JSON array
const likeSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  id: {
    type: Array,
    default: [] // default to an empty array
  }
});

// Create the Mongoose model using the defined schema
const Like = mongoose.model('like', likeSchema);

module.exports = Like;
