/* src/pages/AssessmentPage.jsx */
import React, { useState, useEffect } from 'react';

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
    const res = await fetch('http://localhost:5000/api/assessments');
    const data = await res.json();
    setAssessments(data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/assessments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    fetchAssessments();
    alert('Penilaian berhasil ditambahkan!');
  };

  return (
    <div>
      <h2>Penilaian & Analisis Hasil Ujian</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student ID:</label>
          <input name="studentId" value={formData.studentId} onChange={handleChange} required />
        </div>
        <div>
          <label>Question ID:</label>
          <input name="questionId" value={formData.questionId} onChange={handleChange} required />
        </div>
        <div>
          <label>Jawaban:</label>
          <input name="answer" value={formData.answer} onChange={handleChange} required />
        </div>
        <button type="submit">Simpan Penilaian</button>
      </form>

      <h3>Daftar Penilaian</h3>
      <ul>
        {assessments.map((a) => (
          <li key={a.id}>
            Siswa {a.studentId} - Soal {a.questionId} - Jawaban: {a.answer} - Skor: {a.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssessmentPage;