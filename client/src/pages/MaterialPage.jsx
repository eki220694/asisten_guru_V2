/* src/pages/MaterialPage.jsx */
import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../config/api';

const MaterialPage = () => {
  const [materials, setMaterials] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    class: '',
    subject: '',
    type: 'pdf',
    url: '',
  });

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/materials`);
      const data = await res.json();
      setMaterials(data);
    } catch (error) {
      console.error('Error fetching materials:', error);
      alert('Gagal memuat data materi. Silakan coba lagi.');
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
      await fetch(`${API_BASE_URL}/materials`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      fetchMaterials();
      alert('Materi berhasil ditambahkan!');
      // Reset form
      setFormData({
        title: '',
        class: '',
        subject: '',
        type: 'pdf',
        url: '',
      });
    } catch (error) {
      console.error('Error saving material:', error);
      alert('Gagal menyimpan materi. Silakan coba lagi.');
    }
  };

  // Function to get icon based on material type
  const getTypeIcon = (type) => {
    switch (type) {
      case 'pdf': return '📄';
      case 'video': return '🎥';
      case 'image': return '🖼️';
      default: return '📁';
    }
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Bank Materi & Media Interaktif</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Judul:</label>
            <input 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              required 
              placeholder="Masukkan judul materi"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label>Kelas:</label>
            <input 
              name="class" 
              value={formData.class} 
              onChange={handleChange} 
              required 
              placeholder="Masukkan kelas (contoh: X, XI, XII)"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label>Mata Pelajaran:</label>
            <input 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
              placeholder="Masukkan mata pelajaran"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label>Tipe:</label>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="pdf">PDF</option>
              <option value="video">Video</option>
              <option value="image">Gambar</option>
            </select>
          </div>
          <div className="form-group">
            <label>URL:</label>
            <input 
              name="url" 
              value={formData.url} 
              onChange={handleChange} 
              required 
              placeholder="Masukkan URL materi"
              autoComplete="off"
            />
          </div>
          <button type="submit" className="btn">Simpan Materi</button>
        </form>
      </div>

      <h3 className="section-title">Daftar Materi</h3>
      <div className="list-container">
        {materials.length > 0 ? (
          materials.map((m) => (
            <div className="material-item" key={m.id}>
              <span className="material-icon">{getTypeIcon(m.type)}</span>
              <div className="material-info">
                <div className="material-title">{m.title}</div>
                <div className="material-meta">
                  {m.class} - {m.subject} ({m.type})
                </div>
              </div>
              <a 
                href={m.url} 
                target="_blank" 
                rel="noreferrer" 
                className="material-link"
              >
                Lihat
              </a>
            </div>
          ))
        ) : (
          <p>Belum ada materi yang tersedia.</p>
        )}
      </div>
    </div>
  );
};

export default MaterialPage;