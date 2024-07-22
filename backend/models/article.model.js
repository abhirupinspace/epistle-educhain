const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  heading: {
    type: String,
    required: true
  },
  subheading: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  },
  uploadMedia: {
    type: String,
    required: false
  },
  time: {
    type: Date,
    default: Date.now
  },
  upVote: {
    type: Number,
    default: 0,
    required: true
  },
  downVote: {
    type: Number,
    default: 0,
    required: true
  }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
