const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  ProductName: {
    type: String,
    required: true,
  },
  urlProduct: String,
  skuProduct: String
},{
  timestamps: true
})

module.exports = mongoose.model('infomedia123', ProductSchema)