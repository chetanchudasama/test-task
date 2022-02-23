const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    country: {
        type: Number,
        ref: 'country',
    },
    state: {
        type: Number,
        ref: 'state',
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    name: {
        type: String,
    },
    mobile: {
        type: String,
    },
    email: {
        type: String,
    },
    images: {
        type: String,
    },
    isPublic: {
        type: Boolean,
        default: true
    },
    comments: {
        type: Array,
        default: []
    },
}, {
    collection: "product"
})

const Product = mongoose.model('product', productSchema)

module.exports = {
    Product,
}