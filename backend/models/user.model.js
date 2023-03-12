const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  pwd: { type: String, required: true },
  fullName: { type: String, required: true },
  
  bio: { type: String, required: false, default:false},
  appjob: { type: String, required:false, default:"null" },
  status: { type: String, required: false ,default:"null"},
  // date: { type: Date, required: true },

}, {
  timestamps: true,
});

// delete mongoose.connection.models['users'];

const user = mongoose.model('users', userSchema);

module.exports = user;