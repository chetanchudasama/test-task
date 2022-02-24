const _msg = require("../config/message");
const dbCons = require("../constant/db-constant");
const dbOpration = require("../constant/db-operation-constant");
const {
  insertCommentsData,
  findCommentsDetail,
} = require("../repository/comments");
const { getQuery } = require("../repository/db-operation");
const mongoose = require("mongoose");

const addComment = async (reqHeaders, reqBody) => {
  let lang = reqHeaders.language ? reqHeaders.language : "EN";
  try {
    const commentJson = await addCommentJson(reqBody);
    const commentData = await insertCommentsData(commentJson);
    return {
      serverResponse: {
        isError: false,
        message: _msg[200][lang],
        statusCode: "OK",
      },
      result: {
        data: commentData,
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

const getComments = async (reqHeaders, reqParams) => {
  let lang = reqHeaders.language ? reqHeaders.language : "EN";
  try {
    const commentDetails = await findCommentsDetail({ postId: reqParams.id });
    if (commentDetails) {
      return {
        serverResponse: {
          isError: false,
          message: _msg[200][lang],
          statusCode: "OK",
        },
        result: {
          data: commentDetails,
        },
      };
    } else {
      return {
        serverResponse: {
          isError: false,
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

const addCommentJson = async (reqBody) => {
  const commentJson = {};
  if (reqBody.comment) {
    commentJson["comment"] = reqBody.comment;
  }
  if (reqBody.postId) {
    commentJson["postId"] = reqBody.postId;
  }
  return commentJson;
};

module.exports = {
  addComment,
  getComments,
};
