const _msg = require("../config/message");
const dbCons = require("../constant/db-constant");
const dbOpration = require("../constant/db-operation-constant");
const {
  insertPostData,
  getSinglePostDetail,
  findPostDetail,
} = require("../repository/post");
const { getQuery } = require("../repository/db-operation");
const { imageUpdaloadServices } = require("./cloudinary");
const mongoose = require("mongoose");

const addPost = async (reqHeaders, reqBody, files) => {
  let lang = reqHeaders.language ? reqHeaders.language : "EN";
  try {
    const postJson = await addPostJson(reqBody, files);
    const postData = await insertPostData(postJson);
    return {
      serverResponse: {
        isError: false,
        message: _msg[200][lang],
        statusCode: "OK",
      },
      result: {
        data: postData,
      },
    };
  } catch (error) {
    throw {
      serverResponse: {
        isError: true,
        message: _msg[500][lang],
        statusCode: "INTERNAL_SERVER_ERROR",
      },
    };
  }
};

const getPostById = async (reqHeaders, reqParams) => {
  let lang = reqHeaders.language ? reqHeaders.language : "EN";
  try {
    const postQuery = getQuery("_id", mongoose.Types.ObjectId(reqParams.id));
    const postDetails = await getSinglePostDetail(postQuery);
    if (postDetails) {
      return {
        serverResponse: {
          isError: false,
          message: _msg[200][lang],
          statusCode: "OK",
        },
        result: {
          data: postDetails,
        },
      };
    } else {
      return {
        serverResponse: {
          isError: true,
          message: _msg[404][lang],
          statusCode: "OK",
        },
      };
    }
  } catch (error) {
    throw {
      serverResponse: {
        isError: true,
        message: _msg[500]["EN"],
        statusCode: "INTERNAL_SERVER_ERROR",
      },
    };
  }
};

const getPostList = async (reqHeaders) => {
  let lang = reqHeaders.language ? reqHeaders.language : "EN";
  try {
    const postData = await findPostDetail({});
    return {
      serverResponse: {
        isError: false,
        message: _msg[200][lang],
        statusCode: "OK",
      },
      result: {
        data: postData,
      },
    };
  } catch (error) {
    throw {
      serverResponse: {
        isError: true,
        message: _msg[500][lang],
        statusCode: "INTERNAL_SERVER_ERROR",
      },
    };
  }
};

const addPostJson = async (reqBody, files) => {
  const postJson = {};
  if (reqBody.category) {
    postJson["category"] = reqBody.category;
  }
  if (reqBody.country) {
    postJson["country"] = reqBody.country;
  }
  if (reqBody.title) {
    postJson["title"] = reqBody.title;
  }
  if (reqBody.description) {
    postJson["description"] = reqBody.description;
  }
  if (reqBody.price) {
    postJson["price"] = reqBody.price;
  }
  if (reqBody.name) {
    postJson["name"] = reqBody.name;
  }
  if (reqBody.mobileNumber) {
    postJson["mobileNumber"] = reqBody.mobileNumber;
  }
  if (reqBody.email) {
    postJson["email"] = reqBody.email;
  }
  if (files.imageUrl) {
    const imagePhotos = await imageUpdaloadServices(files.imageUrl);
    postJson["imageUrl"] = imagePhotos;
  }
  if (reqBody.state) {
    postJson["state"] = reqBody.state;
  }
  if (reqBody.isPublic) {
    postJson["isPublic"] = reqBody.isPublic;
  }
  return postJson;
};

module.exports = {
  addPost,
  getPostById,
  getPostList,
};
