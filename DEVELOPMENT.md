# Development Guide

## 🛠️ Prasyarat

- Node.js v16 atau lebih tinggi
- npm atau yarn
- Git

## 📦 Instalasi Lokal

1. Clone repository:
```bash
git clone <repository-url>
cd asisten_guru_V2
```

2. Instal dependensi untuk server:
```bash
cd server
npm install
cd ..
```

3. Instal dependensi untuk client:
```bash
cd client
npm install
cd ..
```

## ▶️ Menjalankan Aplikasi Secara Lokal

### Menjalankan Server (Backend)
```bash
cd server
npm run dev
```

Server akan berjalan di `http://localhost:5000`

### Menjalankan Client (Frontend)
```bash
cd client
npm run dev
```

Client akan berjalan di `http://localhost:5173`

## 🧪 Testing

### Client Testing
```bash
cd client
npm run test
```

### Server Testing
```bash
cd server
npm run test
```

## 🏗️ Struktur Proyek

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

## 🔄 Pengembangan Fitur Baru

1. Buat branch baru:
```bash
git checkout -b feature/nama-fitur
```

2. Lakukan pengembangan di branch tersebut

3. Test perubahan Anda

4. Commit dan push perubahan:
```bash
git add .
git commit -m "Menambahkan fitur X"
git push origin feature/nama-fitur
```

5. Buat Pull Request di GitHub

## 📚 Dokumentasi Tambahan

- [USER_GUIDE.md](USER_GUIDE.md) - Panduan pengguna
- [API_DOCS.md](API_DOCS.md) - Dokumentasi API
- [AI_INTEGRATION_DOCS.md](AI_INTEGRATION_DOCS.md) - Integrasi AI
- [DEPLOYMENT.md](DEPLOYMENT.md) - Panduan deploy