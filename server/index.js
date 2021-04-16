const express = require('express');
const axios = require('axios');
const {API_TOKEN} = require('../config/config.js');

const productsRoutes = require('./routes/products.js');
const cartRoutes = require('./routes/cart.js');
const reviewsRoutes = require('./routes/reviews.js');



const app = express();
const PORT = 3002;

app.use(express.json());
app.use(express.static("dist"));

// app.use((req, res, next) => {
//   req.headers.authorization = API_TOKEN;
//   next();
// });

// Routes
// app.use('/products', productsRoutes);
// app.use('/cart', cartRoutes);

app.get('/products', (req, res) => {
  // req.headers.authorization = API_TOKEN;
  // console.log('///req header///', req.headers);
  const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products'
  axios.get(endpoint, {
    headers: {
      "authorization": API_TOKEN
    }
  })
    .then(({data}) => {
      console.log('result from API>>', data);
      res.send(data);
    })
    .catch((err) => {
      console.log('failed request', err);
      res.sendStatus(500);
    })

})


///// ROUTES /////
app.use('/products', productsRoutes);
app.use('/cart', cartRoutes);
app.use('/reviews/', reviewsRoutes);








app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
})

