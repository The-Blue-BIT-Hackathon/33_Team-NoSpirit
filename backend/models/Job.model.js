const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobSchema = new Schema({
  JobTitle: { type: String, required: true },
  Pay: { type: Number, required: true },
  industry: { type: String, required: true , default:""},
  
  type: { type: String, required: true, default:"full-time"},
  Description: { type: String, required:true, default:"" },
  createdAt: { type: Date, required: true ,default:Date.now},
  // date: { type: Date, required: true },

}, {
  timestamps: true,
});

const jobs = mongoose.model('Jobs', JobSchema);

module.exports = jobs;