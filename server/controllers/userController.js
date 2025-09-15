// controllers/userController.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Cek apakah user dengan email tersebut sudah ada
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    
    // Hapus password dari objek user sebelum dikirim ke client
    const { password: _, ...userWithoutPassword } = user;
    
    res.status(201).json({ 
      message: 'Registration successful',
      user: userWithoutPassword 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ error: 'Invalid password' });

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'fallback_secret_key',
      { expiresIn: '24h' }
    );

    // Hapus password dari objek user sebelum dikirim ke client
    const { password: _, ...userWithoutPassword } = user;
    
    res.json({ 
      message: 'Login successful', 
      token,
      user: userWithoutPassword 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    // req.user sudah disediakan oleh middleware authenticateToken
    res.json({ user: req.user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};