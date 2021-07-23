const axios = require('axios');
const config = require('./config');

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/',
  headers: {
    'User-Agent': 'get',
    Authorization: config.TOKEN,
  },
};

const getProducts = () => {
  const productOptions = Object.create(options);
  productOptions.url += 'products';

  return axios(productOptions);
};

const getReviewsFor = (productID) => {
  const productOptions = Object.create(options);
  productOptions.url += 'reviews';
  productOptions.params = { product_id: productID };

  return axios(productOptions);
};

module.exports = {
  getProducts,
  getReviewsFor,
};