"use client"

import ProductList from "./ProductList";
import SearchBox from "./SearchBox";
import SortBy from "./SortBy";
import { InstantSearch, useInstantSearch } from 'react-instantsearch';
import { liteClient as algoliasearch } from 'algoliasearch/lite';

// Initialize Algolia client
const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
);



export default function CategoryContent() {
    return (
        <InstantSearch
            searchClient={searchClient}
            indexName="products"
        >
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
        </InstantSearch>
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