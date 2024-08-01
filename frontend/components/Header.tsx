import Link from 'next/link';
import SearchInput from "@/components/SearchInput";

export default function Header() {
	return (
		<header className="w-full">
			<nav className="bg-gray-50">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-between border-b border-gray-200">
						<div className="flex items-center">
							<Link href="../" className="flex-shrink-0">
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/mark.svg?color=violet&amp;shade=500"
									alt="Your Company"
								/>
							</Link>
							<div className="hidden lg:ml-10 lg:block">
								<div className="flex space-x-4">
									<Link
										href="../"
										className="bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700"
									>
										Home
									</Link>

									<Link
										href="./products"
										className="bg-gray-100 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900"
									>
										Products
									</Link>
								</div>
							</div>
						</div>

						<div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
							<SearchInput/>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
