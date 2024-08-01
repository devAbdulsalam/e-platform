import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
	{
		products: Object,
		name: { type: String, required: true },
		email: { type: String, required: true },
		address: { type: String, required: true },
		city: { type: String, required: true },
		paid: { type: Number, defaultValue: 0 },
	},
	{ timestamps: true }
);

const Order = mongoose.model('Order', OrderSchema);

export default Order;
