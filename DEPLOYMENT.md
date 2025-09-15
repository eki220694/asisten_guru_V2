# DEPLOYMENT.md

# 🚀 Panduan Deployment asisten_guru V2

## 📦 Struktur Deployment

- **Frontend**: Deploy ke Netlify (static site)
- **Backend**: Deploy ke Vercel (Node.js serverless functions)
- **Database**: SQLite (file-based, disimpan di Vercel)

---

## 🧰 Prasyarat

1. Akun GitHub
2. Akun Netlify
3. Akun Vercel
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

## ☁️ Deploy Backend ke Vercel

### 1. Buat Project di Vercel
- Kunjungi [vercel.com](https://vercel.com)
- Klik "New Project"
- Pilih repo GitHub `asisten_guru_V2`

### 2. Konfigurasi Project
- **Root directory**: `server`
- **Framework Preset**: Other
- **Build command**: `npm run vercel-build`
- **Output directory**: Default (tidak perlu diubah)

### 3. Tambahkan Environment Variables
- `OPENAI_API_KEY` (jika ingin aktifkan AI)
- Database akan menggunakan file SQLite yang tersimpan di Vercel

### 4. Setup GitHub Actions (Opsional)
Untuk deploy otomatis:
1. Dapatkan `VERCEL_TOKEN` dari [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Dapatkan `VERCEL_PROJECT_ID` dari dashboard Vercel
3. Dapatkan `VERCEL_ORG_ID` dari dashboard Vercel
4. Tambahkan ke secrets GitHub:
   - `VERCEL_TOKEN`
   - `VERCEL_PROJECT_ID`
   - `VERCEL_ORG_ID`

---

## 🔐 Secrets GitHub yang Dibutuhkan

Tambahkan di `Settings > Secrets and variables > Actions`:

| Secret Name             | Sumber                          |
|-------------------------|----------------------------------|
| `NETLIFY_AUTH_TOKEN`    | Netlify User Settings           |
| `NETLIFY_SITE_ID`       | Netlify Site Settings           |
| `VERCEL_TOKEN`          | Vercel Account Tokens           |
| `VERCEL_PROJECT_ID`     | Vercel Project Settings         |
| `VERCEL_ORG_ID`         | Vercel Organization Settings    |

---

## 🔄 Alur Deployment Otomatis

1. Push ke branch `main`
2. GitHub Actions:
   - Build & deploy frontend ke Netlify
   - Deploy backend ke Vercel
3. Aplikasi live dalam beberapa menit

---

## 🧪 Uji Coba Deployment

Setelah deploy:
- Frontend: `https://<nama-site>.netlify.app`
- Backend API: `https://<nama-proyek-vercel>.vercel.app`

Tes endpoint:
```bash
curl https://<backend-url>.vercel.app/api/questions
```

---

## 📞 Dukungan

Jika ada masalah deployment, cek:
- Logs GitHub Actions
- Logs Vercel
- Pastikan semua secrets sudah diatur