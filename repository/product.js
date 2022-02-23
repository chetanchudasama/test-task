const { Product } = require('../models/product')

const insertProductData = async (data) => {
    try {
        const response = new Product(data)
        const productData = await response.save()
        return productData
    } catch (error) {
        throw error
    }
}

const getSingleProductDetail = async (query) => {
    try {
        let ProductDetails = await Product.findOne(query)
        return ProductDetails
    } catch (error) {
        throw error
    }
}

const findProductDetail = async () => {
    try {
      let productData = await Product.find()
      return productData
    } catch (error) {
      throw error
    }
  }


module.exports = {
    insertProductData,
    getSingleProductDetail,
    findProductDetail
}