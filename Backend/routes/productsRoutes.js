import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// Get all products
// with optional search query
// Example: /api/products?search=shoes
router.get("/", async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      query = {
        $or: [
          { name: { $regex: search, $options: "i" } }, // case-insensitive match
          { brand: { $regex: search, $options: "i" } },
          { category: { $regex: search, $options: "i" } },
        ],
      };
    }

    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Add a new product
router.post('/', async (req, res) => {
  const { name, price, image, category, brand, inStock, description } = req.body;

  const newProduct = new Product({
    name,
    price,
    image,
    category,
    brand,
    inStock,
    description
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
