// controllers/scheduleController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createSchedule = async (req, res) => {
  const { title, date, startTime, endTime, location, notes } = req.body;

  try {
    const schedule = await prisma.schedule.create({
      data: {
        title,
        date: new Date(date),
        startTime,
        endTime,
        location,
        notes,
      },
    });
    res.status(201).json(schedule);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSchedules = async (req, res) => {
  try {
    const schedules = await prisma.schedule.findMany();
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};