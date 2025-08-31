// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  // Error dari AI service
  if (err.message.includes('AI')) {
    return res.status(503).json({
      error: 'Layanan AI tidak tersedia saat ini',
      message: 'Fitur AI sedang tidak aktif. Silakan coba lagi nanti atau hubungi administrator.'
    });
  }
  
  // Error validasi
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Data tidak valid',
      message: err.message
    });
  }
  
  // Error database
  if (err.name === 'PrismaClientKnownRequestError') {
    return res.status(500).json({
      error: 'Database error',
      message: 'Terjadi kesalahan pada database. Silakan coba lagi nanti.'
    });
  }
  
  // Error default
  res.status(500).json({
    error: 'Internal server error',
    message: 'Terjadi kesalahan pada server. Silakan coba lagi nanti.'
  });
};

module.exports = errorHandler;