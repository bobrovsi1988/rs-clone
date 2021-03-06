const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const type = req.body.type;
  const description = req.body.description;
  const theme = req.body.theme;
  const link = req.body.link;
 
  const date = Date.parse(req.body.date);

  const newProduct = new Product({
    username,
    type,
    description,
    theme,
    link,
    date,
  });

  newProduct.save()
  .then(() => res.json('product added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Product.findById(req.params.id)
    .then(product => {
      product.username = req.body.username;
      product.type = req.body.type;
      product.description = req.body.description;
      product.theme = req.body.theme;
      product.link = req.body.link;      
      product.date = Date.parse(req.body.date);

      product.save()
        .then(() => res.json('product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/likes/:id').post((req, res) => {
    Product.findById(req.params.id)
    .then(product => {
      console.log(product.likes);
      product.likes += 1;

      product.save()
        .then(() => res.json('product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/dislikes/:id').post((req, res) => {
    Product.findById(req.params.id)
    .then(product => {      
      product.dislikes += 1;

      product.save()
        .then(() => res.json('product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;