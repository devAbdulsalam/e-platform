'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function SearchInput() {
	const router = useRouter();
	const [query, setQuery] = useState('');

	const handleSearch = () => {
		console.log('query', query);
		if (!query) {
			return;
		}
		return router.push(`/products?query=${query}`);
	};

	return (
		<div className="w-full max-w-lg lg:max-w-xs">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<div className="relative text-gray-400 focus-within:text-gray-500">
				<button
					onClick={handleSearch}
					className="cursor-pointer absolute inset-y-0 left-0 flex items-center pl-3 z-20"
				>
					<svg
						className="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
							clipRule="evenodd"
						></path>
					</svg>
				</button>
				<input
					id="search"
					className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm"
					placeholder="Search"
					type="search"
					name="search"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>
		</div>
	);
}

export default SearchInput;
