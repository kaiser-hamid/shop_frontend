import { useEffect, useState } from "react";


export default function CategoriesFilter() {
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