"use client";

import { XMarkIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import useCartStore from "@/store/cart-store";
import CartItem from "../cards/CartItem";
import { useRouter } from "next/navigation";

export default function Cart() {
    const setCartIsOpen = useCartStore((state) => state.setCartIsOpen);
    const cartIsOpen = useCartStore((state) => state.cartIsOpen);

    return (
        <div
            className={`${!cartIsOpen && 'pointer-events-none opacity-0'} fixed inset-0 z-50 flex items-start bg-black/50 transition-all duration-300`}
            onClick={() => setCartIsOpen(false)}
        >
            <div
                className={`${!cartIsOpen && 'translate-x-full'} bg-zinc-100 h-full w-[300px] lg:w-[350px] ml-auto relative flex flex-col transition-transform duration-300 ease-out`}
                style={{ height: '100vh' }}
                onClick={(e) => e.stopPropagation()}
            >
                <CartHeader />
                <CartContent />
            </div>
        </div>
    )
}

const CartHeader = () => {
    const setCartIsOpen = useCartStore((state) => state.setCartIsOpen);
    return (
        <div className="flex p-4 items-center border-solid border-b-2 border-gray-200 bg-white relative">
            <div className="absolute left-4 cursor-pointer text-primary-500" onClick={() => setCartIsOpen(false)}>
                <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"></path>
                </svg>
            </div>
            <h4 className="mx-auto">CART</h4>
        </div>
    );
}

const CartContent = () => {
    const setCartIsOpen = useCartStore((state) => state.setCartIsOpen);
    const totalItems = useCartStore((state) => state.totalItems);

    if (!totalItems) {
        return (
            <div className="flex-1 w-full flex flex-col items-center justify-center p-4">
                <div className="flex flex-col items-center justify-center flex-1 w-full">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="gray" style={{ color: 'gray' }} height="130" width="130" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z"></path>
                    </svg>
                    <h4 className="text-gray-500 mt-8">Your Shopping Bag is Empty</h4>
                    <button
                        className="px-10 py-2 bg-black text-white mt-10 rounded-xl tracking-widest hover:bg-primary-500 uppercase"
                        type="button"
                        onClick={() => setCartIsOpen(false)}
                    >
                        START SHOPPING
                    </button>
                </div>
            </div>
        );
    }

    return <CartItemList />;
}

const CartItemList = () => {
    const router = useRouter();

    const cartItems = useCartStore((state) => state.cartItems);
    const totalPrice = useCartStore((state) => state.totalPrice);
    const setCartIsOpen = useCartStore((state) => state.setCartIsOpen);
    const handleProceedToCheckout = () => {
        setCartIsOpen(false);
        router.push('/checkout');
    }

    return (
        <div className="mb-[5rem] custom-scroll overflow-y-auto">
            {cartItems.map((item, index) => (
                <CartItem key={index} data={item} />
            ))}


            {/* Cart Total section */}
            <div className="p-4 bg-white fixed bottom-0 w-[300px] lg:w-[350px]">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-xs">Cart Total:</h2>
                        <h2 className="text-primary-500">৳ {totalPrice}</h2>
                    </div>
                    <button type="button" onClick={handleProceedToCheckout} className="bg-rr-black flex items-center hover:bg-primary-500 text-white px-5 py-3 rounded-xl tracking-widest">
                        PROCEED
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="ml-2" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

