# Panduan Pengguna asisten_guru V2

## 🚀 Memulai

### Prasyarat
- Node.js v16+
- SQLite (sudah terintegrasi)
- API key OpenAI (opsional, untuk fitur AI)

### Instalasi
```bash
# 1. Clone repo
git clone <url-repo>
cd asisten_guru_V2

# 2. Jalankan backend
cd server
npm install
npm run dev

# 3. Jalankan frontend (di tab baru)
cd client
npm install
npm run dev
```

Akses aplikasi di `http://localhost:5173`

---

## 🧠 Fitur Utama

### 1. Generator Soal & Kisi-Kisi Ujian
- Masukkan topik & level kesulitan
- Dapatkan soal otomatis dari AI (jika aktif)
- Lihat & simpan soal di bank soal

### 2. Penilaian & Analisis Hasil Ujian
- Input jawaban siswa
- Sistem otomatis koreksi (pilihan ganda)
- Lihat analisis nilai per siswa/topik

### 3. Bank Materi & Media Interaktif
- Upload materi (PDF, video, gambar)
- Kelola berdasar kelas & mata pelajaran
- Akses kapan saja di kelas

### 4. Agenda & Jadwal KBM
- Buat jadwal mengajar
- Tambahkan reminder & catatan
- Sinkronisasi dengan kalender digital

---

## 🔧 Integrasi AI

### Aktifkan Fitur AI
1. Dapatkan API key di [platform.openai.com](https://platform.openai.com/account/api-keys)
2. Update `.env`:
   ```
   OPENAI_API_KEY=sk-xxxxxx
   ```
3. Restart server

### Model AI yang Digunakan
- `gpt-3.5-turbo` untuk generator soal
- Bisa diganti di `services/aiService.js`

---

## 📁 Struktur Proyek

```
asisten_guru_V2/
├── client/          # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
├── server/          # Node.js Backend
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── prisma/
│   └── server.js
├── API_DOCS.md      # Dokumentasi API
├── AI_INTEGRATION_DOCS.md
└── README.md
```

---

## 🛠️ Perintah Berguna

### Backend
```bash
cd server
npm run dev         # Jalankan development server
npx prisma studio   # Lihat database di browser
```

### Frontend
```bash
cd client
npm run dev         # Jalankan development server
npm run build       # Build untuk produksi
```

---

## 📤 Export & Deployment

### Export Soal ke PDF
- Fitur ini akan ditambahkan dalam update berikutnya.

### Deploy ke Server
- Ikuti panduan di `DEPLOYMENT.md` (akan dibuat).

---

## 🤝 Kontribusi

1. Fork repo
2. Buat branch fitur baru
3. Commit perubahan
4. Push ke branch
5. Buat Pull Request

---

## 📞 Dukungan

Jika ada masalah, buat issue di GitHub atau hubungi tim pengembang.