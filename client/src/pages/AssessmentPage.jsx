/* src/pages/AssessmentPage.jsx */
import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../config/api';

const AssessmentPage = () => {
  const [assessments, setAssessments] = useState([]);
  const [formData, setFormData] = useState({
    studentId: '',
    questionId: '',
    answer: '',
  });

  useEffect(() => {
    fetchAssessments();
  }, []);

  const fetchAssessments = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/assessments`);
      const data = await res.json();
      setAssessments(data);
    } catch (error) {
      console.error('Error fetching assessments:', error);
      alert('Gagal memuat data penilaian. Silakan coba lagi.');
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
    try {
      await fetch(`${API_BASE_URL}/assessments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      fetchAssessments();
      alert('Penilaian berhasil ditambahkan!');
      // Reset form
      setFormData({
        studentId: '',
        questionId: '',
        answer: '',
      });
    } catch (error) {
      console.error('Error saving assessment:', error);
      alert('Gagal menyimpan penilaian. Silakan coba lagi.');
    }
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Penilaian & Analisis Hasil Ujian</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Student ID:</label>
            <input 
              name="studentId" 
              value={formData.studentId} 
              onChange={handleChange} 
              required 
              placeholder="Masukkan ID siswa"
            />
          </div>
          <div className="form-group">
            <label>Question ID:</label>
            <input 
              name="questionId" 
              value={formData.questionId} 
              onChange={handleChange} 
              required 
              placeholder="Masukkan ID soal"
            />
          </div>
          <div className="form-group">
            <label>Jawaban:</label>
            <input 
              name="answer" 
              value={formData.answer} 
              onChange={handleChange} 
              required 
              placeholder="Masukkan jawaban siswa"
            />
          </div>
          <button type="submit" className="btn">Simpan Penilaian</button>
        </form>
      </div>

      <h3 className="section-title">Daftar Penilaian</h3>
      <div className="list-container">
        {assessments.length > 0 ? (
          <ul>
            {assessments.map((a) => (
              <li key={a.id}>
                <strong>Siswa {a.studentId}</strong> - Soal {a.questionId} - 
                Jawaban: {a.answer} - Skor: <span className="score">{a.score || 'Belum dinilai'}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Belum ada data penilaian.</p>
        )}
      </div>
    </div>
  );
};

export default AssessmentPage;