const { Comments } = require("../models/comments");

const insertCommentsData = async (data) => {
  try {
    const response = new Comments(data);
    const CommentsData = await response.save();
    return CommentsData;
  } catch (error) {
    throw error;
  }
};

const getSingleCommentsDetail = async (query) => {
  try {
    let CommentsDetails = await Comments.findOne(query);
    return CommentsDetails;
  } catch (error) {
    throw error;
  }
};

const findCommentsDetail = async (query) => {
  try {
    let CommentsData = await Comments.find(query);
    return CommentsData;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  insertCommentsData,
  getSingleCommentsDetail,
  findCommentsDetail,
};
