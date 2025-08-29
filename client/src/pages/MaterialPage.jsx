/* src/pages/MaterialPage.jsx */
import React, { useState, useEffect } from 'react';

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
    const res = await fetch('http://localhost:5000/api/materials');
    const data = await res.json();
    setMaterials(data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/materials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    fetchMaterials();
    alert('Materi berhasil ditambahkan!');
  };

  return (
    <div>
      <h2>Bank Materi & Media Interaktif</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Judul:</label>
          <input name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Kelas:</label>
          <input name="class" value={formData.class} onChange={handleChange} required />
        </div>
        <div>
          <label>Mata Pelajaran:</label>
          <input name="subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <div>
          <label>Tipe:</label>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="pdf">PDF</option>
            <option value="video">Video</option>
            <option value="image">Gambar</option>
          </select>
        </div>
        <div>
          <label>URL:</label>
          <input name="url" value={formData.url} onChange={handleChange} required />
        </div>
        <button type="submit">Simpan Materi</button>
      </form>

      <h3>Daftar Materi</h3>
      <ul>
        {materials.map((m) => (
          <li key={m.id}>
            <strong>{m.title}</strong> ({m.class} - {m.subject}) - {m.type}: <a href={m.url} target="_blank" rel="noreferrer">Lihat</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaterialPage;