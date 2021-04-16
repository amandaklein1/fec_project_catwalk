const express = require('express');
const path = require('path');
const axios = require('axios');
const router = express.Router();
const {API_TOKEN} = require('../../config/config.js');



// Products-related routes handled by Atelier API:
  // GET /products
  // GET /products/:product_id
  // GET /products/:product_id/styles
  // GET /products/:product_id/related


router.get('/', (req, res) => {
  console.log('req//!', req.headers);
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products')
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
})

module.exports = router;