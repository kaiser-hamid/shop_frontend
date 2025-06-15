"use client";

import { SearchBox as AlgoliaSearchBox } from 'react-instantsearch';

export default function SearchBox() {
    return (
        <div className="flex row mb-3">
            <div className="relative w-full mb-3 mt-2">
                <AlgoliaSearchBox
                    classNames={{
                        root: 'w-full',
                        form: 'relative',
                        input: 'w-full pl-8 pr-2 py-1.5 text-sm rounded-md focus:outline-none ring-1 ring-accent-100 focus:ring-primary-500 placeholder:text-accent-300',
                        submit: 'absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none',
                        reset: 'hidden',
                        loadingIndicator: 'hidden'
                    }}
                    placeholder="Search products..."
                />
            </div>
        </div>
    );
}