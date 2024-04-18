
const express = require('express');

const app = express();


app.get('/home', (req, res) => {
    res.sendFile(__dirname+ '/index.html')
  });

  app.listen(5000, () => {
    console.log(`Example app listening on port 5000`)
  });
