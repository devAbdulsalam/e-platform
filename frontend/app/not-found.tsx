import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='min-h-screen text-center'>
			<h2 className='text-lg font-semibold my-3'>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/">Return Home</Link>
		</div>
	);
}
