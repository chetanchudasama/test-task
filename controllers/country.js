const httpStatusCode = require('http-status');
const countryServices = require('../services/country');

const countryList = async (req, res) => {
  try {
    const response = await countryServices.countryList(req.headers);
    return res.status(httpStatusCode[response.serverResponse.statusCode]).send(response);
  } catch (error) {
    return res.status(httpStatusCode[error.serverResponse.statusCode]).send(error)
  }
}

const stateList = async (req, res) => {
    try {
      const response = await countryServices.stateList(req.headers, req.body);
      return res.status(httpStatusCode[response.serverResponse.statusCode]).send(response);
    } catch (error) {
      return res.status(httpStatusCode[error.serverResponse.statusCode]).send(error)
    }
  }

module.exports = {
  countryList,
  stateList
}