'use client';
import React from 'react'
import toast from 'react-hot-toast';

function Button() {
  return (
    <button
								className="bg-primary text-white py-2 px-4 mt-4 rounded-md hover:bg-primary-dark w-full"
								onClick={() => {
									// addProduct(product._id);
									toast.success('Item added to cart!!');
								}}
							>
								Add to Cart
							</button>
  )
}

export default Button