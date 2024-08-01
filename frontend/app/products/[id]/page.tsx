import axios from 'axios';
import Button from '@/components/Button';
interface Product {
	_id: string;
	title: string;
	description: string;
	image: string;
	price: number;
	category: string;
	countInStock: number;
}

const formatPrice = (price: string) => {
	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
async function getProduct(id: string): Promise<Product> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
	return res.json();
}
export default async function ProductPage({
	params,
}: {
	params: { id: string };
}) {
	// console.log("params", params);
	const product = await getProduct(params.id);
	if (product) {
		return (
			<section className="mt-20 md:mt-6 ">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
					{/* Image section */}
					<div className=" lg:aspect-h-2 lg:aspect-w-2 lg:rounded-lg overflow-hidden px-4 md:px-2">
						<img
							src={product.image}
							alt={product.title}
							className="w-full h-full md:h-[90vh] object-cover object-center border border-primary rounded-lg"
						/>
					</div>

					{/* Product info */}
					<div className="p-4 lg:p-8 border">
						<h1 className="text-3xl font-semibold text-gray-900">
							{product.title}
						</h1>
						<div className="mt-6">
							<h2 className="text-xl font-semibold text-gray-900">
								Description
							</h2>
							<p className="mt-2 text-gray-700">{product.description}</p>
						</div>

						<div className="mt-6">
							<h2 className="text-xl font-semibold text-gray-900">Details</h2>
							<p className="mt-2 text-gray-700 list-disc list-inside">
								{/* {product?.details} */} details
							</p>
						</div>

						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-3">
							<div>
								<label className="text-text font-semibold">Category</label>
								<p className="mt-2 text-accent list-disc list-inside">
									{product?.category}
								</p>
							</div>
							<div>
								<label className="text-text font-semibold">Available</label>
								<p className="mt-2 text-accent list-disc list-inside">
									{product?.countInStock}
								</p>
							</div>
						</div>

						<div className="mt-4 flex justify-between items-center">
							<h2 className="text-xl font-semibold text-gray-900">Price</h2>
							<p className="mt-2 text-primary font-semibold text-lg">
								NGN {formatPrice(product?.price?.toString())}
							</p>
						</div>
						<div className="w-full">
							<Button />
						</div>
					</div>
				</div>
			</section>
		);
	}

	return <p>Product not found.</p>;
}

export async function generateStaticParams() {
	const products = await axios
		.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
		.then((res) => res.data);

	return products.map((product: { _id: any }) => ({
		slug: product._id,
	}));
}
