import Link from 'next/link';
import Search from '@/components/Search';
import Button from '@/components/Button';
// Utility function to format price with a comma for thousands
const formatPrice = (price: string) => {
	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
const getProducts = async (query: string) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/products/search?q=${query}`,
		{
			next: { revalidate: 3600 },
		}
	);
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}
	return res.json();
};
export default async function Products({
	searchParams,
}: {
	searchParams?: {
		query?: string;
	};
}) {
	const query = searchParams?.query || '';

	const products = await getProducts(query);

	return (
		<div className="flex justify-center min-h-screen w-full">
			<div className="mt-14 md:mt-6 w-full px-4 md:p-0">
				<div className="py-2 mb-4">
					<Search placeholder="Search invoices..." />
				</div>

				{products.length === 0 ? (
					<p className="text-center text-gray-600">
						No matching products found.
					</p>
				) : (
					<div className="grid grid-cols-2 gap-x-3 md:gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 xl:gap-x-8 px-2">
						{products.map((product: any) => (
							<div key={product._id}>
								<div className="group block overflow-hidden border border-accent rounded-xl border-opacity-10">
									<div className="">
										<div className="relative md:h-[300px] h-[200px]">
											<img
												src={product.image}
												alt=""
												className="absolute inset-0 h-full w-full object-contain opacity-100 group-hover:opacity-0"
											/>
											<img
												src={product.image}
												alt=""
												className="absolute inset-0 h-full w-full object-contain opacity-0 group-hover:opacity-100"
											/>
										</div>

										<div className="relative p-3 border-t">
											<Link href={'/products/' + product._id}>
												<h3 className="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4 truncate">
													{product.title}
												</h3>
											</Link>

											<div className="mt-1.5 flex flex-col items-center justify-between text-text">
												<p className="tracking-wide text-primary text-sm md:text-md">
													NGN {formatPrice(product.price)}
												</p>

												<div className="col-span-12 text-center w-full mt-3">
													<Button />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
