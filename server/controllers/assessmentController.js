// controllers/assessmentController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createAssessment = async (req, res, next) => {
  const { studentId, questionId, answer } = req.body;

  try {
    const questionIdInt = parseInt(questionId, 10);

    if (isNaN(questionIdInt)) {
      return res.status(400).json({ error: 'Invalid question ID' });
    }

    const question = await prisma.question.findUnique({ where: { id: questionIdInt } });

    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    // Dummy scoring logic
    const score = question.answer === answer ? 1 : 0;

    const assessment = await prisma.assessment.create({
      data: {
        studentId: parseInt(studentId, 10),
        questionId: questionIdInt,
        answer,
        score,
      },
    });

    res.status(201).json(assessment);
  } catch (err) {
    next(err);
  }
};

exports.getAssessments = async (req, res) => {
  try {
    const assessments = await prisma.assessment.findMany({
      include: {
        student: true,
        question: true,
      },
    });
    res.json(assessments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};