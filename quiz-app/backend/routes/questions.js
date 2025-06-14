const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// GET all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
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
