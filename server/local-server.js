// local-server.js
// Script khusus untuk menjalankan server secara lokal selama pengembangan

require('dotenv').config();
const app = require('./server.js');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});