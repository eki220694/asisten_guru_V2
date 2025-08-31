/* src/pages/QuestionGenerator.jsx */
import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../config/api';

const QuestionGenerator = () => {
  const [formData, setFormData] = useState({
    subject: '',
    topic: '',
    level: 'easy',
    count: 5,
  });
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/questions`);
      const data = await res.json();
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
      alert('Gagal memuat soal. Silakan coba lagi.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/questions/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.error) {
        alert('Error: ' + data.error);
      } else {
        alert('Soal berhasil dibuat!');
        fetchQuestions(); // Refresh list
      }
    } catch (error) {
      console.error('Error generating questions:', error);
      alert('Gagal membuat soal. Silakan coba lagi.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Generator Soal & Kisi-Kisi Ujian</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Mata Pelajaran:</label>
          <input name="subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <div>
          <label>Topik:</label>
          <input name="topic" value={formData.topic} onChange={handleChange} required />
        </div>
        <div>
          <label>Tingkat Kesulitan:</label>
          <select name="level" value={formData.level} onChange={handleChange}>
            <option value="easy">Mudah</option>
            <option value="medium">Sedang</option>
            <option value="hard">Sulit</option>
          </select>
        </div>
        <div>
          <label>Jumlah Soal:</label>
          <input
            type="number"
            name="count"
            value={formData.count}
            onChange={handleChange}
            min="1"
            max="50"
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Membuat Soal...' : 'Buat Soal'}
        </button>
      </form>

      <h3>Bank Soal</h3>
      <div className="question-list">
        {questions.map((q) => (
          <div key={q.id} className="question-card">
            <h4>{q.subject} - {q.topic} ({q.level})</h4>
            <p><strong>Soal:</strong> {q.question}</p>
            <p><strong>Opsi:</strong> {JSON.parse(q.options).join(', ')}</p>
            <p><strong>Jawaban Benar:</strong> {q.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionGenerator;