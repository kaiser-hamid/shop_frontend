"use client"

import { InstantSearch } from 'react-instantsearch';
import CategorySidebar from "@/components/sections/category/CategorySidebar";
import CategoryContent from "@/components/sections/category/CategoryContent";
import CategoryBanner from "@/components/sections/banners/CateoryBanner";
import { liteClient as algoliasearch } from 'algoliasearch/lite';

// Initialize Algolia client
const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
);

export default function CategoriesPage() {
    return (
        <InstantSearch
            searchClient={searchClient}
            indexName="products"
        >
            <div className="">
                {/* Banner  */}
                <CategoryBanner />
                <div className="container pb-8">

                    <div className="flex flex-col md:flex-row md:space-x-4">

                        {/* Category Sidebar */}
                        <CategorySidebar />

                        {/* Category Content */}
                        <CategoryContent />
                    </div>
                </div>
            </div>
        </InstantSearch>
    );
}
