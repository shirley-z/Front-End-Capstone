const express = require('express');
const path = require('path');
const Calls = require('../api');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
  Calls.getProducts()
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((err) => {
      console.log('Error: ', err);
      res.status(500).send(err);
    });
});

app.get('/reviews/:id', (req, res) => {
  const endpointID = req.params.id;
  console.log('endpointID: ', endpointID);
  Calls.getReviewsFor(endpointID)
    .then((results) => {
      console.log('results.data: ', results.data);
      res.send(results.data);
    })
    .catch((err) => {
      console.log('err!');
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
