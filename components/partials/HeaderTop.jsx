import { HeartIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import Cart from "../modals/Cart";
import Login from "../modals/Login";

export default function HeaderTop() {
    return (
        <div className="hidden xl:block bg-black px-6">
            <div className="px-4 lg:px-9 xl:max-w-[1370px] xl:px-0 mx-auto">
                <div className="flex justify-between py-2.5">
                    <div className="flex items-center">
                        <div><img src="assets/images/logo/l-athena.png" alt="" /></div>
                        <div className="border-x border-gray-300 px-4 xl:px-5 mx-4 xl:mx-5">
                            <img src="assets/images/logo/l-here.png" alt="" />
                        </div>
                        <div><img src="assets/images/logo/l-aphro.png" alt="" /></div>
                        <a href="" className="px-4 py-[2px] border border-[#5d5d5d] text-white text-13 ml-4">
                            All brands
                        </a>
                    </div>
                    <div>
                        <ul className="flex items-center justify-end gap-3 lg:gap-5 xl:gap-8 z-30">
                            {/* Log in button */}
                            <button type="button">
                                <div className="flex items-center gap-2 group text-white transition-all duration-500">
                                    <UserIcon className="w-6 h-6" />
                                    <span className="text-sm font-normal uppercase">Log in</span>
                                </div>
                            </button>

                            {/*  <Login /> */}

                            {/* Wishlist */}
                            <li className="hidden lg:block">
                                <a href="wish-list-4.html" className="cursor-pointer">
                                    <span className="flex gap-2 group items-center text-white transition-all duration-500">
                                        <HeartIcon className="w-6 h-6" />
                                        <span className="text-sm font-normal uppercase text-white whitespace-nowrap">Wishlist</span>
                                        <span className="w-5 h-5 text-sm font-medium flex justify-center items-center text-white bg-green-400 rounded-full">2</span>
                                    </span>
                                </a>
                            </li>

                            {/* Cart button */}
                            <button type="button">
                                <span className="flex gap-2 group items-center text-white transition-all duration-500">
                                    <ShoppingCartIcon className="w-6 h-6" />
                                    <span className="text-sm font-normal uppercase text-white whitespace-nowrap">cart</span>
                                    <span className="w-5 h-5 text-sm font-medium flex justify-center items-center text-white bg-green-400 rounded-full">0</span>
                                </span>
                            </button>

                            {/* <Cart /> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
