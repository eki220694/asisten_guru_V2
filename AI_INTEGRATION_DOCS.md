# Dokumentasi Integrasi AI Generator Soal

## Cara Mengaktifkan Fitur AI

1. **Dapatkan API key dari OpenAI**:
   - Kunjungi [platform.openai.com](https://platform.openai.com/account/api-keys)
   - Buat akun & dapatkan API key

2. **Update `.env`**:
   ```env
   OPENAI_API_KEY=sk-xxxxxx
   ```

3. **Restart server**:
   ```bash
   cd server
   npm run dev
   ```

## Cara Kerja

- Jika API key valid & aktif, soal akan di-generate oleh AI (GPT-3.5).
- Jika tidak, sistem otomatis menggunakan dummy data sebagai fallback.

## Model AI yang Digunakan

- `gpt-3.5-turbo` (default)
- Bisa diganti di `services/aiService.js` jika ingin model lain.

## Prompt Engineering

Prompt yang digunakan:
```
Buat {count} soal {level} tentang {topic} dalam mata pelajaran {subject}.
Format jawaban dalam JSON dengan field:
- question (string)
- options (array of 4 strings)
- answer (index 0-3)
```