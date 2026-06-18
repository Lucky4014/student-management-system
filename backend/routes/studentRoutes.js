const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// GET — Saare students lao
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    console.log(`📋 API LOG: GET /api/students — ${students.length} students fetched`);
    res.json({ success: true, data: students });
  } catch (error) {
    console.error('❌ API LOG: GET Error —', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST — Naya student add karo
router.post('/', async (req, res) => {
  try {
    const { name, email, course, grade } = req.body;
    const student = new Student({ name, email, course, grade });
    const saved = await student.save();
    console.log(`✅ API LOG: POST /api/students — Student added: ${saved.name}`);
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    console.error('❌ API LOG: POST Error —', error.message);
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE — Student delete karo
router.delete('/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    console.log(`🗑️ API LOG: DELETE /api/students/${req.params.id}`);
    res.json({ success: true, message: 'Student deleted' });
  } catch (error) {
    console.error('❌ API LOG: DELETE Error —', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
