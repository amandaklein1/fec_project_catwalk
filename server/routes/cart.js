const express = require('express');

const router = express.Router();
const axios = require('axios');
const {API_TOKEN} = require('../../config/config.js');


const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/cart'


// router's base endpoint is '/cart'
router.get('/', (req, res) => {
  axios.get(endpoint, {
    headers: {
      'authorization': API_TOKEN
    }
  })
    .then((result) => {
      console.log(result.data);
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err.message);
      res.sendStatus(500);
    });

});

//----------------------//

// POST requests to /cart should contain the sku_id in the body
  // {sku_id: 295414}
router.post('/', (req, res) => {

  axios.post(endpoint, req.body, {
    headers: {
      'authorization': API_TOKEN
    }
  })
    .then((result) => {
      console.log(result.data);
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err.message);
      res.sendStatus(500);
    });

});

module.exports = router;


///// DATA SHAPES /////
// Remember to destructure {data} when receiving back response object from server

/* POST /cart

Server response: "201 Created"

*/

/* GET /cart

Assuming we JUST posted to cart with sku_id 295414, a subsequent GET to cart would return:

[
  {
    count: 1
    sku_id: 295414,
  },
]

*/


