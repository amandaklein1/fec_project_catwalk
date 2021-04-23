const express = require('express');
const router = express.Router();
const axios = require('axios');
const {API_TOKEN} = require('../../config/config.js');
const util = require('util')

const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews'
const metaEndpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta'


/*

Please include these params in GET requests to /reviews:

  page (int): Selects the page of results to return. Default 1.

  count (int): Specifies how many results per page. Default 5.

  sort (text): Change sort order by "newest", "helpful", or "relevant"

  product_id (int): Specifies product to retrieve reviews for.

Example request:

axios.get('/reviews', {
    params: {
      sort: "newest",
      product_id: 11001
    }
*/

router.get('/', (req, res) => {

  axios.get(endpoint, {
    headers: {
      'authorization': API_TOKEN
    },
    params: {...req.query}
  })
    .then((result) => {
      console.log(util.inspect(result.data, {showHidden: false, depth: null})) // shows all nested structures
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });

});

//----------------------//

/* When fetching data from /reviews/meta, the product_id should be included in the request as params

Example request:

axios.get('/reviews/meta', {
  params: {
    product_id: 11002
  }
})
  .then(({data}) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err);
  })
}
*/

router.get('/meta', (req, res) => {
  const id = req.query.product_id
  axios.get(metaEndpoint, {
    headers: {
      'authorization': API_TOKEN
    },
    params: {
      product_id: id
    }
  })
    .then((result) => {
      console.log(util.inspect(result.data, {showHidden: false, depth: null})) // shows all nested structures
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err.message);
      res.sendStatus(500);
    });

});


module.exports = router;

// GET /reviews/

/* GET /reviews

Req made with the following params:
  axios.get('/reviews', {
    params: {
      sort: "newest",
      product_id: 11001
    }
  })

{
  product: '11001',
  page: 0,
  count: 5,
  results: [
    {
      review_id: 288405,
      rating: 5,
      summary: 'Great Product.',
      recommend: true,
      response: null,
      body: 'I would highly recommend this product.',
      date: '2021-03-08T00:00:00.000Z',
      reviewer_name: 'Will',
      helpfulness: 0,
      photos: []
    },
    {
      review_id: 111375,
      rating: 4,
      summary: 'df',
      recommend: true,
      response: null,
      body: 'fdfa',
      date: '2021-02-02T00:00:00.000Z',
      reviewer_name: 'asdf',
      helpfulness: 0,
      photos: []
    },
    {
      review_id: 111352,
      rating: 5,
      summary: 'yo',
      recommend: true,
      response: null,
      body: 'yo',
      date: '2021-01-23T00:00:00.000Z',
      reviewer_name: 'Yo',
      helpfulness: 0,
      photos: []
    },
    {
      review_id: 111351,
      rating: 4,
      summary: 'yo',
      recommend: true,
      response: null,
      body: 'yo',
      date: '2021-01-23T00:00:00.000Z',
      reviewer_name: 'yo',
      helpfulness: 0,
      photos: []
    },
    {
      review_id: 111343,
      rating: 4,
      summary: 'Hello Test from Will',
      recommend: true,
      response: null,
      body: 'The postman is here',
      date: '2021-01-23T00:00:00.000Z',
      reviewer_name: 'Will',
      helpfulness: 0,
      photos: []
    }
  ]
}

*/

/* GET reviews/meta

Req made with the following params:
  axios.get('/reviews/meta', {
    params: {
      product_id: 11001
    }
  })

{
  product_id: '11003',
  ratings: { '4': '3', '5': '1' },
  recommended: { false: '1', true: '3' },
  characteristics: {
    Fit: { id: 36830, value: '3' },
    Length: { id: 36831, value: '3' },
    Comfort: { id: 36832, value: '4' },
    Quality: { id: 36833, value: '3' }
  }
}

*/