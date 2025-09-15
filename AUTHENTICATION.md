# Sistem Autentikasi

Dokumen ini menjelaskan implementasi sistem autentikasi pada aplikasi Asisten Guru V2.

## Arsitektur

Sistem autentikasi menggunakan pendekatan berbasis token JWT (JSON Web Token) dengan implementasi sebagai berikut:

### Backend (Server)
1. **Registrasi Pengguna**:
   - Menerima nama, email, dan password
   - Memverifikasi keunikan email (tidak boleh duplikat)
   - Menghash password menggunakan bcrypt
   - Menyimpan data pengguna ke database
   - Mengembalikan pesan sukses

2. **Login Pengguna**:
   - Memverifikasi email dan password
   - Menggunakan bcrypt untuk membandingkan password
   - Menghasilkan JWT token dengan masa berlaku 24 jam
   - Mengembalikan token dan data pengguna (tanpa password)

3. **Middleware Autentikasi**:
   - Memverifikasi token JWT pada header Authorization
   - Mendekode token untuk mendapatkan informasi pengguna
   - Memverifikasi keberadaan pengguna di database
   - Menyediakan data pengguna untuk endpoint yang dilindungi

### Frontend (Client)
1. **Context Provider**:
   - Menyediakan state global untuk informasi pengguna
   - Menyimpan token dan data pengguna di localStorage
   - Menyediakan fungsi login dan logout

2. **Protected Routes**:
   - Memverifikasi keberadaan token dan data pengguna
   - Mengarahkan pengguna yang tidak terautentikasi ke halaman login

3. **Utility Functions**:
   - Fungsi pembantu untuk API calls dengan penanganan error
   - Menyertakan token secara otomatis dalam header Authorization

## Flow Autentikasi

1. **Registrasi**:
   ```
   Client -> Server: POST /api/users/register {name, email, password}
   Server -> Database: Cek email, hash password, simpan pengguna
   Server -> Client: {message, user}
   ```

2. **Login**:
   ```
   Client -> Server: POST /api/users/login {email, password}
   Server -> Database: Cek email dan password (bcrypt)
   Server -> Client: {token, user}
   Client -> localStorage: Simpan token dan user
   ```

3. **Akses Halaman Terproteksi**:
   ```
   Client -> Server: GET /api/users/profile (dengan token)
   Server -> Middleware: Verifikasi token
   Server -> Database: Cek keberadaan pengguna
   Server -> Client: {user}
   ```

4. **Logout**:
   ```
   Client -> localStorage: Hapus token dan user
   ```

## Keamanan

1. **Password**:
   - Di-hash menggunakan bcrypt sebelum disimpan
   - Tidak pernah dikirimkan dalam response

2. **Token**:
   - Menggunakan JWT dengan secret key
   - Masa berlaku 24 jam
   - Disimpan di localStorage (dengan resiko keamanan yang diketahui)

3. **CORS**:
   - Dikonfigurasi untuk mengizinkan origin tertentu
   - Mengizinkan header Authorization

## Environment Variables

File `.env` di server harus berisi:
```
JWT_SECRET=your_jwt_secret_key_here
OPENAI_API_KEY=your_openai_api_key_here
```

## Penggunaan

1. **Registrasi**:
   - Akses halaman `/register`
   - Isi form dengan nama, email, dan password
   - Submit form

2. **Login**:
   - Akses halaman `/login`
   - Isi form dengan email dan password
   - Submit form

3. **Akses Aplikasi**:
   - Setelah login berhasil, pengguna akan diarahkan ke halaman utama
   - Pengguna dapat mengakses semua fitur aplikasi

4. **Logout**:
   - Klik tombol logout di navbar
   - Pengguna akan diarahkan ke halaman login