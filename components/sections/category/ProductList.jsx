"use client";

import { useInfiniteHits } from 'react-instantsearch';
import Product from "@/components/cards/Product";
import { useEffect, useRef } from 'react';

export default function ProductList() {
    return <InfiniteHitsWithScroll />;
}

function InfiniteHitsWithScroll() {
    const { hits, isLastPage, showMore } = useInfiniteHits();
    const observerTarget = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isLastPage) {
                    showMore();
                }
            },
            { threshold: 0.1 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => observer.disconnect();
    }, [isLastPage, showMore]);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {hits.map((hit) => (
                    <Product key={hit.objectID} hit={hit} />
                ))}
            </div>
            <div ref={observerTarget} className="h-10" />
        </div>
    );
}