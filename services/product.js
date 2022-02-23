const _msg = require('../config/message')
const dbCons = require('../constant/db-constant')
const dbOpration = require('../constant/db-operation-constant')
const { insertProductData, getSingleProductDetail, findProductDetail } = require('../repository/product')
const { getQuery } = require('../repository/db-operation')
const { imageUpdaloadServices } = require('./cloudinary')
const mongoose = require('mongoose')

const addProduct = async (reqHeaders, reqBody, files) => {
    let lang = reqHeaders.language ? reqHeaders.language : 'EN';
    try {

        const productJson = await addProductJson(reqBody, files)
        const productData = await insertProductData(productJson)
        return {
            serverResponse: {
                isError: false,
                message: _msg[200][lang],
                statusCode: 'OK'
            },
            result: {
                data: productData
            }
        };
    } catch (error) {
        throw {
            serverResponse: {
                isError: true,
                message: _msg[500][lang],
                statusCode: 'INTERNAL_SERVER_ERROR'
            }
        };
    }
}

const getProductById = async (reqParams) => {
    try {
        const productQuery = getQuery(dbCons.FIELD__ID, mongoose.Types.ObjectId(reqParams[dbCons.FIELD_ID]))
        const productDetails = await getSingleProductDetail(productQuery)
        if (productDetails) {
            return {
                serverResponse: {
                    isError: false,
                    message: _msg[200]['EN'],
                    statusCode: 'OK'
                },
                result: {
                    data: productDetails
                }
            };
        } else {
            return {
                serverResponse: {
                    isError: true,
                    message: _msg[1002]['EN'],
                    statusCode: 'OK'
                }
            }
        }
    } catch (error) {
        throw {
            serverResponse: {
                isError: true,
                message: _msg[500]['EN'],
                statusCode: 'INTERNAL_SERVER_ERROR'
            }
        };
    }
}

const getProductList = async (reqHeaders) => {
    let lang = reqHeaders.language ? reqHeaders.language : 'EN';
    try {
        const productData = await findProductDetail({})
        return {
            serverResponse: {
                isError: false,
                message: _msg[200][lang],
                statusCode: 'OK'
            },
            result: {
                data: productData
            }
        };
    } catch (error) {
        throw {
            serverResponse: {
                isError: true,
                message: _msg[500][lang],
                statusCode: 'INTERNAL_SERVER_ERROR'
            }
        };
    }
}

const addProductJson = async (reqBody, files) => {
    const productJson = {}
    if (reqBody.category) {
        productJson['category'] = reqBody.category
    }
    if (reqBody.country) {
        productJson['country'] = reqBody.country
    }
    if (reqBody.title) {
        productJson['title'] = reqBody.title
    }
    if (reqBody.description) {
        productJson['description'] = reqBody.description
    }
    if (reqBody.price) {
        productJson['price'] = reqBody.price
    }
    if (reqBody.name) {
        productJson['name'] = reqBody.name
    }
    if (reqBody.mobile) {
        productJson['mobile'] = reqBody.mobile
    }
    if (reqBody.email) {
        productJson['email'] = reqBody.email
    }
    if (files.images) {
        const imagePhotos = await imageUpdaloadServices(files.images)
        productJson['images'] = imagePhotos
    }
    if (reqBody.state) {
        productJson['state'] = reqBody.state
    }
    if (reqBody.isPublic) {
        productJson['isPublic'] = reqBody.isPublic
    }
    if (reqBody.comments) {
        productJson['comments'] = reqBody.comments
    }
    return productJson
}

module.exports = {
    addProduct,
    getProductById,
    getProductList
}
