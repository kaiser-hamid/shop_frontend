"use client";
import { useState, useEffect } from "react";
import ProductSuggestion from "@/components/cards/ProductSuggestion";
import { liteClient as algoliasearch } from 'algoliasearch/lite';

// Initialize Algolia client
const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
);

export default function CustomerAlsoViewedProducts({ currentProduct }) {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecommendations = async () => {
            if (!currentProduct?.id) {
                setLoading(false);
                return;
            }

            try {
                setLoading(true);

                // Strategy for "Customer Also Viewed" - focus on similar products
                // that customers typically browse together
                const filters = [];

                // Primary filter: Same category (most important for "also viewed")
                if (currentProduct.category) {
                    filters.push(`category:${currentProduct.category}`);
                }

                // Secondary filter: Similar price range (customers often compare similarly priced items)
                if (currentProduct.price) {
                    const priceRange = currentProduct.price * 0.6; // 60% range for broader selection
                    const minPrice = Math.max(0, currentProduct.price - priceRange);
                    const maxPrice = currentProduct.price + priceRange;
                    filters.push(`price:${minPrice} TO ${maxPrice}`);
                }

                // Tertiary filter: Same brand (customers often browse within brands)
                if (currentProduct.brand) {
                    // Handle brand as string or object
                    const brandName = typeof currentProduct.brand === 'string'
                        ? currentProduct.brand
                        : currentProduct.brand.name;
                    if (brandName) {
                        filters.push(`brand:${brandName}`);
                    }
                }

                // If we have filters, search for recommendations
                if (filters.length > 0) {
                    const results = await searchClient.search([
                        {
                            indexName: 'products',
                            params: {
                                filters: `${filters.join(' OR ')} AND NOT objectID:${currentProduct.id}`,
                                hitsPerPage: 12,
                                distinct: true,
                            },
                        },
                    ]);

                    const hits = results.results[0].hits || [];

                    // Sort by relevance for "also viewed" context
                    const sortedHits = hits.sort((a, b) => {
                        let scoreA = 0;
                        let scoreB = 0;

                        // Category match gets highest score (customers view similar categories)
                        if (a.category === currentProduct.category) scoreA += 100;
                        if (b.category === currentProduct.category) scoreB += 100;

                        // Price similarity gets high score (customers compare similar prices)
                        if (a.price && currentProduct.price) {
                            const priceDiffA = Math.abs(a.price - currentProduct.price);
                            const priceDiffB = Math.abs(b.price - currentProduct.price);
                            scoreA += Math.max(0, 80 - priceDiffA / 5);
                            scoreB += Math.max(0, 80 - priceDiffB / 5);
                        }

                        // Brand match gets medium score
                        const currentBrand = typeof currentProduct.brand === 'string'
                            ? currentProduct.brand
                            : currentProduct.brand?.name;
                        if (a.brand === currentBrand) scoreA += 50;
                        if (b.brand === currentBrand) scoreB += 50;

                        // Popularity/rating can influence "also viewed"
                        if (a.rating) scoreA += a.rating * 10;
                        if (b.rating) scoreB += b.rating * 10;

                        return scoreB - scoreA;
                    });

                    setRecommendations(sortedHits.slice(0, 8));
                } else {
                    // If no filters available, get random products from same category
                    const results = await searchClient.search([
                        {
                            indexName: 'products',
                            params: {
                                hitsPerPage: 8,
                                distinct: true,
                                filters: `NOT objectID:${currentProduct.id}`,
                            },
                        },
                    ]);

                    setRecommendations(results.results[0].hits || []);
                }
            } catch (error) {
                console.error('Error fetching also viewed recommendations:', error);
                setRecommendations([]);
            } finally {
                setLoading(false);
            }
        };

        fetchRecommendations();
    }, [currentProduct]);

    // Don't render if loading or no recommendations
    if (loading) {
        return (
            <div className="mb-14">
                <h2 className="text-lg font-medium">CUSTOMER ALSO VIEWED</h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-7">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="animate-pulse">
                            <div className="bg-gray-200 h-48 rounded-lg mb-2"></div>
                            <div className="bg-gray-200 h-4 rounded mb-1"></div>
                            <div className="bg-gray-200 h-4 rounded w-2/3"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (recommendations.length === 0) {
        return null;
    }

    return (
        <div className="mb-14">
            <h2 className="text-lg font-medium">CUSTOMER ALSO VIEWED</h2>

            {/* List of products */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-7">
                {recommendations.map((product, index) => (
                    <ProductSuggestion key={`${product.objectID}-${index}`} product={product} />
                ))}
            </div>
        </div>
    );
} 