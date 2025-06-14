//routes/results.js
const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

// Submit quiz result
router.post('/', async (req, res) => {
  const result = new Result(req.body);
  try {
    await result.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get leaderboard
router.get('/', async (req, res) => {
  try {
    const results = await Result.find().sort({ score: -1 }).limit(10);
    res.json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
