"use client"

import { useState } from "react";
import { XMarkIcon, PlusIcon, MinusIcon, ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Product from "@/components/cards/Product";

// ...existing imports...

const products = [
    {
        name: "Yjame",
        img: "assets/images/fashion-2/img-18.jpg",
        link: "card-product-detail-1.html",
        price: 288,
        oldPrice: null,
    },
    {
        name: "SportK",
        img: "assets/images/fashion-2/img-12.jpg",
        link: "card-product-detail-1.html",
        price: 285,
        oldPrice: 280,
    },
    {
        name: "NIKE",
        img: "assets/images/fashion-2/img-14.jpg",
        link: "card-product-detail-1.html",
        price: 300,
        oldPrice: null,
    },
    {
        name: "MenGlassess",
        img: "assets/images/fashion-2/img-62.jpg",
        link: "card-product-detail-1.html",
        price: 300,
        oldPrice: null,
    },
    {
        name: "SportK",
        img: "assets/images/fashion-2/img-11.jpg",
        link: "card-product-detail-1.html",
        price: 275,
        oldPrice: 280,
    },
    {
        name: "Nike",
        img: "assets/images/fashion-2/img-16.jpg",
        link: "card-product-detail-1.html",
        price: 300,
        oldPrice: 310,
    },
    {
        name: "UniTED Hoddie",
        img: "assets/images/products/p-2.jpg",
        link: "card-product-detail-1.html",
        price: 79,
        oldPrice: 149,
    },
    {
        name: "Converse",
        img: "assets/images/fashion-2/img-64.jpg",
        link: "card-product-detail-1.html",
        price: 245,
        oldPrice: null,
    },
    {
        name: "RoutinX",
        img: "assets/images/fashion-2/img-74.jpg",
        link: "card-product-detail-1.html",
        price: 300,
        oldPrice: null,
    },
    {
        name: "Fantasy Jeans",
        img: "assets/images/fashion-2/img-83.jpg",
        link: "card-product-detail-1.html",
        price: 289,
        oldPrice: null,
    },
    {
        name: "9 Tails",
        img: "assets/images/fashion-2/img-77.jpg",
        link: "card-product-detail-1.html",
        price: 97,
        oldPrice: null,
    },
    {
        name: "Men Jeans",
        img: "assets/images/fashion-2/img-20.jpg",
        link: "card-product-detail-1.html",
        price: 211,
        oldPrice: 280,
    },
    {
        name: "Brioni",
        img: "assets/images/fashion-2/img-21.jpg",
        link: "card-product-detail-1.html",
        price: 211,
        oldPrice: null,
    },
    {
        name: "Burberry",
        img: "assets/images/fashion-2/img-22.jpg",
        link: "card-product-detail-1.html",
        price: 211,
        oldPrice: null,
    },
    {
        name: "Carhart",
        img: "assets/images/fashion-2/img-23.jpg",
        link: "card-product-detail-1.html",
        price: 211,
        oldPrice: null,
    },
    {
        name: "New Generation",
        img: "assets/images/fashion-2/img-66.jpg",
        link: "card-product-detail-1.html",
        price: 211,
        oldPrice: null,
    },
    {
        name: "Saint Laurent",
        img: "assets/images/fashion-2/img-67.jpg",
        link: "card-product-detail-1.html",
        price: 211,
        oldPrice: null,
    },
    {
        name: "Valentino",
        img: "assets/images/fashion-2/img-68.jpg",
        link: "card-product-detail-1.html",
        price: 211,
        oldPrice: null,
    },
    {
        name: "Yjame",
        img: "assets/images/fashion-2/img-69.jpg",
        link: "card-product-detail-1.html",
        price: 211,
        oldPrice: null,
    },
    {
        name: "T-Shirt",
        img: "assets/images/products/p-3.jpg",
        link: "card-product-detail-1.html",
        price: 99,
        oldPrice: 120,
    },
];


export default function CategoryContent() {
    const [modalOpen, setModalOpen] = useState(false);
    const [itemsPerPageOpen, setItemsPerPageOpen] = useState(false);
    const [sortOpen, setSortOpen] = useState(false);
    const [tab, setTab] = useState("tab1");

    // Example filter state
    const [categoryOpen, setCategoryOpen] = useState(true);

    return (
        <div className="col-span-12 lg:col-span-9">
            {/* Search Input */}
            <div className="w-full mb-6 relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 pr-2 pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-zinc-400" />
                </span>
                <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-12 pr-4 py-2 rounded-xl border border-zinc-300 bg-zinc-100 focus:bg-white outline-none text-base transition-all duration-150 placeholder:text-zinc-400"
                />
            </div>
            <div className="flex justify-between flex-row-reverse lg:flex-row">
                <div className="w-full">
                    <div className="w-full">
                        <div className="flex justify-end items-center z-50 bg-zinc-50 py-1.5 w-full md:static sticky top-0">

                            {/* Sort By Dropdown */}
                            <div className="flex gap-4 items-center order-2">
                                <span className="hidden lg:inline">Sort By</span>
                                <div className="inline-block relative">
                                    <select className="text-15 font-medium p-2 border bg-white cursor-pointer outline-none">
                                        <option value="">Default sorting</option>
                                        <option value="low-to-high">Price: Low to High</option>
                                        <option value="high-to-low">Price: High to Low</option>
                                        <option value="old-to-new">Old to New</option>
                                        <option value="new-to-old">New to Old</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="w-full flex flex-col pt-8 mt-5 border-t border-[#dedede]">
                            {/* Tabs logic if needed */}
                            <div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-14 gap-x-5">
                                    {products.map((product, idx) => (
                                        <Product key={idx} product={product} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}