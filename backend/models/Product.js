import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
	title: { type: String, required: true, index: true },
	description: { type: String, required: true },
	category: { type: String, required: true, index: true },
	price: { type: Number, required: true, index: true },
	countInStock: { type: Number, required: true, default: 20 },
	image: { type: String, required: true },
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
