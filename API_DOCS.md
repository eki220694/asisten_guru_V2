# Dokumentasi API asisten_guru V2

## Base URL
```
http://localhost:5000/api
```

## Users
### Register
- **POST** `/users/register`
- Body: `{ "name", "email", "password" }`

### Login
- **POST** `/users/login`
- Body: `{ "email", "password" }`

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