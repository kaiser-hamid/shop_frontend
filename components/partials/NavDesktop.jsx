import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function NavDesktop() {
    return (
        <div className="hidden xl:flex items-center justify-between py-2">

            {/* Logo */}
            <div className="flex-grow mx-auto">
                <Link href="/" className="flex justify-center items-center h-12">
                    <Image height={100} width={138} alt="logo" src="/assets/images/logo/logo.jpg" className="h-12 overflow-hidden" />
                </Link>
            </div>

            {/* Search */}
            <div className="dropdown hidden xl:inline-block" style={{ position: "relative" }}>
                <div>
                    <form className="px-6 py-[2px] rounded-full bg-[#e9e9e9]">
                        <div className="relative w-[140px]">
                            <input
                                type="text"
                                className="bg-transparent ps-3 text-xs text-black focus:text-black placeholder:text-gray-600 focus:border-transparent focus:outline-0"
                                placeholder="Search for anything"
                            />
                            <span className="absolute text-sm inline-block text-[#808080] top-1/2 -translate-y-1/2 -start-3 transform rotate-90">
                                <MagnifyingGlassIcon className="w-4 h-4" />
                            </span>
                        </div>
                    </form>
                </div>
                <div className="px-4 lg:px-9 2xl:px-[160px] dropdown-menu w-full inset-x-0 top-[60px] bg-white absolute text-gray-700 shadow-xl z-50">
                    <div className="2xl:w-[1570px] mx-auto">
                        {/* Mobile search bar */}
                        <div className="xl:hidden fixed top-0 w-[90%] md:w-[400px] z-50 bg-white">
                            <p className="bg-[#f9f9f9] py-2 px-5 text-base font-body font-bold uppercase">My search</p>
                            <form className="px-5 py-6 ">
                                <div className="flex justify-between border-gray-200">
                                    <div className="border-b flex-grow">
                                        <input
                                            type="text"
                                            className=" text-black bg-white pb-1.5 placeholder:text-[#808080] focus:border-transparent placeholder:font-body focus:outline-0"
                                            placeholder="Search for anything"
                                        />
                                    </div>
                                    <span className="w-7 transform rotate-[270deg] fill-green-400">I</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
