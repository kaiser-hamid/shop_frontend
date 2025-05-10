"use client";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux';
import { toggleCartAction } from '../../store/cartSlice';

export default function CartEvent() {
    const dispatch = useDispatch();
    return (
        <button
            type="button"
            onClick={() => dispatch(toggleCartAction())}
            className="flex flex-col fixed right-0 top-[40%] border-t border-l border-b border-primary-500 rounded-tl-lg rounded-bl-lg text-white text-[0.6rem] md:text-xs z-20 cursor-pointer min-w-[60px] md:min-w-[70px] mini-cart-btn"
        >
            <div className="bg-rr-black rounded-tl-lg flex flex-col text-center px-1 pt-2 gap-1 pb-1 items-center w-full">
                <ShoppingBagIcon className="w-5 h-5 md:w-7 md:h-7 text-xl md:text-2xl" />
                <div className="flex flex-col md:flex-row text-sm items-center gap-0 md:gap-1">
                    <span>0</span>
                    <span className="text-xs">ITEMS</span>
                </div>
            </div>
            <div className="bg-primary-500 rounded-bl-lg text-center text-sm px-1 py-1 w-full">
                <span>৳ 0</span>
            </div>
        </button>
    )
}

