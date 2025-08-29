# DEPLOYMENT.md

# 🚀 Panduan Deployment asisten_guru V2

## 📦 Struktur Deployment

- **Frontend**: Deploy ke Netlify (static site)
- **Backend**: Deploy ke Railway (Node.js server)
- **Database**: SQLite (file-based, disimpan di Railway)

---

## 🧰 Prasyarat

1. Akun GitHub
2. Akun Netlify
3. Akun Railway
4. API key dari masing-masing platform

---

## 🌐 Deploy Frontend ke Netlify

### 1. Buat Site di Netlify
- Kunjungi [netlify.com](https://netlify.com)
- Klik "New site from Git"
- Pilih repo GitHub `asisten_guru_V2`

### 2. Konfigurasi Build
- **Base directory**: `client`
- **Build command**: `npm run build`
- **Publish directory**: `dist`

### 3. Tambahkan Environment Variables
- Tidak diperlukan untuk frontend

### 4. Setup GitHub Actions (Opsional)
Untuk deploy otomatis:
1. Dapatkan `NETLIFY_AUTH_TOKEN` dari [app.netlify.com/user/applications](https://app.netlify.com/user/applications)
2. Dapatkan `NETLIFY_SITE_ID` dari dashboard Netlify
3. Tambahkan ke secrets GitHub:
   - `NETLIFY_AUTH_TOKEN`
   - `NETLIFY_SITE_ID`

---

## ☁️ Deploy Backend ke Railway

### 1. Buat Project di Railway
- Kunjungi [railway.app](https://railway.app)
- Klik "New Project"
- Pilih "Deploy from GitHub repo"
- Pilih repo `asisten_guru_V2`

### 2. Konfigurasi Service
- **Root directory**: `server`
- **Build command**: `npm install`
- **Start command**: `node server.js`

### 3. Tambahkan Environment Variables
- `OPENAI_API_KEY` (jika ingin aktifkan AI)
- `DATABASE_URL` (otomatis diatur oleh Railway untuk SQLite)

### 4. Setup GitHub Actions (Opsional)
Untuk deploy otomatis:
1. Dapatkan `RAILWAY_TOKEN` dari [railway.app/account/tokens](https://railway.app/account/tokens)
2. Dapatkan `RAILWAY_PROJECT_ID` dari dashboard Railway
3. Tambahkan ke secrets GitHub:
   - `RAILWAY_TOKEN`
   - `RAILWAY_PROJECT_ID`

---

## 🔐 Secrets GitHub yang Dibutuhkan

Tambahkan di `Settings > Secrets and variables > Actions`:

| Secret Name             | Sumber                          |
|-------------------------|----------------------------------|
| `NETLIFY_AUTH_TOKEN`    | Netlify User Settings           |
| `NETLIFY_SITE_ID`       | Netlify Site Settings           |
| `RAILWAY_TOKEN`         | Railway Account Tokens          |
| `RAILWAY_PROJECT_ID`    | Railway Project Settings        |

---

## 🔄 Alur Deployment Otomatis

1. Push ke branch `main`
2. GitHub Actions:
   - Build & deploy frontend ke Netlify
   - Deploy backend ke Railway
3. Aplikasi live dalam beberapa menit

---

## 🧪 Uji Coba Deployment

Setelah deploy:
- Frontend: `https://<nama-site>.netlify.app`
- Backend API: `https://<nama-service>.up.railway.app`

Tes endpoint:
```bash
curl https://<backend-url>/api/questions
```

---

## 📞 Dukungan

Jika ada masalah deployment, cek:
- Logs GitHub Actions
- Logs Railway
- Pastikan semua secrets sudah diatur