// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/quizdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Define Question Schema & Model
const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String
});

const Question = mongoose.model('Question', questionSchema);

// ✅ GET Questions
app.get('/api/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

// 🔧 TEMP Route to insert sample questions
app.post('/api/add-sample', async (req, res) => {
  await Question.insertMany([
    {
      question: "What is React?",
      options: ["Library", "Framework", "Language", "Tool"],
      answer: "Library"
    },
    {
      question: "Who maintains React?",
      options: ["Facebook", "Google", "Microsoft", "Amazon"],
      answer: "Facebook"
    }
  ]);
  res.send("✅ Sample questions added");
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
