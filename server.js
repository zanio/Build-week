/* eslint-disable no-console */
/* eslint-disable global-require */
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());


if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!

  app.use(express.static('dist'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('the server is runing on http://localhost:5000');
});
