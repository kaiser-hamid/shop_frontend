"use client"

import PriceFilter from "./PriceFilter";
import CategoriesFilter from "./CategoriesFilter";
import BrandsFilter from "./BrandsFilter";

export default function CategorySidebar() {

    return (
        <div className="grow filter-toggle-hide">
            <div className="flex-none p-6 md:pr-4 w-80 md:w-full max-w-xs h-screen md:h-auto bg-white transition-all duration-500 ease-in-out transform overflow-y-auto flex flex-col text-black ml-auto md:ml-0 custom-scroll">
                <h2 className="my-5 pb-2 font-medium border-b">Filter by Price</h2>
                <PriceFilter />

                <h2 className="mt-10 mb-5 pb-2 font-medium border-b">Product Categories</h2>
                <CategoriesFilter />

                <h2 className="mt-10 mb-5 pb-2 font-medium border-b">Filter by Brand</h2>
                <BrandsFilter />
            </div>
        </div>
    )
}


