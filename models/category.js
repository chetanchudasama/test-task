const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  }
}, {
  collection: "category",
})

const Category = mongoose.model('category', categorySchema)

module.exports = {
  Category,
}