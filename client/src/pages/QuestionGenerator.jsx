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
    <div className="page-container">
      <h2 className="page-title">Generator Soal & Kisi-Kisi Ujian</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Mata Pelajaran:</label>
            <input 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
              placeholder="Masukkan mata pelajaran"
            />
          </div>
          <div className="form-group">
            <label>Topik:</label>
            <input 
              name="topic" 
              value={formData.topic} 
              onChange={handleChange} 
              required 
              placeholder="Masukkan topik pembelajaran"
            />
          </div>
          <div className="form-group">
            <label>Tingkat Kesulitan:</label>
            <select name="level" value={formData.level} onChange={handleChange}>
              <option value="easy">Mudah</option>
              <option value="medium">Sedang</option>
              <option value="hard">Sulit</option>
            </select>
          </div>
          <div className="form-group">
            <label>Jumlah Soal:</label>
            <input
              type="number"
              name="count"
              value={formData.count}
              onChange={handleChange}
              min="1"
              max="50"
              placeholder="Jumlah soal (1-50)"
            />
          </div>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Membuat Soal...' : 'Buat Soal'}
          </button>
        </form>
      </div>

      <h3 className="section-title">Bank Soal</h3>
      <div className="question-list">
        {questions.map((q) => (
          <div key={q.id} className="question-card">
            <h4>{q.subject} - {q.topic} ({q.level})</h4>
            <p className="question-text"><strong>Soal:</strong> {q.question}</p>
            <div className="options">
              <strong>Opsi:</strong>
              <ul>
                {JSON.parse(q.options).map((option, index) => (
                  <li key={index}>{String.fromCharCode(65 + index)}. {option}</li>
                ))}
              </ul>
            </div>
            <p className="answer"><strong>Jawaban Benar:</strong> {q.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionGenerator;