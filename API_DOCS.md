# Dokumentasi API asisten_guru V2

## Base URL
```
http://localhost:5000/api
```

## Authentication
### Register
- **POST** `/users/register`
- Description: Mendaftarkan pengguna baru
- Body: 
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```
- Response (201):
  ```json
  {
    "message": "Registration successful",
    "user": {
      "id": "integer",
      "name": "string",
      "email": "string",
      "role": "string",
      "createdAt": "datetime",
      "updatedAt": "datetime"
    }
  }
  ```
- Response (400):
  ```json
  {
    "error": "Email already registered"
  }
  ```

### Login
- **POST** `/users/login`
- Description: Melakukan autentikasi pengguna
- Body:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- Response (200):
  ```json
  {
    "message": "Login successful",
    "token": "string (JWT token)",
    "user": {
      "id": "integer",
      "name": "string",
      "email": "string",
      "role": "string",
      "createdAt": "datetime",
      "updatedAt": "datetime"
    }
  }
  ```
- Response (404):
  ```json
  {
    "error": "User not found"
  }
  ```
- Response (401):
  ```json
  {
    "error": "Invalid password"
  }
  ```

### Get Profile
- **GET** `/users/profile`
- Description: Mendapatkan informasi profil pengguna yang terautentikasi
- Headers: 
  ```
  Authorization: Bearer <token>
  ```
- Response (200):
  ```json
  {
    "user": {
      "id": "integer",
      "name": "string",
      "email": "string",
      "role": "string",
      "createdAt": "datetime",
      "updatedAt": "datetime"
    }
  }
  ```
- Response (401):
  ```json
  {
    "error": "Access token required"
  }
  ```
- Response (403):
  ```json
  {
    "error": "Token expired" | "Invalid token" | "User not found"
  }
  ```

## Questions (Generator Soal)
### Generate Soal
- **POST** `/questions/generate`
- Body: `{ "subject", "topic", "level", "count" }`

### Lihat Semua Soal
- **GET** `/questions`

## Assessments (Penilaian)
### Simpan Penilaian
- **POST** `/assessments`
- Body: `{ "studentId", "questionId", "answer" }`

### Lihat Semua Penilaian
- **GET** `/assessments`

## Materials (Bank Materi)
### Simpan Materi
- **POST** `/materials`
- Body: `{ "title", "class", "subject", "type", "url" }`

### Lihat Semua Materi
- **GET** `/materials`

## Schedules (Agenda KBM)
### Simpan Agenda
- **POST** `/schedules`
- Body: `{ "title", "date", "startTime", "endTime", "location?", "notes?" }`

### Lihat Semua Agenda
- **GET** `/schedules`