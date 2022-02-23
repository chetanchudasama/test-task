const _msg = require('../config/message')
const dbCons = require('../constant/db-constant')
const dbOpration = require('../constant/db-operation-constant')
const { findCategoryDetail } = require('../repository/category')

const categoryList = async (reqHeaders) => {
  let lang = reqHeaders.language ? reqHeaders.language : 'EN';
  try {
    const categoryData = await findCategoryDetail()
    console.log("categoryData", categoryData);
    return {
      serverResponse: {
        isError: false,
        message: _msg[200][lang],
        statusCode: 'OK'
      },
      result: {
        data: categoryData
      }
    };
  } catch (error) {
    console.log('eror', error);
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
  categoryList
}