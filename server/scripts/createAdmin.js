// server/scripts/createAdmin.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function createAdmin() {
  const adminEmail = 'admin@asistenguru.com';
  const adminPassword = 'Admin123!'; // Ganti dengan password yang lebih kuat
  const adminName = 'Administrator';

  try {
    // Cek apakah admin sudah ada
    const existingAdmin = await prisma.user.findUnique({
      where: { email: adminEmail }
    });

    if (existingAdmin) {
      console.log('Akun admin sudah ada:', existingAdmin.email);
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Buat user admin
    const adminUser = await prisma.user.create({
      data: {
        name: adminName,
        email: adminEmail,
        password: hashedPassword,
        role: 'admin' // Memberikan role admin
      }
    });

    console.log('Akun admin berhasil dibuat:');
    console.log('Email:', adminUser.email);
    console.log('Password:', adminPassword); // Tampilkan password sekali saja
    console.log('Role:', adminUser.role);
  } catch (error) {
    console.error('Gagal membuat akun admin:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();