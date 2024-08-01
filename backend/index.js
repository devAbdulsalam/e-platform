import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routes/product.js';
import healthRoutes from './routes/health.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors('*'));

app.use('/', healthRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/products', productRoutes);




mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
