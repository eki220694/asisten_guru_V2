# asisten_guru V2

Aplikasi pendukung tugas guru berbasis web dengan fitur:
- Generator Soal & Kisi-Kisi Ujian (dengan AI)
- Penilaian & Analisis Hasil Ujian
- Bank Materi & Media Interaktif
- Agenda & Jadwal KBM

## 📁 Struktur Proyek
- `/client` - Frontend (React + Vite)
- `/server` - Backend (Node.js + Express + Prisma + SQLite)
- `/docs` - Dokumentasi

## ▶️ Setup Lokal
1. Clone repo
2. Jalankan `npm install` di `/client` dan `/server`
3. Jalankan `npm run dev` untuk mulai development

## 🚀 Deployment
- Ikuti panduan di `DEPLOYMENT.md`
- Frontend: Netlify
- Backend: Railway

## 📚 Dokumentasi
- `USER_GUIDE.md` - Panduan pengguna
- `API_DOCS.md` - Dokumentasi API
- `AI_INTEGRATION_DOCS.md` - Integrasi AI
- `DEPLOYMENT.md` - Panduan deploy

## 🧠 Fitur AI
- Generator soal otomatis dengan GPT-3.5
- Fallback ke dummy data jika API key tidak aktif
- Mudah diaktifkan dengan API key OpenAI

## 📞 Dukungan
Jika ada masalah, buat issue di GitHub atau hubungi tim pengembang.