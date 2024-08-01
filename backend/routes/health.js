import express from 'express';
const router = express.Router();

// Search products
router.get('/', async (req, res) => {
	try {
		res.json({ message: 'Api is ok' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export default router;

