// const mongoose = require('mongoose');

// const QuestionSchema = new mongoose.Schema({
//   question: String,
//   options: [String],
//   answer: Number, // index of correct option
// });

// module.exports = mongoose.model('Question', QuestionSchema);

const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  category: { type: String, required: true }, // new field
  question: String,
  options: [String],
  answer: String // or Number (based on your usage)
});

module.exports = mongoose.model('Question', QuestionSchema);
