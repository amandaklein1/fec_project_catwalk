const express = require('express');
const router = express.Router();
const util = require('util')
const app = require('../index.js');




router.get('/:productId', (req, res) => {

  // app.use(express.static("dist"));

});


module.exports = router;
