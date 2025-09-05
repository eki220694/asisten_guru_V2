const request = require('supertest');
const app = require('../server');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

describe('Assessment API', () => {
  let user;
  let question;

  beforeAll(async () => {
    // Create a mock user
    user = await prisma.user.create({
      data: {
        name: 'Test User',
        email: 'test@example.com',
        password: 'password',
      },
    });

    // Create a mock question
    question = await prisma.question.create({
      data: {
        subject: 'Math',
        topic: 'Algebra',
        level: 'Easy',
        question: 'What is 2 + 2?',
        options: '["3", "4", "5"]',
        answer: '4',
      },
    });
  });

  afterAll(async () => {
    // Clean up the database
    await prisma.assessment.deleteMany({});
    await prisma.question.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.$disconnect();
  });

  it('should return 404 if question does not exist', async () => {
    const res = await request(app)
      .post('/api/assessments')
      .send({
        studentId: user.id,
        questionId: 999, // Non-existent questionId
        answer: '4',
      });
    expect(res.statusCode).toEqual(404);
  });
});
