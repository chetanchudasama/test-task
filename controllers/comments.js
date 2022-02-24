const httpStatusCode = require("http-status");
const commentServices = require("../services/comments");

const addComment = async (req, res) => {
  try {
    const response = await commentServices.addComment(req.headers, req.body);
    return res
      .status(httpStatusCode[response.serverResponse.statusCode])
      .send(response);
  } catch (error) {
    return res
      .status(httpStatusCode[error.serverResponse.statusCode])
      .send(error);
  }
};

const getComments = async (req, res) => {
  try {
    const response = await commentServices.getComments(req.headers, req.params);
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

module.exports = {
  addComment,
  getComments,
};
