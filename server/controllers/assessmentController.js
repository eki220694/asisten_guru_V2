// controllers/assessmentController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createAssessment = async (req, res) => {
  const { studentId, questionId, answer } = req.body;

  try {
    // Dummy scoring logic (replace with real logic)
    const question = await prisma.question.findUnique({ where: { id: questionId } });
    const score = question.answer === answer ? 1 : 0;

    const assessment = await prisma.assessment.create({
      data: {
        studentId,
        questionId,
        answer,
        score,
      },
    });

    res.status(201).json(assessment);
  } catch (err) {
    res.status(500).json({ error: err.message });
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