import asyncHandler from 'express-async-handler';
import Product from '../models/Product.js';
import Order from '../models/Order.js';

// Search products
export const getProducts = asyncHandler(async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});
// Search products
export const searchProduct = asyncHandler(async (req, res) => {
	const query = req.query.q;

	try {
		let products;
		if (query) {
			const regex = new RegExp(query, 'i');
			const queryConditions = [
				{ title: regex },
				{ description: regex },
				{ category: regex },
			];

			// Check if the query can be parsed as a number for price search
			const price = parseFloat(query);
			if (!isNaN(price)) {
				queryConditions.push({ price: price });
			}

			products = await Product.find({
				$or: queryConditions,
			});
		} else {
			products = await Product.find();
		}

		res.json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Get product details
export const getProduct = asyncHandler(async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if (product) {
			res.json(product);
		} else {
			res.status(404).json({ message: 'Product not found' });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
});

// CastError: Cast to Number failed for value "/men/i" (type RegExp) at path "price" for model "Product"
