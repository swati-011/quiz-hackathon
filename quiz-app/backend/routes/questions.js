//routes/questions.js
const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// GET all questions
// GET questions by category: /api/questions?category=React
router.get('/', async (req, res) => {
  const { category } = req.query;
  try {
    const filter = category ? { category } : {};
    const questions = await Question.find(filter);
    res.json(questions);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


// (Optional) POST new question
router.post('/', async (req, res) => {
  const question = new Question(req.body);
  try {
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
