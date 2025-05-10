"use client"

import HeaderStart from "../partials/HeaderStart";
import HeaderTop from "../partials/HeaderTop";
import NavResponsive from "../partials/NavResponsive";
import NavDesktop from "../partials/NavDesktop";
import NavMenus from "../partials/NavMenus";
import Link from "next/link";
import { MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import RoundedButton from "../ui/buttons/RoundedButton";
export default function Header() {
    return (
        <div className="fixed w-full top-0 z-10 bg-white nav-box">
            <nav className="container z-30">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center relative py-2">
                    {/* for mobile | hidden on desktop */}

                    {/* Logo & brands */}
                    <div className="flex lg:justify-between items-center py-3 lg:py-0">
                        <div className="flex items-center mx-auto w-1/3 lg:w-full">
                            {/* Hidden on desktop */}

                            {/* Logo */}
                            <Link href="/" className="flex">
                                {/* <img src="/assets/images/logo/logo.png" alt="logo" className="w-24" /> */}
                                <span className="text-xl lg:text-[32px] font-bold uppercase tracking-wider">Shajgoj</span>
                            </Link>

                            {/* brand */}
                            <div className="lg:flex items-center hidden">
                                <div className="flex flex-col mt-2 lg:flex-row lg:mt-0 lg:mx-1">
                                    {/* Brand dropdown */}
                                    <p className="px-4">
                                        <span className="my-1 text-sm font-semibold uppercase leading-5 md:mx-4 md:my-0">Brands</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Search section */}
                    <div className="flex items-center border-2 mb-3 md:mb-0 border-primary-500 text-gray-700 bg-zinc-100 rounded-3xl placeholder-gray-500 w-full lg:w-1/3 relative">
                        <MagnifyingGlassIcon className="w-6 h-6 ml-3" />
                        <input
                            type="text"
                            className="w-full px-2 py-2 leading-tight text-sm focus:outline-none bg-zinc-100 rounded-3x placeholder:text-slate-400 placeholder:font-medium rounded-r-3xl"
                            placeholder="Search for products, brands..."
                        />
                    </div>

                    {/* cart section */}
                    <div className="lg:flex items-center hidden">
                        <div className="flex items-center gap-x-4 -mx-1 md:mx-0 text-xs">
                            <RoundedButton onClick={() => { }} className="bg-gray-800 text-white uppercase">Wishlist</RoundedButton>
                            <RoundedButton onClick={() => { }} className="bg-slate-200 text-gray-800 uppercase">Login</RoundedButton>
                            <RoundedButton onClick={() => { }} className="flex justify-center gap-x-2 bg-primary-500 text-white uppercase">
                                <ShoppingBagIcon className="w-4 h-4" />
                                <span>Bag</span>
                                <span className="flex items-center justify-center text-xs h-5 w-5 rounded-full bg-white text-primary-500">0</span>
                            </RoundedButton>
                        </div>


                    </div>
                </div>

                <hr className="hidden lg:block" />

                <NavMenus />
            </nav>
        </div>
    )
}

/* 
<div className="sticky top-0 z-50 bg-white border-b border-gray-100">
    <HeaderTop />

    <nav className="container relative bg-white">
        <NavResponsive />
        <NavDesktop />
        <NavMenus />
    </nav>
</div>
*/