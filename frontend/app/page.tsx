import Product from '../components/Product';
const getProducts = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
		next: { revalidate: 3600 },
	});
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}
	return res.json();
};

export default async function Home() {
	const products = await getProducts();
	return (
		<main className="h-full w-full  mx-auto p-4 ">
			<div className="flex flex-col justify-center items-center mb-4">
				<div className="flex justify-between items-center mb-4">
					<h1 className="text-2xl">Simple E-commerce website</h1>
				</div>
			</div>
			<div>
				<h2 className="text-2xl font-bold tracking-tight text-text">
					Our Latest Products
				</h2>

				<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
					{/* // <TodoItem key={todo.id} todo={todo} /> */}
					{products.map((item: any) => (
						<Product key={item._id} {...item} />
					))}
				</div>
			</div>
		</main>
	);
}
