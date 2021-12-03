const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  user_id:{
    type: String,
    required: true
  }
  channelName: {
    type: String,
    required: true
  },
  categoryid: {
    type: String,
    required: true,
  },
  descComplaint: String
},{
  timestamps: true
})

module.exports = mongoose.model('complaint', userSchema)