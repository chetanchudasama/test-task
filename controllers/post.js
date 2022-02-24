const httpStatusCode = require("http-status");
const postServices = require("../services/post");
const formidable = require("formidable");

const addPost = async (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    const files = await parseForm(form, req);

    const response = await postServices.addPost(req.headers, req.body, files);
    return res
      .status(httpStatusCode[response.serverResponse.statusCode])
      .send(response);
  } catch (error) {
    return "error";
  }
};

const getPostById = async (req, res) => {
  try {
    const response = await postServices.getPostById(req.headers, req.params);
    return res
      .status(httpStatusCode[response.serverResponse.statusCode])
      .send(response);
  } catch (error) {
    return res
      .status(httpStatusCode[error.serverResponse.statusCode])
      .send(error);
  }
};

const getPostList = async (req, res) => {
  try {
    const response = await postServices.getPostList(req.headers);
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
      // if (
      //   !req.hasOwnProperty("headers") ||
      //   req["headers"]["content-length"] === 0
      // ) {
      //   return reject(new Error("No form contents")); //check it postman in form-data pass any field or not...
      // }
      form.parse(req, function (err, fields, files) {
        req.body = fields; //in services pass req.body here pass fields
        if (err) {
          return reject(err);
        }
        return resolve(files);
      });
    } catch (error) {
      return res.status(httpStatusCode.StatusCodes.BAD_REQUEST).send(error);
    }
  });
}

module.exports = {
  addPost,
  getPostById,
  getPostList,
};
