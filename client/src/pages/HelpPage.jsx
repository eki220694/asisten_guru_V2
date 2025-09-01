// src/pages/HelpPage.jsx
import React from 'react';

const HelpPage = () => {
  return (
    <div className="page-container">
      <h2 className="page-title">Halaman Bantuan</h2>
      
      <div className="form-container">
        <div className="help-section">
          <h3>❓ Cara Menggunakan Generator Soal AI</h3>
          <ol>
            <li><strong>Isi Formulir</strong>:
              <ul>
                <li>Pilih mata pelajaran (misal: Matematika)</li>
                <li>Masukkan topik (misal: Trigonometri)</li>
                <li>Pilih level kesulitan (Mudah/Sedang/Sulit)</li>
                <li>Tentukan jumlah soal (1-50)</li>
              </ul>
            </li>
            <li><strong>Klik "Buat Soal"</strong>:
              <ul>
                <li>Jika API key aktif, soal akan di-generate oleh AI.</li>
                <li>Jika tidak, sistem menggunakan dummy data otomatis.</li>
              </ul>
            </li>
            <li><strong>Lihat Hasil</strong>:
              <ul>
                <li>Soal akan muncul di bawah dalam bentuk kartu.</li>
                <li>Setiap soal menampilkan:</li>
                <ul>
                  <li>Soal</li>
                  <li>Opsi jawaban</li>
                  <li>Jawaban benar</li>
                </ul>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="form-container">
        <div className="help-section">
          <h3>❓ Cara Mengelola Materi</h3>
          <ol>
            <li><strong>Tambah Materi</strong>:
              <ul>
                <li>Klik menu "Bank Materi"</li>
                <li>Isi judul, kelas, mata pelajaran</li>
                <li>Pilih tipe (PDF/Video/Gambar)</li>
                <li>Masukkan URL materi</li>
              </ul>
            </li>
            <li><strong>Akses Materi</strong>:
              <ul>
                <li>Semua materi tersedia di daftar</li>
                <li>Klik "Lihat" untuk membuka materi</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="form-container">
        <div className="help-section">
          <h3>❓ Cara Mengelola Agenda</h3>
          <ol>
            <li><strong>Tambah Agenda</strong>:
              <ul>
                <li>Klik menu "Agenda KBM"</li>
                <li>Isi judul, tanggal, waktu</li>
                <li>Tambahkan lokasi/catatan jika perlu</li>
              </ul>
            </li>
            <li><strong>Lihat Agenda</strong>:
              <ul>
                <li>Semua agenda ditampilkan berurutan</li>
                <li>Mudah diakses untuk persiapan mengajar</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="form-container">
        <div className="help-section">
          <h3>❓ Integrasi AI</h3>
          <p>Untuk aktifkan AI, lihat <code>AI_INTEGRATION_DOCS.md</code></p>
          <p>Pastikan API key OpenAI valid & aktif</p>
          <p>AI akan otomatis digunakan jika tersedia</p>
        </div>
      </div>
      
      <div className="form-container">
        <div className="help-section">
          <h3>❓ Masalah Umum</h3>
          <h4>Tidak Bisa Generate Soal</h4>
          <ul>
            <li>Pastikan server berjalan</li>
            <li>Cek koneksi internet</li>
            <li>Periksa API key jika menggunakan fitur AI</li>
          </ul>
          
          <h4>Data Tidak Muncul</h4>
          <ul>
            <li>Refresh halaman</li>
            <li>Cek apakah server & database aktif</li>
          </ul>
        </div>
      </div>
      
      <div className="form-container">
        <div className="help-section">
          <h3>📞 Butuh Bantuan Lebih Lanjut?</h3>
          <p>Hubungi tim pengembang atau buat issue di GitHub.</p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;