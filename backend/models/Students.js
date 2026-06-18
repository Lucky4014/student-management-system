const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  course: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    default: 'N/A'
  }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
