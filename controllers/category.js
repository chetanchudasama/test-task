const httpStatusCode = require('http-status');
const categoryServices = require('../services/category');

const categoryList = async (req, res) => {
  try {
    const response = await categoryServices.categoryList(req.headers);
    return res.status(httpStatusCode[response.serverResponse.statusCode]).send(response);
  } catch (error) {
    return res.status(httpStatusCode[error.serverResponse.statusCode]).send(error)
  }
}

module.exports = {
  categoryList,
}