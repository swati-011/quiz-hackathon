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

// ✅ Updated Question Schema
const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
  category: String // ✅ Include this!
});

const Question = mongoose.model('Question', questionSchema);

// ✅ GET Questions by Category
app.get('/api/questions', async (req, res) => {
  const category = req.query.category;

  try {
    const filter = category
      ? { category: { $regex: new RegExp(category, 'i') } }
      : {};

    const questions = await Question.find(filter);
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching questions' });
  }
});

// 🔧 TEMP: Add sample questions
app.post('/api/add-sample', async (req, res) => {
  await Question.insertMany([
    {
      question: "What is React?",
      options: ["Library", "Framework", "Language", "Tool"],
      answer: "Library",
      category: "React"
    },
    {
      question: "What is Node.js?",
      options: ["Framework", "Runtime", "Library", "Language"],
      answer: "Runtime",
      category: "NodeJS"
    }
  ]);
  res.send("✅ Sample questions added");
});

// 🚀 Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
