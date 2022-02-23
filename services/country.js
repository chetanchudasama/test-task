const { validateRequestWithBody } = require('twilio/lib/webhooks/webhooks');
const _msg = require('../config/message')
const { findCountryDetail, findStateDetail } = require('../repository/country')

const countryList = async (reqHeaders) => {
  let lang = reqHeaders.language ? reqHeaders.language : 'EN';
  try {
    const countryData = await findCountryDetail()
    return {
      serverResponse: {
        isError: false,
        message: _msg[200][lang],
        statusCode: 'OK'
      },
      result: {
        data: countryData
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

const stateList = async (reqHeaders, reqBody) => {
    let lang = reqHeaders.language ? reqHeaders.language : 'EN';
    try {
      const stateData = await findStateDetail({country: reqBody.country})
      return {
        serverResponse: {
          isError: false,
          message: _msg[200][lang],
          statusCode: 'OK'
        },
        result: {
          data: stateData
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

module.exports = {
  countryList,
  stateList
}