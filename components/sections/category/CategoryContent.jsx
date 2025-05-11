"use client"

import { useState } from "react";
import { XMarkIcon, PlusIcon, MinusIcon, ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Product from "@/components/cards/Product";

// ...existing imports...

const products = [
    {
        name: "image sources. If you have any other places or files in mind, let me know!",
        img: "/assets/images/fashion-2/img-18.jpg",
        link: "card-product-detail-1.html",
        price: 288,
        oldPrice: null,
        size: "280ml"
    },
    {
        name: "SportK",
        img: "/assets/images/fashion-2/img-12.jpg",
        link: "card-product-detail-1.html",
        price: 285,
        oldPrice: 280,
        size: "280ml"
    },
    {
        name: "NIKE",
        img: "/assets/images/fashion-2/img-14.jpg",
        link: "card-product-detail-1.html",
        price: 300,
        oldPrice: null,
        size: "280ml"
    },
    {
        name: "MenGlassess",
        img: "/assets/images/fashion-2/img-62.jpg",
        link: "card-product-detail-1.html",
        price: 300,
        oldPrice: null,
        size: "280ml"
    },
    {
        name: "SportK",
        img: "/assets/images/fashion-2/img-11.jpg",
        link: "card-product-detail-1.html",
        price: 275,
        oldPrice: 280,
        size: "280ml"
    },
    {
        name: "Nike",
        img: "/assets/images/fashion-2/img-16.jpg",
        link: "card-product-detail-1.html",
        price: 300,
        oldPrice: 310,
        size: "280ml"
    },
    {
        name: "UniTED Hoddie",
        img: "/assets/images/products/p-2.jpg",
        link: "card-product-detail-1.html",
        price: 79,
        oldPrice: 149,
        size: "280ml"
    },
    {
        name: "Converse",
        img: "/assets/images/fashion-2/img-64.jpg",
        link: "card-product-detail-1.html",
        price: 245,
        oldPrice: null,
        size: "280ml"
    },
    {
        name: "RoutinX",
        img: "/assets/images/fashion-2/img-74.jpg",
        link: "card-product-detail-1.html",
        price: 300,
        oldPrice: null,
        size: "280ml"
    },
    {
        name: "Fantasy Jeans",
        img: "/assets/images/fashion-2/img-83.jpg",
        link: "card-product-detail-1.html",
        price: 289,
        oldPrice: null,
        size: "280ml"
    },
    {
        name: "9 Tails",
        img: "/assets/images/fashion-2/img-77.jpg",
        link: "card-product-detail-1.html",
        price: 97,
        oldPrice: null,
        size: "280ml"
    },
    {
        name: "Men Jeans",
        img: "/assets/images/fashion-2/img-20.jpg",
        link: "card-product-detail-1.html",
        price: 211,
        oldPrice: 280,
        size: "280ml"
    },
    {
        name: "Brioni",
        img: "/assets/images/fashion-2/img-21.jpg",
        link: "card-product-detail-1.html",
        price: 211,
        oldPrice: null,
        size: "280ml"
    },
    {
        name: "Burberry",
        img: "/assets/images/fashion-2/img-22.jpg",
        link: "card-product-detail-1.html",
        price: 211,
        oldPrice: null,
        size: "280ml"
    },
    {
        name: "Carhart",
        img: "/assets/images/fashion-2/img-23.jpg",
        link: "card-product-detail-1.html",
        price: 211,
        oldPrice: null,
        size: "280ml"
    },
    {
        name: "New Generation",
        img: "/assets/images/fashion-2/img-66.jpg",
        link: "card-product-detail-1.html",
        price: 211,
        oldPrice: null,
        size: "280ml"
    },
    {
        name: "Saint Laurent",
        img: "/assets/images/fashion-2/img-67.jpg",
        link: "card-product-detail-1.html",
        price: 211,
        oldPrice: null,
        size: "280ml"
    },
    {
        name: "Valentino",
        img: "/assets/images/fashion-2/img-68.jpg",
        link: "card-product-detail-1.html",
        price: 211,
        oldPrice: null,
        size: "280ml"
    },
    {
        name: "Yjame",
        img: "/assets/images/fashion-2/img-69.jpg",
        link: "card-product-detail-1.html",
        price: 211,
        oldPrice: null,
        size: "280ml"
    },
    {
        name: "T-Shirt",
        img: "/assets/images/products/p-3.jpg",
        link: "card-product-detail-1.html",
        price: 99,
        oldPrice: 120,
        size: "280ml"
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
        <div className="w-full md:w-[75%] mt-4">
            {/* Search Bar */}
            <SearchBar />

            {/* Sort By */}
            <SortBy />

            {/* Products */}
            <Products />
        </div>
    );
}

const SearchBar = () => {
    return (
        <div className="flex row mb-3">
            <div className="relative w-full mb-3 mt-2">
                <input
                    type="search"
                    className="w-full pl-8 pr-2 py-1.5 text-sm rounded-md focus:outline-none ring-1 ring-accent-100 focus:ring-primary-500 placeholder:text-accent-300"
                    onChange={() => { }}
                    placeholder="Search brands"
                />
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent-500">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

const SortBy = () => {
    return (
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center md:justify-end mb-5">
            <div className="flex items-center justify-between gap-2">
                <div className="w-">
                    <select className="w-full px-3 py-2 text-sm rounded focus:outline-none ring-1 ring-accent-100 placeholder:text-accent-300">
                        <option value="1">Default sorting</option>
                        <option value="2">Price: Low to High</option>
                        <option value="3">Price: High to Low</option>
                        <option value="4">Product: Old First</option>
                        <option value="5">Product: New First</option>
                        <option value="6">Popularity: Most Popular First</option>
                        <option value="7">Popularity: Less Popular First</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

const Products = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </div>
    )
}
