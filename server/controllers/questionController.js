// controllers/questionController.js
const { PrismaClient } = require('@prisma/client');
const aiService = require('../services/aiService');
const prisma = new PrismaClient();

exports.generateQuestions = async (req, res) => {
  const { subject, topic, level, count } = req.body;

  try {
    let aiQuestions;

    try {
      // Coba dapatkan soal dari AI
      aiQuestions = await aiService.generateQuestions(subject, topic, level, count);
    } catch (aiError) {
      // Fallback ke dummy jika AI gagal
      console.warn('AI tidak tersedia, menggunakan dummy data:', aiError.message);
      aiQuestions = [];
      for (let i = 1; i <= count; i++) {
        aiQuestions.push({
          question: `Soal ${i} tentang ${topic} (${level})`,
          options: ['A', 'B', 'C', 'D'],
          answer: 0, // index
        });
      }
    }

    // Simpan ke database
    const questionsToSave = aiQuestions.map((q) => ({
      subject,
      topic,
      level,
      question: q.question,
      options: JSON.stringify(q.options),
      answer: q.options[q.answer],
    }));

    const savedQuestions = await prisma.question.createMany({
      data: questionsToSave,
    });

    res.status(201).json(savedQuestions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getQuestions = async (req, res) => {
  try {
    const questions = await prisma.question.findMany();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};