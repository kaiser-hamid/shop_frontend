"use client"

import { useState } from "react";
import PriceFilter from "./PriceFilter";

// Brand data outside the component
const BRAND_LABELS = [
    "9 Aloha (1)",
    "Aphrodite Made (1)",
    "Apple (1)",
    "Armour (1)",
    "Ashley HomeStore (1)",
    "Athena Care (3)",
    "MenShort (1)",
    "New Generation (3)",
    "Saint Laurent (1)",
    "SportK (2)",
    "T-Shirt (2)",
    "Valentino (1)",
    "Yjame (1)",
];

export default function CategorySidebar() {
    // State for open/close of each filter section
    const [open, setOpen] = useState({
        categories: false,
        brand: false,
        price: false,
        availability: false,
        productType: false,
    });

    // Example for brand checkboxes
    const [checkedBrands, setCheckedBrands] = useState({});
    const handleBrandToggle = (brand) => {
        setCheckedBrands((prev) => ({
            ...prev,
            [brand]: !prev[brand],
        }));
    };

    // State for brand search
    const [brandSearch, setBrandSearch] = useState("");

    // Filtered brands based on search
    const filteredBrands = BRAND_LABELS.filter((brand) =>
        brand.toLowerCase().includes(brandSearch.toLowerCase())
    );

    // Example hardcoded categories (nested)
    const categories = [
        {
            label: "Free Delivery ⚡",
            count: 365,
            url: "#",
        },
        {
            label: "Top Selling ⚡",
            count: 3208,
            url: "#",
        },
        {
            label: "Personal care",
            count: 6139,
            url: "#",
        },
        {
            label: "Makeup",
            count: 1809,
            url: "#",
            children: [
                {
                    label: "Face",
                    count: 1809,
                    url: "#",
                    children: [
                        { label: "BB & CC cream", count: 88, url: "#" },
                        { label: "Blush", count: 185, url: "#" },
                        { label: "Bronzer", count: 30, url: "#" },
                        { label: "Compact & Pressed Powder", count: 290, url: "#" },
                        { label: "Concealer", count: 207, url: "#" },
                        { label: "Contour", count: 57, url: "#" },
                        { label: "Face Pallete", count: 26, url: "#" },
                        { label: "Face Primer", count: 97, url: "#" },
                        { label: "Foundation", count: 418, url: "#" },
                        { label: "Highlighters", count: 139, url: "#" },
                        { label: "Loose Powder", count: 76, url: "#" },
                        { label: "Makeup Remover", count: 237, url: "#" },
                        { label: "Setting Spray", count: 52, url: "#" },
                        { label: "Tinted Moisturizer", count: 10, url: "#" },
                    ],
                },
                { label: "Eyes", count: 131, url: "#" },
                { label: "Lips", count: 24, url: "#" },
            ],
        },
        // ... add more categories as needed
    ];

    // Recursive category render
    const renderCategories = (cats) => (
        <ul className="ais-HierarchicalMenu-list">
            {cats.map((cat, idx) => (
                <li key={cat.label + idx} className="ais-HierarchicalMenu-item">
                    <a className="ais-HierarchicalMenu-link" href={cat.url}>
                        <span className="ais-HierarchicalMenu-label">{cat.label}</span>
                        <span className="ais-HierarchicalMenu-count ml-1">{cat.count}</span>
                    </a>
                    {cat.children && renderCategories(cat.children)}
                </li>
            ))}
        </ul>
    );

    return (
        <div className="grow filter-toggle-hide">
            <div className="flex-none p-6 md:pr-4 w-80 md:w-full max-w-xs h-screen md:h-auto bg-white transition-all duration-500 ease-in-out transform overflow-y-auto flex flex-col text-black ml-auto md:ml-0 custom-scroll">
                <h2 className="my-5 pb-2 font-medium border-b">Filter by Price</h2>
                <PriceFilter />

                <h2 className="mt-10 mb-5 pb-2 font-medium border-b">Product Categories</h2>
                <CategoryFilter />

                <h2 className="mt-10 mb-5 pb-2 font-medium border-b">Filter by Brand</h2>
                <BrandFilter />
            </div>
        </div>
    )
}

const CategoryFilter = () => {
    const categories = [
        {
            name: "Free Delivery ⚡",
            count: 365,
        },
        {
            name: "Flash Sale 🔥",
            count: 892,
        },
        {
            name: "Top Selling ⚡",
            count: 3208,
        },
        {
            name: "New Arrivals",
            count: 1245,
        },
        {
            name: "Trending Now",
            count: 2156,
        },
        {
            name: "Clearance Sale",
            count: 756,
        },
        {
            name: "Premium Products",
            count: 445,
        },
        {
            name: "Limited Edition",
            count: 234,
        },
        {
            name: "Best Deals",
            count: 1876,
        },
        {
            name: "Featured Items",
            count: 987,
        },
        {
            name: "Special Offers",
            count: 654,
        },
        {
            name: "Season's Must-Have",
            count: 543,
        }
    ]
    return (
        <div>
            <ul className="space-y-2">
                {categories.map((category, idx) => (
                    <li key={category.id || idx} className="flex items-center justify-between text-slate-600 hover:text-primary-500 cursor-pointer">
                        <span className="text-[0.9rem]">{category.name}</span>
                        <span className="text-[0.8rem] text-accent-500 py-0.5 px-2.5 bg-secondary-100 rounded-full">{category.count}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const BrandFilter = () => {
    const brands = [
        {
            name: "MAC Cosmetics",
            count: 1245,
        },
        {
            name: "L'Oreal Paris",
            count: 2156,
        },
        {
            name: "Maybelline",
            count: 756,
        },
        {
            name: "Estée Lauder",
            count: 445,
        },
        {
            name: "NARS",
            count: 234,
        },
        {
            name: "Fenty Beauty",
            count: 1876,
        },
        {
            name: "Charlotte Tilbury",
            count: 987,
        },
        {
            name: "Urban Decay",
            count: 654,
        },
        {
            name: "Too Faced",
            count: 543,
        }
    ];

    const [search, setSearch] = useState("");
    const [checked, setChecked] = useState({});

    const filteredBrands = brands.filter(brand =>
        brand.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleToggle = (name) => {
        setChecked(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    return (
        <div>
            <div className="relative mb-3 mt-2">
                <input
                    type="search"
                    className="w-full pl-8 pr-2 py-1.5 text-sm rounded-md focus:outline-none ring-1 ring-accent-100 focus:ring-primary-500 placeholder:text-accent-300"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search brands"
                />
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent-500">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <ul className="space-y-2 max-h-48 overflow-y-auto">
                {filteredBrands.map((brand, idx) => (
                    <li key={brand.id || idx} className={`flex items-center justify-between ${idx === 3 ? 'text-primary-500' : 'text-slate-600'} hover:text-primary-500 cursor-pointer`}>
                        <label className="flex items-center w-full">
                            <input
                                type="checkbox"
                                className="mr-2 accent-primary-500 appearance-none h-4 w-4 rounded border border-accent-200 bg-white checked:bg-primary-500 checked:border-0"
                                onChange={() => handleToggle(brand.name)}
                                defaultChecked={idx === 3}
                            />
                            <span className="text-[0.9rem] flex-1">{brand.name}</span>
                            <span className="text-[0.8rem] text-accent-500 py-0.5 px-2.5 bg-secondary-100 rounded-full">{brand.count}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}


