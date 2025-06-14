const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: Number, // index of correct option
});

module.exports = mongoose.model('Question', QuestionSchema);
