'use client';

import { useEffect } from 'react';
import useCartStore from '@/store/cart-store';

export default function OrderStatus({ orderNumber, status }) {

    const setClearCart = useCartStore(state => state.setClearCart);

    useEffect(() => {
        setClearCart();
    }, []);

    return (
        <div className="flex flex-col md:flex-row justify-between items-center mb-1 px-4 pb-5">
            <h2 className="text-md md:text-xl font-bold text-gray-700">
                Order Number :<span className="text-primary-500 ml-4">#{orderNumber}</span>
            </h2>
            <div className="flex items-center gap-4 mb-1">
                <h2 className="text-md md:text-xl font-bold text-gray-700">
                    Status : <span className="text-primary-500 ml-4 uppercase">{status}</span>
                </h2>
            </div>
        </div>
    )
}