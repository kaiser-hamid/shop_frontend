"use client";

import { SortBy as AlgoliaSortBy } from 'react-instantsearch';

export default function SortBy() {
    return (
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center md:justify-end mb-5">
            <div className="flex items-center justify-between gap-2">
                <div className="w-48">
                    <AlgoliaSortBy
                        items={[
                            { label: 'Default sorting', value: 'products' },
                            { label: 'Price: Low to High', value: 'products_price_asc' },
                            { label: 'Price: High to Low', value: 'products_price_desc' },
                        ]}
                        classNames={{
                            select: 'w-full px-3 py-2 text-sm rounded focus:outline-none ring-1 ring-accent-100 placeholder:text-accent-300'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

/* 
{ label: 'Product: Old First', value: 'products_created_at_asc' },
{ label: 'Product: New First', value: 'products_created_at_desc' },
{ label: 'Popularity: Most Popular First', value: 'products_popularity_desc' },
{ label: 'Popularity: Less Popular First', value: 'products_popularity_asc' }
*/