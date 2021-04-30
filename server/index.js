const express = require('express');
const axios = require('axios');
const {API_TOKEN} = require('../config/config.js');

// const homeRoute = require('./routes/home.js');
// const startRoute = require('./routes/start.js');
const productsRoutes = require('./routes/products.js');
const cartRoutes = require('./routes/cart.js');
const reviewsRoutes = require('./routes/reviews.js');


const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', express.static("dist"));


///// ROUTES /////
app.use('*/products', productsRoutes);
app.use('*/cart', cartRoutes);
app.use('*/reviews/', reviewsRoutes);

app.use('/:productId', express.static("dist")); // catch-all

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
})

module.exports = app;