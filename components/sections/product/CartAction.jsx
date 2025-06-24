"use client"

import useCartStore from "@/store/cart-store";
import UpcomingFeature from "@/components/modals/UpcomingFeature";

export default function CartAction({ product }) {
    const setCartItems = useCartStore((state) => state.setCartItems);

    const handleAddToCart = () => {
        setCartItems({
            slug: product.slug,
            image: product.product_images[0],
            name: product.name,
            quantity: 1,
            unit_price: product.sale_price,
            available_stock: product.stock_quantity,
        });
    }

    return (
        <div className="flex space-x-3 items-center p-1 mt-4">
            {/* Add To Wishlist */}
            <UpcomingFeature className="h-12 px-4 bg-rr-black rounded-lg">
                <button title="Add To Wishlist" className="h-12 text-white">{/* h-12 px-4 bg-rr-black rounded-lg text-white */}
                    <svg stroke="currentColor" fill="white" strokeWidth="0" viewBox="0 0 16 16" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"></path>
                    </svg>
                </button>
            </UpcomingFeature>

            {/* Add To Cart */}
            <div className="flex space-x-3">
                <div className="w-24 md:w-32 h-12">
                    <div className="flex flex-row w-full h-full rounded-lg relative bg-transparent border border-1 border-gray-300">
                        <button data-action="decrement" className="text-gray-600 hover:text-primary-500 h-full w-20 rounded-l cursor-pointer outline-none text-2xl font-medium">−</button>
                        <input type="number" className="outline-none focus:outline-none text-center w-full font-semibold text-lg hover:text-black focus:text-black lg:text-base cursor-default flex items-center text-gray-700" name="custom-input-number" readOnly value="1" />
                        <button data-action="increment" className="text-gray-600 hover:text-primary-500 h-full w-20 rounded-r cursor-pointer text-2xl font-medium">+</button>
                    </div>
                </div>
                <button onClick={handleAddToCart} className="bg-primary-500 px-1 h-12 text-white rounded-lg min-w-[140px] md:min-w-[160px] text-sm hover:bg-primary-600 transition-colors duration-300" type="button">ADD TO CART </button>
            </div>
        </div>
    )
}