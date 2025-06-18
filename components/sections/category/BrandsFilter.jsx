import { useState } from "react";
import { useRefinementList } from 'react-instantsearch';

export default function BrandsFilter() {
    // searchable is true to enable search within the refinement list
    const {
        items,
        refine,
        searchForItems,
        canToggleShowMore,
        isShowingMore,
        toggleShowMore
    } = useRefinementList({
        attribute: 'brand',
        operator: 'or',
        searchable: true,
        limit: 20, // Initial number of items
        showMore: true,
        showMoreLimit: 40, // Number of items to show when expanded
    });

    const [searchValue, setSearchValue] = useState("");

    // Handle search input change
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        // Use Algolia's search for items
        searchForItems(value);
    };

    return (
        <div>
            <div className="relative mb-3 mt-2">
                <input
                    type="search"
                    className="w-full pl-8 pr-2 py-1.5 text-sm rounded-md focus:outline-none ring-1 ring-accent-100 focus:ring-primary-500 placeholder:text-accent-300"
                    value={searchValue}
                    onChange={handleSearchChange}
                    placeholder="Search brands"
                />
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent-500">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className="max-h-[380px] overflow-y-auto">
                <ul className="space-y-2">
                    {items.map((item) => (
                        <li
                            key={item.value}
                            className={`flex items-center justify-between ${item.isRefined ? 'text-primary-500' : 'text-slate-600'} hover:text-primary-500 cursor-pointer`}
                        >
                            <label className="flex items-center w-full">
                                <input
                                    type="checkbox"
                                    className="mr-2 accent-primary-500 appearance-none h-4 w-4 rounded border border-accent-200 bg-white checked:bg-primary-500 checked:border-0"
                                    checked={item.isRefined}
                                    onChange={() => refine(item.value)}
                                />
                                <span className="text-[0.9rem] flex-1">{item.label}</span>
                                <span className="text-[0.8rem] text-accent-500 py-0.5 px-2.5 bg-secondary-100 rounded-full">
                                    {item.count}
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            {canToggleShowMore && (
                <div className="pt-4 px-2.5">
                    <button
                        onClick={toggleShowMore}
                        className="text-sm text-rr-black hover:text-primary-500 font-medium"
                    >
                        {isShowingMore ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            )}
        </div>
    );
}