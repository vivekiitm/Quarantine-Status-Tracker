const mongoose = require('mongoose');
const room = new mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  hostel:{
    type: String,
    required: true,
  },
  rollno:{
    type: String,
  },
})
module.exports = mongoose.model('Room',room)