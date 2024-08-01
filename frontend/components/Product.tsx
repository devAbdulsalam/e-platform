import Link from 'next/link';

type productProps = {
	_id: string;
	title: string;
	price: string;
	description: string;
	image: string;
	countInStock: number;
};

export default function Product({
	_id,
	title,
	price,
	countInStock,
	image,
}: productProps) {
	return (
		<div className="w-52" key={_id}>
			<div className="bg-blue-100 p-5 rounded-xl">
				<div className="relative md:h-[300px] h-[200px]">
					<img
						src={image}
						alt="product image"
						className="absolute inset-0 h-full w-full object-contain opacity-100 group-hover:opacity-0"
					/>
				</div>
			</div>
			<div className="mt-2">
				<h3 className="font-bold text-lg">{title}</h3>
			</div>
			<p className="text-sm mt-1 leading-4 text-gray-500">{countInStock}</p>
			<div className="flex mt-1">
				<div className="text-2xl font-bold grow">NGN {price}</div>
				<Link
					href={`/products/${_id}`}
					className="bg-emerald-400 text-white py-1 px-3 rounded-xl"
				>
					Details{' '}
				</Link>
			</div>
		</div>
	);
}
