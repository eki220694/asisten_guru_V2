# Panduan Testing Aplikasi Asisten Guru V2 Secara Lokal

Dokumen ini menjelaskan langkah-langkah lengkap untuk menjalankan aplikasi Asisten Guru V2 secara lokal untuk tujuan pengembangan dan testing.

## 🛠️ Prasyarat Sistem

Sebelum memulai, pastikan sistem Anda telah terinstall:

- Node.js versi 16 atau lebih tinggi
- npm (biasanya sudah terinstall bersama Node.js)
- Git

## 📦 Instalasi Dependensi

### 1. Clone Repository (jika belum ada)

```bash
git clone <repository-url>
cd asisten_guru_V2
```

### 2. Instalasi Dependensi Server (Backend)

```bash
cd server
npm install
cd ..
```

### 3. Instalasi Dependensi Client (Frontend)

```bash
cd client
npm install
cd ..
```

## ⚙️ Konfigurasi Environment

### Konfigurasi Server (Backend)

1. Buat file `.env` di direktori `server`:
```bash
cd server
cp .env.production.example .env
cd ..
```

2. Edit file `.env` sesuai kebutuhan:
```env
# OpenAI API Key (opsional untuk fitur AI)
OPENAI_API_KEY=your_openai_api_key_here

# Database URL
DATABASE_URL=file:./dev.db

# Port server
PORT=5000

# URL client untuk CORS
CLIENT_URL=http://localhost:5173
```

Catatan: API Key OpenAI hanya diperlukan jika Anda ingin menggunakan fitur generator soal berbasis AI.

### Konfigurasi Client (Frontend)

Client secara default akan mengarah ke `http://localhost:5000/api` saat dalam mode development, sehingga tidak perlu konfigurasi tambahan.

## ▶️ Menjalankan Aplikasi Secara Lokal

### Menjalankan Server (Backend)

1. Buka terminal baru
2. Jalankan perintah berikut:

```bash
cd server
npm run local-dev
```

Server akan berjalan di `http://localhost:5000`

Endpoint yang tersedia:
- Health check: `http://localhost:5000/health`
- API endpoints: `http://localhost:5000/api/*`

### Menjalankan Client (Frontend)

1. Buka terminal baru (berbeda dari terminal server)
2. Jalankan perintah berikut:

```bash
cd client
npm run dev
```

Client akan berjalan di `http://localhost:5173`

## 🧪 Testing Aplikasi

### Testing Client (Frontend)

```bash
cd client
npm run test
```

Untuk menjalankan test dengan antarmuka grafis:
```bash
cd client
npm run test:ui
```

### Testing Server (Backend)

Backend tidak memiliki test suite yang dikonfigurasi secara default.

## 🔧 Pengembangan dan Debugging

### Memantau Perubahan Kode

- Server menggunakan nodemon yang akan merestart server secara otomatis ketika ada perubahan kode
- Client menggunakan Vite yang akan melakukan hot-reload ketika ada perubahan kode

### Struktur API

Endpoint API utama:
- `/api/users` - Autentikasi pengguna (registrasi, login)
- `/api/questions` - Generator soal
- `/api/assessments` - Penilaian dan analisis
- `/api/materials` - Bank materi
- `/api/schedules` - Agenda dan jadwal KBM

## ⏹️ Menghentikan Aplikasi dengan Benar

### Menghentikan Server (Backend)

1. Pindah ke terminal tempat server berjalan
2. Tekan `Ctrl + C` untuk menghentikan proses server

### Menghentikan Client (Frontend)

1. Pindah ke terminal tempat client berjalan
2. Tekan `Ctrl + C` untuk menghentikan proses client

## 🔍 Troubleshooting

### Masalah Umum

1. **Port sudah digunakan**:
   - Ubah PORT di file `.env` server ke port yang tersedia
   - Atau hentikan proses yang menggunakan port tersebut

2. **Masalah koneksi API**:
   - Pastikan server berjalan sebelum menjalankan client
   - Periksa konfigurasi CORS di server
   - Pastikan `CLIENT_URL` di `.env` sesuai dengan URL client

3. **Masalah database**:
   - Pastikan file `dev.db` dapat diakses dan tidak corrupt
   - Jika perlu reset database, hapus file `dev.db` dan restart server

### Mengecek Status Server

Akses `http://localhost:5000/health` di browser untuk memastikan server berjalan dengan baik.

## 📚 Dokumentasi Tambahan

- [README.md](README.md) - Dokumentasi utama
- [DEVELOPMENT.md](DEVELOPMENT.md) - Panduan pengembangan
- [API_DOCS.md](API_DOCS.md) - Dokumentasi API
- [USER_GUIDE.md](USER_GUIDE.md) - Panduan pengguna