const { Post } = require("../models/post");

const insertPostData = async (data) => {
  try {
    const response = new Post(data);
    const PostData = await response.save();
    return PostData;
  } catch (error) {
    throw error;
  }
};

const getSinglePostDetail = async (query) => {
  try {
    let PostDetails = await Post.findOne(query);
    return PostDetails;
  } catch (error) {
    throw error;
  }
};

const findPostDetail = async () => {
  try {
    let PostData = await Post.find();
    return PostData;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  insertPostData,
  getSinglePostDetail,
  findPostDetail,
};
