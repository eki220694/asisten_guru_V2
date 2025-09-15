# Asisten Guru V2

Aplikasi web untuk membantu tugas sehari-hari guru dengan fitur:
- Generator Soal & Kisi-Kisi Ujian (dengan AI)
- Penilaian & Analisis Hasil Ujian
- Bank Materi & Media Interaktif
- Agenda & Jadwal KBM

## 🌐 Akses Aplikasi (Untuk Guru)

Aplikasi dapat diakses langsung melalui browser tanpa perlu instalasi:

**Frontend (Antarmuka Pengguna)**: [https://asisten-guru.netlify.app](https://asisten-guru.netlify.app) *(akan diperbarui setelah deployment)*
**Backend (API Server)**: [https://asisten-guru-v2.vercel.app](https://asisten-guru-v2.vercel.app) *(akan diperbarui setelah deployment)*

### 📱 Cara Menggunakan
1. Buka browser Anda (Chrome, Firefox, Safari, dll)
2. Kunjungi URL aplikasi
3. Aplikasi akan terbuka dan siap digunakan
4. Tidak perlu instalasi apapun!

## 🛠️ Untuk Developer & Administrator

### 📦 Instalasi Lokal
```bash
# Clone repository
git clone <repository-url>
cd asisten_guru_V2

# Instal dependensi server
cd server
npm install
cd ..

# Instal dependensi client
cd client
npm install
cd ..
```

### ▶️ Menjalankan Secara Lokal
```bash
# Jalankan server (di terminal pertama)
cd server
npm run dev

# Jalankan client (di terminal kedua)
cd client
npm run dev
```

### 🚀 Deployment
Proyek ini dikonfigurasi untuk deployment otomatis menggunakan GitHub Actions:
- **Frontend**: Netlify
- **Backend**: Vercel
- **Database**: SQLite (file-based)

#### Prasyarat Deployment
1. Buat akun di Netlify dan Vercel
2. Tambahkan secrets berikut di GitHub:
   - `NETLIFY_AUTH_TOKEN`
   - `NETLIFY_SITE_ID`
   - `VERCEL_TOKEN`
   - `VERCEL_PROJECT_ID`
   - `VERCEL_ORG_ID`

#### Cara Deploy
1. Push ke branch `main`
2. GitHub Actions akan otomatis menjalankan deployment
3. Aplikasi akan live dalam beberapa menit

### 🧠 Fitur AI
Untuk mengaktifkan fitur generator soal berbasis AI:
1. Dapatkan API key dari [OpenAI Platform](https://platform.openai.com/account/api-keys)
2. Tambahkan ke environment variables Vercel:
   - `OPENAI_API_KEY=sk-xxxxxx`

## 📁 Struktur Proyek
```
asisten_guru_V2/
├── client/              # React Frontend
│   ├── public/          # File statis
│   ├── src/             # Kode sumber React
│   │   ├── components/  # Komponen React
│   │   ├── pages/       # Halaman aplikasi
│   │   ├── config/      # Konfigurasi
│   │   └── ...
│   ├── index.html       # HTML utama
│   └── package.json     # Dependensi client
├── server/              # Node.js Backend
│   ├── controllers/     # Controller API
│   ├── routes/          # Routing API
│   ├── services/        # Service layer
│   ├── middleware/      # Middleware
│   ├── prisma/          # Prisma schema & migrations
│   ├── server.js        # Entry point server
│   └── package.json     # Dependensi server
├── .github/workflows/   # GitHub Actions
├── README.md            # Dokumentasi utama
└── ...
```

## 📚 Dokumentasi Lengkap
- [USER_GUIDE.md](USER_GUIDE.md) - Panduan pengguna
- [DEVELOPMENT.md](DEVELOPMENT.md) - Panduan pengembangan
- [API_DOCS.md](API_DOCS.md) - Dokumentasi API
- [AI_INTEGRATION_DOCS.md](AI_INTEGRATION_DOCS.md) - Integrasi AI
- [DEPLOYMENT.md](DEPLOYMENT.md) - Panduan deploy
- [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) - Checklist deployment
- [FINAL_SUMMARY.md](FINAL_SUMMARY.md) - Ringkasan teknis

## 📞 Dukungan
Jika ada masalah:
1. Pastikan koneksi internet Anda stabil
2. Coba refresh halaman
3. Gunakan browser yang berbeda
4. Hubungi tim pengembang jika masalah berlanjut

## 🤝 Kontribusi
1. Fork repo
2. Buat branch fitur baru
3. Commit perubahan
4. Push ke branch
5. Buat Pull Request