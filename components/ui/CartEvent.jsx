
"use client";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux';
import { toggleCartAction } from '../../store/cartSlice';

export default function CartEvent() {
    const dispatch = useDispatch();
    return (
        <button type='button' onClick={() => dispatch(toggleCartAction())} className="fixed top-1/2 right-0 -translate-y-1/2 z-50 flex flex-col items-center shadow-lg rounded-l-lg overflow-hidden select-none">
            <div className="bg-black px-2 lg:px-4 py-2 flex flex-col items-center w-16 lg:w-20">
                <ShoppingBagIcon className="h-5 w-5 lg:h-7 lg:w-7 text-white mb-1" />
                <p className="flex flex-col lg:flex-row items-center lg:gap-1 text-xs lg:text-sm text-white tracking-wide">
                    <span>0</span>
                    <span>Items</span>
                </p>
            </div>
            <div className="bg-primary-500 px-0.5 lg:px-1 py-1 w-16 lg:w-20 flex items-center justify-center">
                <span className="text-white font-semibold text-sm lg:text-lg">৳ 0</span>
            </div>
        </button>
    )
}

