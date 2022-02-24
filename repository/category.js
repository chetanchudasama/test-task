const { Category } = require("../models/category");

const findCategoryDetail = async () => {
  try {
    let CategoryData = await Category.find();
    return CategoryData;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findCategoryDetail,
};
