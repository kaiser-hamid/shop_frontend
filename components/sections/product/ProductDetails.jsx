"use client"
import { Dialog } from "@headlessui/react";
import { HeartIcon, EyeIcon, CheckCircleIcon, ExclamationTriangleIcon, ShieldCheckIcon, XMarkIcon, StarIcon, FireIcon, QuestionMarkCircleIcon, ShoppingBagIcon, TruckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ProductDetails() {
    const [openModal, setOpenModal] = useState(null);

    return (
        <div>
            {/* Title */}
            <h3 className="font-semibold text-lg mb-2">3W Clinic Intensive UV Sunblock Cream SPF 50+PA+++</h3>
            {/* Size and Reviews */}
            <div className="flex items-center gap-4 text-sm mb-3">
                <span className="text-gray-500">Size: <span className="font-medium">70ml</span></span>
                {/* <span className="flex items-center bg-green-100 text-green-700 px-2 py-0.5 rounded gap-1"><StarIcon className="w-4 h-4 text-green-500" /> 199 Reviews</span> */}
            </div>
            {/* Price, Discount, and Save */}
            <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-[#bc1b3b]">$550.00</span>
                <span className="text-gray-400 line-through">$850.00</span>
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">Save $300.00</span>
                <span className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded text-xs font-semibold">35% OFF</span>
            </div>

            {/* Quantity Selector and Add to Cart */}
            <div className="flex mt-6 gapy-4 gap-x-2 mb-4">
                {/* Quantity Selector */}
                <div className="flex items-center border rounded h-16 bg-white">
                    <button className="px-4 py-2 text-lg font-bold text-gray-700 outline-none">-</button>
                    <span className="px-4 text-lg font-semibold">1</span>
                    <button className="px-4 py-2 text-lg font-bold text-gray-700 outline-none">+</button>
                </div>
                {/* Add to Bag Button */}
                <button className="py-4 hover:bg-green-400 w-full border text-sm lg:text-lg font-semibold uppercase bg-black text-white transition-all duration-500 checkoutbtn flex items-center justify-center gap-2">
                    <ShoppingBagIcon className="w-6 h-6" /> Add to Bag
                </button>
                {/* Wishlist Button */}
                <div className="flex-shrink py-3 group flex justify-center items-center hover:bg-green-400 border border-gray-200 w-16 h-16 bg-white">
                    <HeartIcon className="w-6 h-6 stroke-gray-800 group-hover:stroke-white" />
                </div>
            </div>
            {/* Stock Warning */}
            <div className="flex items-center gap-2 mb-5">
                <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />
                <span className="text-red-500 font-medium">Only 5 items left in stock</span>
            </div>
            {/* Brief Description */}
            <div className="mb-5">
                <span className="font-semibold">Brief Description</span>
                <p className="text-gray-600 text-sm mt-1">3W Clinic Intensive UV Sunblock Cream provides pleasant and reliable protection from sunburn, inflammation, redness, discoloration, and sign of ageing. It is a lightweight daily cream all-in-one. It protects your skin from age-causing UVA rays and burn-causing UVB rays.</p>
            </div>
            {/* SKU, Categories, Tags, Brands */}
            <ul className="text-sm space-y-1 mb-10">
                <li><span className="text-gray-600">SKU: </span>7154</li>
                <li><span className="text-gray-600">Categories: </span>Skin, Personal care, Offers, K-Beauty, Body, Body, Shop By Concern, Sunscreen, Sun Protection, Tan Removal, Sunscreen, Anti Aging, Sun Care, Top Selling</li>
                <li><span className="text-gray-600">Tags: </span>FMCG, app_best_seller, Hot Deals</li>
                <li><span className="text-gray-600">Brands: </span>3W Clinic</li>
            </ul>

            <div className="mt-10">
                <div className="space-y-5 mt-5">
                    <button className="flex gap-3 items-center" onClick={() => setOpenModal("shipping")}>
                        <TruckIcon className="w-6 h-6" />
                        <div className="text-gray-500 text-15 text-left">
                            <p className="font-semibold text-black flex items-center">Free Shipping</p>
                            <p>Free standard shipping on orders over $99.</p>
                            <p>Estimated to be delivered on 12/01/2022 - 15/10/2022.</p>
                        </div>
                    </button>
                    <button className="flex gap-3 items-center" onClick={() => setOpenModal("return")}>
                        <ShieldCheckIcon className="w-6 h-6" />
                        <div className="text-gray-500 text-15 text-left">
                            <p className="font-semibold text-black flex items-center">Free Return</p>
                            <p>Learn More.</p>
                        </div>
                    </button>
                </div>
            </div>

            {/* Icons Row */}
            <div className="mt-10 flex items-center gap-8 border-t pt-4 text-xs text-gray-700 justify-between">
                <div className="flex flex-col items-center"><CheckCircleIcon className="w-6 h-6 mb-1" />100% Genuine Products</div>
                <div className="flex flex-col items-center"><ShieldCheckIcon className="w-6 h-6 mb-1" />100% Secure Payments</div>
                <div className="flex flex-col items-center"><QuestionMarkCircleIcon className="w-6 h-6 mb-1" />Help Center (18002665774)</div>
            </div>

            {/* Shipping Modal */}
            <Dialog open={openModal === "shipping"} onClose={() => setOpenModal(null)} className="fixed inset-0 z-10 flex items-center justify-center">
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50" aria-hidden="true" />
                <div className="relative bg-white w-full max-w-2xl mx-auto my-20 p-7 rounded shadow-lg">
                    <button className="absolute top-4 right-4" onClick={() => setOpenModal(null)}><XMarkIcon className="w-8 h-8" /></button>
                    <div className="text-2xl font-bold text-center p-4 border-b-2 border-gray-300/10">FREE SHIPPING</div>
                    <div className="p-7 text-gray-600">
                        <p>We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations.</p>
                        <p className="py-2">When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose. Depending on the shipping provider you choose, shipping date estimates may appear on the shipping quotes page.</p>
                        <p>Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be found on its detail page. To reflect the policies of the shipping companies we use, all weights will be rounded up to the next full pound.</p>
                    </div>
                </div>
            </Dialog>
            {/* Return Modal */}
            <Dialog open={openModal === "return"} onClose={() => setOpenModal(null)} className="fixed inset-0 z-10 flex items-center justify-center">
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50" aria-hidden="true" />
                <div className="relative bg-white w-full max-w-2xl mx-auto my-20 p-7 rounded shadow-lg">
                    <button className="absolute top-4 right-4" onClick={() => setOpenModal(null)}><XMarkIcon className="w-8 h-8" /></button>
                    <div className="text-2xl font-bold text-center p-4 border-b-2 border-gray-300/10">FREE RETURNS</div>
                    <div className="p-7 text-gray-600">
                        <p>You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).</p>
                        <p className="py-2">You should expect to receive your refund within four weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. This time period includes the transit time for us to receive your return from the shipper (5 to 10 business days), the time it takes us to process your return once we receive it (3 to 5 business days), and the time it takes your bank to process our refund request (5 to 10 business days).</p>
                        <p>if you need to return an item, simply login to your account, view the order using the "Complete Orders" link under the My Account menu and click the Return Item(s) button. We'll notify you via e-mail of your refund once we've received and processed the returned item.</p>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
