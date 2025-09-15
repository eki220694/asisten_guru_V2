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
    
    // Coba parse JSON dengan penanganan error yang lebih baik
    try {
      const questions = JSON.parse(text);
      
      // Validasi struktur data
      if (!Array.isArray(questions)) {
        throw new Error('Respons AI tidak dalam format array');
      }
      
      // Validasi setiap soal
      for (const q of questions) {
        if (!q.question || !Array.isArray(q.options) || q.options.length !== 4 || typeof q.answer !== 'number' || q.answer < 0 || q.answer > 3) {
          throw new Error('Struktur soal tidak valid');
        }
      }
      
      return questions;
    } catch (parseError) {
      throw new Error('Gagal memproses respons AI: ' + parseError.message);
    }
  } catch (err) {
    throw new Error('Gagal generate soal dari AI: ' + err.message);
  }
};