const { Country } = require("../models/country");
const { states } = require("../models/state");

const findCountryDetail = async () => {
  try {
    let CountryData = await Country.find();
    return CountryData;
  } catch (error) {
    throw error;
  }
};

const findStateDetail = async (query) => {
  try {
    let stateData = await states.find(query);
    return stateData;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findCountryDetail,
  findStateDetail,
};
