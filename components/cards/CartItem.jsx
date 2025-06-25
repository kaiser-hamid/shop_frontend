import useCartStore from "@/store/cart-store";
import Image from "next/image";

export default function CartItem({ data }) {
    const setItemQuantitySpinner = useCartStore((state) => state.setItemQuantitySpinner);
    const setRemoveItemFromCart = useCartStore((state) => state.setRemoveItemFromCart);

    const { slug, image, name, quantity, unit_price, available_stock } = data;
    const imageUrl = image ? image : '/assets/images/placeholder/product.png';

    const itemPrice = (unit_price * quantity).toFixed(2);

    const handleQuantity = (action) => {
        if (action === 'decrement') {
            if (quantity > 1) {
                setItemQuantitySpinner({ slug, quantity: 1, operation: 'dec' });
            } else {
                //TODO:alert user to remove item
            }
        }
        if (action === 'increment') {
            if (quantity < available_stock) {
                setItemQuantitySpinner({ slug, quantity: 1, operation: 'inc' });
            } else {
                //TODO:alert user to remove item
            }
        }
    }

    const handleRemoveItem = () => {
        setRemoveItemFromCart({ slug });
    }

    return (
        <div>
            <div className="p-3 bg-white mx-2 mt-2 mb-1 rounded-tl-lg rounded-tr-lg">
                <div className="flex">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[70px] h-[70px] rounded-sm overflow-hidden bg-red-400">
                            <Image src={imageUrl} alt="Product Image" width={100} height={100} className="w-full h-full object-cover object-center" />
                        </div>
                    </div>
                    <div className="px-3 text-sm flex flex-col justify-center">
                        <a className="text-xs cursor-pointer hover:text-rr-pink" href={`/product/${slug}`}>{name}</a>
                        <p className="text-gray-600 mt-1 text-xs">৳ {unit_price}</p>
                    </div>
                    <div className="flex flex-col justify-between ml-auto">
                        <button type="button" onClick={handleRemoveItem} className="group outline-none">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="ml-auto text-rr-pink cursor-pointer group-hover:text-primary-500" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
                            </svg>
                        </button>
                        <div className="w-16 h-6">
                            <div className="flex flex-row w-full h-full rounded-lg relative bg-transparent text-sm">
                                <button type="button" onClick={handleQuantity.bind(this, 'decrement')} className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300/70 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span className="m-auto font-bold">−</span>
                                </button>
                                <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold hover:text-black focus:text-black lg:text-basecursor-default flex items-center text-gray-700" readOnly value={quantity} />
                                <button type="button" onClick={handleQuantity.bind(this, 'increment')} className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300/70 h-full w-20 rounded-r cursor-pointer">
                                    <span className="m-auto font-bold">+</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-3 py-1 mx-2 mb-2 bg-white rounded-bl-lg rounded-br-lg text-right text-sm">৳ {itemPrice}</div>
        </div>
    )
}