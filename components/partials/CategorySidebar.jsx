"use client"

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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

    // Price filter state
    const [priceRange, setPriceRange] = useState([1900, 7000]);
    const handlePriceChange = (range) => setPriceRange(range);
    const handleClearPrice = () => setPriceRange([0, 10000]);

    return (
        <div className="col-span-3 hidden lg:block mt-12">
            <ul className="list-none sticky top-4">
                {/* Price Filter at the top */}
                <li className="relative mb-1.5 border-b border-gray-200 lg:mr-10">
                    <div className="flex gap-2 mb-2">
                        <div className="flex-1 field flex items-center border border-[#c7c7c7] px-2.5 py-2 w-[100px]">
                            <span className="text-sm text-[#808080]">$</span>
                            <input
                                type="number"
                                className="w-full text-[#808080] text-center outline-none bg-transparent"
                                value={priceRange[0]}
                                min={0}
                                max={priceRange[1]}
                                onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
                            />
                        </div>
                        <div className="flex-1 field flex items-center border border-[#c7c7c7] px-2.5 py-2 w-[100px]">
                            <span className="text-sm text-[#808080]">$</span>
                            <input
                                type="number"
                                className="w-full text-[#808080] text-center outline-none bg-transparent"
                                value={priceRange[1]}
                                min={priceRange[0]}
                                max={10000}
                                onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                            />
                        </div>
                        <button
                            className="py-2 px-4 text-sm font-bold text-white bg-zinc-950 hover:bg-primary-500 transition-all duration-300 rounded uppercase"
                            onClick={() => {/* handle apply logic here */ }}
                        >
                            Apply
                        </button>
                    </div>
                    <div className="mt-5 pl-5">
                        <Slider
                            range
                            min={0}
                            max={10000}
                            step={100}
                            value={priceRange}
                            onChange={handlePriceChange}
                            trackStyle={[{ backgroundColor: 'rgb(209, 36, 66)', height: 4 }]}
                            handleStyle={[
                                {
                                    borderColor: '#fff',
                                    backgroundColor: '#fff',
                                    opacity: 1,
                                    height: 20,
                                    width: 20,
                                    marginLeft: -10,
                                    marginTop: -8,
                                    boxShadow: '0 0 0 2px rgb(209, 36, 66)'
                                },
                                {
                                    borderColor: '#fff',
                                    backgroundColor: '#fff',
                                    opacity: 1,
                                    height: 20,
                                    width: 20,
                                    marginLeft: -10,
                                    marginTop: -8,
                                    boxShadow: '0 0 0 2px rgb(209, 36, 66)'
                                }
                            ]}
                            railStyle={{ backgroundColor: '#e5e5e5', height: 4 }}
                        />
                    </div>
                    <button
                        className="mt-2 text-muted hover:text-primary-500 border-b hover:border-primary-500"
                        onClick={handleClearPrice}
                    >
                        Clear
                    </button>
                </li>

                {/* Categories */}
                <li className="relative mb-1.5 border-b border-gray-200 lg:mr-10">
                    <button
                        type="button"
                        className="w-full py-3 text-left flex justify-between"
                        onClick={() =>
                            setOpen((prev) => ({
                                ...prev,
                                categories: !prev.categories,
                            }))
                        }
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-black font-body text-17">Product Categories</span>
                            <span className="ico-plus"></span>
                        </div>
                        <span>
                            {open.categories ? (
                                <MinusIcon className="w-4 h-4 stroke-2" />
                            ) : (
                                <PlusIcon className="w-4 h-4 stroke-2" />
                            )}
                        </span>
                    </button>
                    <div
                        className={`relative overflow-hidden transition-all duration-700 ${open.categories ? "max-h-[1000px]" : "max-h-0"
                            }`}
                    >
                        <ul className="space-y-2 pb-3">
                            {[
                                { href: "fashion_02.html", label: "Home" },
                                { href: "collection-all.html", label: "Shop" },
                                { href: "card-product-detail-1.html", label: "Product" },
                                { href: "blog-01.html", label: "Blog" },
                                { href: "pages.html", label: "Pages" },
                                { href: "fashion_02.html", label: "New In" },
                                { href: "fashion_02.html", label: "Sale" },
                                { href: "fashion_01.html", label: "Buy Theme" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="font-body text-base py-1 hover:underline"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>

                {/* Brand */}
                <li className="relative mb-1.5 lg:mr-10">
                    <button
                        type="button"
                        className="w-full pb-1 text-left flex justify-between"
                        onClick={() =>
                            setOpen((prev) => ({
                                ...prev,
                                brand: !prev.brand,
                            }))
                        }
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-black font-body text-17">Filter By Brand</span>
                            <span className="ico-plus"></span>
                        </div>
                        <span>
                            {open.brand ? (
                                <MinusIcon className="w-4 h-4 stroke-2" />
                            ) : (
                                <PlusIcon className="w-4 h-4 stroke-2" />
                            )}
                        </span>
                    </button>
                    <div
                        className={`relative overflow-hidden transition-all duration-700 ${open.brand ? "max-h-[1000px]" : "max-h-0"
                            }`}
                    >
                        <ul className="space-y-2 max-h-[200px] overflow-y-auto my-5">
                            {BRAND_LABELS.map((brand) => (
                                <li key={brand} className="flex items-center mb-2.5">
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={!!checkedBrands[brand]}
                                            onChange={() => handleBrandToggle(brand)}
                                            className="hidden"
                                        />
                                        <div
                                            className={`relative w-4 h-4 border-[2px] rounded cursor-pointer ${checkedBrands[brand]
                                                ? "bg-[#808080] border-[#808080]"
                                                : "bg-white border-[#808080]"
                                                }`}
                                        ></div>
                                        <span className="ms-2 text-base text-black ml-2">
                                            {brand}
                                        </span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
                {/* Add similar blocks for Price, Availability, Product Type as needed */}
            </ul>
        </div>
    );
}