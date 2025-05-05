import { ShoppingBagIcon } from '@heroicons/react/24/solid'

export default function CartEvent() {
    return (
        <button type='button' className="fixed top-1/2 right-0 -translate-y-1/2 z-50 flex flex-col items-center shadow-lg rounded-l-lg overflow-hidden select-none">
            <div className="bg-black px-4 py-2 flex flex-col items-center w-24">
                <ShoppingBagIcon className="h-7 w-7 text-white mb-1" />
                <span className="text-sm text-white tracking-wide">0 Items</span>
            </div>
            <div className="bg-primary-500 px-1 py-1 w-24 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">৳ 0</span>
            </div>
        </button>
    )
}

