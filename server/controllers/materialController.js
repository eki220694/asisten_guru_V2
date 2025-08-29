// controllers/materialController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createMaterial = async (req, res) => {
  const { title, class: className, subject, type, url } = req.body;

  try {
    const material = await prisma.material.create({
      data: {
        title,
        class: className,
        subject,
        type,
        url,
      },
    });
    res.status(201).json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMaterials = async (req, res) => {
  try {
    const materials = await prisma.material.findMany();
    res.json(materials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};