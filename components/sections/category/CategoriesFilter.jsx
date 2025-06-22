import { useState, useCallback } from "react";
import { useHierarchicalMenu, useRefinementList } from 'react-instantsearch';

const categoryAttributes = [
    'hierarchicalCategories.lvl0',
    'hierarchicalCategories.lvl1',
    'hierarchicalCategories.lvl2'
];

export default function CategoriesFilter() {
    // For hierarchical categories
    const {
        items: hierarchicalItems,
        refine: refineHierarchical,
    } = useHierarchicalMenu({
        attributes: categoryAttributes,
        limit: 999,
        showMore: true,
        showMoreLimit: 1000,
        sortBy: ['name:asc']
    });

    // For flat categories
    const {
        items: flatItems,
        refine: refineFlatCategory,
    } = useRefinementList({
        attribute: 'categories',
        operator: 'and',
        limit: 1000,
        transformItems: useCallback(items =>
            items.filter(item => !item.value.includes(' > ')),
            []
        ),
    });

    console.log('Hierarchical Items:', JSON.stringify(hierarchicalItems, null, 2));

    // Memoize the render function
    const renderHierarchicalCategories = useCallback((items, level = 0) => {
        if (!items || items.length === 0) return null;

        return (
            <ul className={`space-y-2 ${level > 0 ? 'ml-4 mt-2' : ''}`}>
                {items.map((item) => {
                    const isParent = item.data && item.data.length > 0;
                    const isSelected = item.isRefined;

                    return (
                        <li key={item.value}>
                            <div
                                className={`flex items-center justify-between cursor-pointer ${isSelected
                                    ? 'text-primary-500 font-semibold'
                                    : isParent
                                        ? 'text-primary-500 font-semibold'
                                        : 'text-slate-600 hover:text-primary-500'
                                    }`}
                                onClick={() => refineHierarchical(item.value)}
                            >
                                <span className="text-[0.9rem]">
                                    {item.label}
                                </span>
                                <span className="text-[0.8rem] text-accent-500 py-0.5 px-2.5 bg-secondary-100 rounded-full">
                                    {item.count}
                                </span>
                            </div>
                            {/* Always render child items if they exist */}
                            {isParent && (
                                <div className={`${isSelected ? 'block' : 'hidden'}`}>
                                    {renderHierarchicalCategories(item.data, level + 1)}
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    }, [refineHierarchical]);

    if ((!hierarchicalItems || hierarchicalItems.length === 0) &&
        (!flatItems || flatItems.length === 0)) {
        return null;
    }

    return (
        <div>
            {/* Flat categories */}
            <ul className="max-h-[380px] overflow-y-auto space-y-2">
                {flatItems.map((item) => (
                    <li
                        key={item.value}
                        className={`flex items-center justify-between cursor-pointer ${item.isRefined ? 'text-primary-500 font-semibold' : 'text-slate-600 hover:text-primary-500'
                            }`}
                        onClick={() => refineFlatCategory(item.value)}
                    >
                        <span className="text-[0.9rem]">{item.label}</span>
                        <span className="text-[0.8rem] text-accent-500 py-0.5 px-2.5 bg-secondary-100 rounded-full">
                            {item.count}
                        </span>
                    </li>
                ))}
            </ul>

            {/* Hierarchical categories */}
            {hierarchicalItems && hierarchicalItems.length > 0 && (
                <div className="mt-6">
                    {renderHierarchicalCategories(hierarchicalItems)}
                </div>
            )}
        </div>
    );
}