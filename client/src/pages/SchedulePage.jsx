/* src/pages/SchedulePage.jsx */
import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../config/api';

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
    try {
      const res = await fetch(`${API_BASE_URL}/schedules`);
      const data = await res.json();
      setSchedules(data);
    } catch (error) {
      console.error('Error fetching schedules:', error);
      alert('Gagal memuat agenda. Silakan coba lagi.');
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
      await fetch(`${API_BASE_URL}/schedules`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      fetchSchedules();
      alert('Agenda berhasil ditambahkan!');
      // Reset form
      setFormData({
        title: '',
        date: '',
        startTime: '',
        endTime: '',
        location: '',
        notes: '',
      });
    } catch (error) {
      console.error('Error saving schedule:', error);
      alert('Gagal menyimpan agenda. Silakan coba lagi.');
    }
  };

  // Function to format date
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Agenda & Jadwal KBM</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Judul:</label>
            <input 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              required 
              placeholder="Masukkan judul agenda"
            />
          </div>
          <div className="form-group">
            <label>Tanggal:</label>
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Waktu Mulai:</label>
            <input 
              type="time" 
              name="startTime" 
              value={formData.startTime} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Waktu Selesai:</label>
            <input 
              type="time" 
              name="endTime" 
              value={formData.endTime} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Lokasi (opsional):</label>
            <input 
              name="location" 
              value={formData.location} 
              onChange={handleChange} 
              placeholder="Masukkan lokasi kegiatan"
            />
          </div>
          <div className="form-group">
            <label>Catatan (opsional):</label>
            <textarea 
              name="notes" 
              value={formData.notes} 
              onChange={handleChange} 
              placeholder="Tambahkan catatan tambahan"
            />
          </div>
          <button type="submit" className="btn">Simpan Agenda</button>
        </form>
      </div>

      <h3 className="section-title">Daftar Agenda</h3>
      <div className="list-container">
        {schedules.length > 0 ? (
          <ul>
            {schedules.map((s) => (
              <li key={s.id} className="schedule-item">
                <div className="schedule-header">
                  <strong className="schedule-title">{s.title}</strong>
                  <span className="schedule-date">{formatDate(s.date)}</span>
                </div>
                <div className="schedule-time">
                  <span className="time-label">Waktu:</span> 
                  <span className="time-value">{s.startTime} - {s.endTime}</span>
                </div>
                {s.location && (
                  <div className="schedule-location">
                    <span className="location-label">Lokasi:</span> 
                    <span className="location-value">{s.location}</span>
                  </div>
                )}
                {s.notes && (
                  <div className="schedule-notes">
                    <span className="notes-label">Catatan:</span> 
                    <span className="notes-value">{s.notes}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>Belum ada agenda yang tersedia.</p>
        )}
      </div>
    </div>
  );
};

export default SchedulePage;