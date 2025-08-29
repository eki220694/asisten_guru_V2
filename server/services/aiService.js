// services/aiService.js
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.generateQuestions = async (subject, topic, level, count) => {
  const prompt = `
Buat ${count} soal ${level} tentang ${topic} dalam mata pelajaran ${subject}.
Format jawaban dalam JSON dengan field:
- question (string)
- options (array of 4 strings)
- answer (index 0-3)

Contoh format output:
[
  {
    "question": "Berapa 2+2?",
    "options": ["3", "4", "5", "6"],
    "answer": 1
  }
]
`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1500,
      temperature: 0.7,
    });

    const text = response.choices[0].message.content.trim();
    const questions = JSON.parse(text);
    return questions;
  } catch (err) {
    throw new Error('Gagal generate soal dari AI: ' + err.message);
  }
};