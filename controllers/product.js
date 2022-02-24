const httpStatusCode = require("http-status");
const productServices = require("../services/product");
const formidable = require("formidable");

const addProduct = async (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    const files = await parseForm(form, req);

    const response = await productServices.addProduct(
      req.headers,
      req.body,
      files
    );
    return res
      .status(httpStatusCode[response.serverResponse.statusCode])
      .send(response);
  } catch (error) {
    console.log("error", error);
    return res
      .status(httpStatusCode[error.serverResponse.statusCode])
      .send(error);
  }
};

const getProductById = async (req, res) => {
  try {
    const response = await productServices.getProductById(
      req.headers,
      req.params
    );
    return res
      .status(httpStatusCode[response.serverResponse.statusCode])
      .send(response);
  } catch (error) {
    return res
      .status(httpStatusCode[error.serverResponse.statusCode])
      .send(error);
  }
};

const getProductList = async (req, res) => {
  try {
    const response = await productServices.getProductList(req.headers);
    return res
      .status(httpStatusCode[response.serverResponse.statusCode])
      .send(response);
  } catch (error) {
    return res
      .status(httpStatusCode[error.serverResponse.statusCode])
      .send(error);
  }
};

//imageUpload
//form user data pass in form-data
function parseForm(form, req) {
  return new Promise((resolve, reject) => {
    try {
      if (
        !req.hasOwnProperty("headers") ||
        req["headers"]["content-length"] === 0
      ) {
        return reject(new Error("No form contents")); //check it postman in form-data pass any field or not...
      }
      form.parse(req, function (err, fields, files) {
        req.body = fields; //in services pass req.body here pass fields
        if (err) {
          return reject(err);
        }
        // if (files.user_image === undefined || !files.hasOwnProperty('user_image')) {
        //     return reject(new Error('No form contents'))
        // }
        return resolve(files);
      });
    } catch (error) {
      return res.status(httpStatusCode.StatusCodes.BAD_REQUEST).send(error);
    }
  });
}

module.exports = {
  addProduct,
  getProductById,
  getProductList,
};
