"use client"

import ProductList from "./ProductList";
import SearchBox from "./SearchBox";
import SortBy from "./SortBy";
import { useInstantSearch } from 'react-instantsearch';





export default function CategoryContent() {
    return (

        <div className="w-full md:w-[75%] mt-4">
            {/* Search Bar */}
            <SearchBox />

            {/* Sort By */}
            <SortBy />

            {/* Products */}
            <ProductList />

            {/* No Results */}
            <NoResultsFound />
        </div>
    );
}

// Custom NoResults component
const NoResultsFound = () => {
    const { results } = useInstantSearch();

    if (results?.nbHits === 0) {
        return (
            <div className="text-center mt-40">No results found.</div>
        )
    }

    return null;
};