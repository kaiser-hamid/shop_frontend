"use client";

import { XMarkIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartAction } from "../../store/cartSlice";

export default function Cart() {
    const { isOpen } = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    return (
        <div
            className={`${!isOpen && 'pointer-events-none opacity-0'} fixed inset-0 z-50 flex items-start bg-black/50 transition-all duration-300`}
            onClick={() => dispatch(toggleCartAction())}
        >
            <div
                className={`${!isOpen && 'translate-x-[300px] lg:translate-x-[350px]'} bg-zinc-100 h-full w-[300px] lg:w-[350px] ml-auto relative flex flex-col items-center overflow-y-hidden transition-transform duration-300`}
                style={{ height: '100vh' }}
                onClick={(e) => e.stopPropagation()}
            >
                <EmptyCart />
            </div>
        </div>
    )
}

const EmptyCart = () => {
    const dispatch = useDispatch();
    return (
        <div className="z-40 fixed top-0 h-screen overflow-hidden right-0 no-scrollbar w-96 max-w-xs sm:max-w-sm bg-gray-200 transition-all duration-500 ease-in-out transform flex flex-col text-black">
            <div className="flex p-4 items-center border-solid border-b-2 border-gray-200 bg-white relative">
                <div className="absolute right-4 cursor-pointer text-sg-pink" onClick={() => dispatch(toggleCartAction())}>
                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"></path>
                    </svg>
                </div>
                <h4 className="mx-auto">CART</h4>
            </div>
            <div className="pt-10 flex flex-col items-center">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="gray" style={{ color: 'gray' }} height="130" width="130" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z"></path>
                </svg>
                <h4 className="text-gray-500 mt-8">Your Shopping Bag is Empty</h4>
                <button className="px-10 py-2 bg-black text-white mt-10 rounded-xl tracking-widest hover:bg-primary-500 uppercase" type="button" onClick={() => dispatch(toggleCartAction())}>
                    START SHOPPING
                </button>
            </div>
        </div>
    );
}

const CartItemList = () => {
    return (
        <div className="flex-1 w-full flex flex-col justify-between">
            {/* Items */}
            <div className="flex-1 w-full p-2 lg:p-4 overflow-y-auto">
                {/* Item 1 */}
                {[...Array(7)].map((_, index) => (
                    <div key={index} className="bg-white rounded-none shadow-sm p-3 flex gap-3 items-center mb-4 border border-zinc-100 p-2 lg:p-4">
                        <img src="/assets/images/beauty/img-69.jpg" alt="3W Clinic Intensive UV Sunblock Cream SPF 50+PA+++" className="w-16 h-16 object-cover rounded-none border border-zinc-200" />
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-2">
                                <div className="min-w-0">
                                    <div className="font-semibold text-pink-700 text-xs leading-tight truncate">3W Clinic Intensive UV Sunblock Cream SPF 50+PA+++</div>
                                    <div className="text-zinc-500 text-xs mt-1">৳ 550</div>
                                </div>
                                <button className="p-1 text-zinc-400 hover:text-pink-500 transition-all duration-150">
                                    <TrashIcon className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="flex items-center gap-2 mt-3">
                                <button className="w-7 h-7 border border-zinc-300 text-lg font-bold text-zinc-600 hover:bg-zinc-200">-</button>
                                <span className="px-2 text-base font-medium">1</span>
                                <button className="w-7 h-7 border border-zinc-300 text-lg font-bold text-zinc-600 hover:bg-zinc-200">+</button>
                                <span className="ml-auto font-bold text-zinc-700 text-base">৳ 550.00</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Footer action */}
            <div className="shrink-0 w-full bg-white px-2 lg:p-4 py-2 flex flex-col gap-3 border-t border-zinc-200">
                <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-zinc-500">Cart Total:</span>
                    <span className="text-pink-600 font-bold text-base">৳ 550.00</span>
                </div>
                <button className="w-full bg-black text-white font-semibold py-3 rounded-none text-base tracking-wider flex items-center justify-center gap-2">
                    PROCEED
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-5 h-5'><path strokeLinecap='round' strokeLinejoin='round' d='M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3' /></svg>
                </button>
            </div>
        </div>
    )
}

const EmptyCartOld = () => {
    const dispatch = useDispatch();
    return (
        <div className="flex-1 w-full flex flex-col items-center justify-center p-2 lg:p-4">
            <div className="flex flex-col items-center justify-center flex-1 w-full p-2 lg:p-4">
                <ShoppingBagIcon className="w-24 h-24 text-gray-500 mb-6" />
                <p className="mb-8 text-center text-gray-500">Your cart is Empty</p>
                <button
                    onClick={() => dispatch(toggleCartAction())}
                    className="py-4 hover:bg-green-400 w-full border text-sm lg:text-lg font-semibold uppercase bg-black text-white transition-all duration-150 checkoutbtn flex items-center justify-center gap-2"
                >
                    Start Shopping
                </button>
            </div>
        </div>
    )
}

