import express from 'express';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouter.get('/name/:name', async (req, res) => {
  const product = await Product.findOne({ name: req.params.name });
  if (product) res.send(product);
  else res.status(404).send({ message: 'Product Not Found' });
});

productRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) res.send(product);
  else res.status(404).send({ message: 'Product Not Found' });
});

export default productRouter;
