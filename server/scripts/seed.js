// server/scripts/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create sample users
  const teacher = await prisma.user.create({
    data: {
      name: 'Budi Santoso',
      email: 'budi@example.com',
      password: 'hashed_password_here', // In real app, this should be properly hashed
      role: 'teacher'
    }
  });

  console.log('Created teacher:', teacher);

  // Create sample questions
  const questions = await prisma.question.createMany({
    data: [
      {
        subject: 'Matematika',
        topic: 'Aljabar',
        level: 'easy',
        question: 'Berapa hasil dari 2 + 2?',
        options: JSON.stringify(['3', '4', '5', '6']),
        answer: '4'
      },
      {
        subject: 'Bahasa Indonesia',
        topic: 'Tata Bahasa',
        level: 'medium',
        question: 'Apa fungsi kata "dan" dalam kalimat?',
        options: JSON.stringify(['Konjungsi', 'Preposisi', 'Interjeksi', 'Adverbia']),
        answer: 'Konjungsi'
      }
    ]
  });

  console.log('Created questions:', questions);

  // Create sample materials
  const materials = await prisma.material.createMany({
    data: [
      {
        title: 'Pengantar Aljabar',
        class: 'VII',
        subject: 'Matematika',
        type: 'pdf',
        url: 'https://example.com/aljabar.pdf'
      }
    ]
  });

  console.log('Created materials:', materials);

  // Create sample schedule
  const schedule = await prisma.schedule.create({
    data: {
      title: 'Kelas Matematika',
      date: new Date(),
      startTime: '08:00',
      endTime: '09:30',
      location: 'Ruang 101',
      notes: 'Materi: Bab 1 Aljabar'
    }
  });

  console.log('Created schedule:', schedule);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });