import express from 'express';
import {
	getProduct,
	searchProduct,
	getProducts,
} from '../controllers/product.js';

const router = express.Router();

router.get('/', getProducts);
// Search products
router.get('/search', searchProduct);
// Get product details
router.get('/:id', getProduct);

export default router;
