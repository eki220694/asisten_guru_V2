/* src/pages/SchedulePage.jsx */
import React, { useState, useEffect } from 'react';

const SchedulePage = () => {
  const [schedules, setSchedules] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    notes: '',
  });

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    const res = await fetch('http://localhost:5000/api/schedules');
    const data = await res.json();
    setSchedules(data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/schedules', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    fetchSchedules();
    alert('Agenda berhasil ditambahkan!');
  };

  return (
    <div>
      <h2>Agenda & Jadwal KBM</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Judul:</label>
          <input name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Tanggal:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Waktu Mulai:</label>
          <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} required />
        </div>
        <div>
          <label>Waktu Selesai:</label>
          <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} required />
        </div>
        <div>
          <label>Lokasi (opsional):</label>
          <input name="location" value={formData.location} onChange={handleChange} />
        </div>
        <div>
          <label>Catatan (opsional):</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange} />
        </div>
        <button type="submit">Simpan Agenda</button>
      </form>

      <h3>Daftar Agenda</h3>
      <ul>
        {schedules.map((s) => (
          <li key={s.id}>
            <strong>{s.title}</strong> - {new Date(s.date).toLocaleDateString()} ({s.startTime} - {s.endTime})<br />
            Lokasi: {s.location || '-'}<br />
            Catatan: {s.notes || '-'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchedulePage;