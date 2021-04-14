const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3046;

app.use(express.json());
app.use(express.static("dist"));





app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
})