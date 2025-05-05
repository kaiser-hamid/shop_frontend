import { XMarkIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export default function Cart() {
    return (
        <div className="fixed inset-0 z-50 flex items-start bg-z cursor-pointer">

        </div>
    )
}

const CartTemp = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-start bg-[#0000004d] cursor-pointer">
            <div className="bg-zinc-100 h-full w-[350px] ml-auto relative flex flex-col items-center overflow-y-hidden" style={{ height: '100vh' }}>
                {/* Header panel */}
                <div className="relative w-full bg-white h-14 flex items-center justify-center shrink-0 z-10">
                    <button type="button" className="absolute top-0 left-0 p-3">
                        <XMarkIcon className="w-8 h-8 text-pink-500 hover:text-pink-600 transition-all duration-150" />
                    </button>
                    <h4 className="w-full lg:text-lg text-center font-medium tracking-widest">CART</h4>
                </div>
                {/* Body: scrollable items + fixed footer */}
                <div className="relative flex-1 w-full flex flex-col h-full">
                    {/* Cart Items (scrollable, with bottom padding for footer) */}
                    <div className="flex-1 overflow-y-auto px-2 py-4" style={{ paddingBottom: '16px' }}>
                        <CartItem />
                    </div>
                    {/* Cart Footer (fixed to bottom of body) */}
                    <div className="w-full bg-white px-4 py-4 flex flex-col gap-3 border-t border-zinc-200 shrink-0" style={{ height: '72px' }}>
                        <div className="flex justify-between items-center text-base font-medium">
                            <span className="text-zinc-500">Cart Total:</span>
                            <span className="text-pink-600 font-bold text-lg">৳ 550.00</span>
                        </div>
                        <button className="w-full bg-black text-white font-semibold py-3 rounded-none text-base tracking-wider flex items-center justify-center gap-2">
                            PROCEED
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-5 h-5'><path strokeLinecap='round' strokeLinejoin='round' d='M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3' /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CartItem = () => {
    return (
        <div className="flex flex-col flex-1 w-full">
            <div className="flex-1 w-full overflow-y-auto px-2 py-4" style={{ maxHeight: 'calc(100vh - 120px)' }}>
                <div className="bg-white rounded-none shadow-sm p-3 flex gap-3 items-center mb-4 border border-zinc-100 p-2 lg:p-4">
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


                <div className="bg-white rounded-none shadow-sm p-3 flex gap-3 items-center mb-4 border border-zinc-100 p-2 lg:p-4">
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
                <div className="bg-white rounded-none shadow-sm p-3 flex gap-3 items-center mb-4 border border-zinc-100 p-2 lg:p-4">
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
                <div className="bg-white rounded-none shadow-sm p-3 flex gap-3 items-center mb-4 border border-zinc-100 p-2 lg:p-4">
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
                <div className="bg-white rounded-none shadow-sm p-3 flex gap-3 items-center mb-4 border border-zinc-100 p-2 lg:p-4">
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
            </div>
        </div>
    )
}

const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 w-full p-2 lg:p-4">
            <ShoppingBagIcon className="w-24 h-24 text-gray-500 mb-6" />
            <p className="mb-8 text-center text-gray-500">Cart is Empty</p>
            <button className="py-4 hover:bg-green-400 w-full border text-sm lg:text-lg font-semibold uppercase bg-black text-white transition-all duration-150 checkoutbtn flex items-center justify-center gap-2">
                Start Shopping
            </button>
        </div>
    )
}

