// ... existing code ...
import {
    ChatBubbleLeftEllipsisIcon,
    PhoneIcon,
    BuildingStorefrontIcon,
    DevicePhoneMobileIcon,
    PlusIcon,
    MinusIcon,
} from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white px-4 xl:px-9 2xl:px-20 mb-14 lg:mb-0">
            <div className="xl:max-w-[1370px] mx-auto">
                <div className="py-10 overflow-hidden overflow-x-auto">
                    <div className="flex flex-nowrap items-center lg:justify-between gap-10">
                        <div className="flex items-center whitespace-nowrap gap-3">
                            <div className="flex-shrink">
                                <ChatBubbleLeftEllipsisIcon className="h-8 w-8 text-white" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-base font-bold text-white">Live Chat with Us</h3>
                                <p className="text-white text-sm">Fusce venenatis varius consectetur.</p>
                            </div>
                        </div>
                        <div className="flex items-center whitespace-nowrap gap-3">
                            <div className="flex-shrink text-white">
                                <PhoneIcon className="h-8 w-8 text-white" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-base font-bold text-white">Call Us for Everything</h3>
                                <p className="text-white text-sm">(018) 900-6690 or 900-6691</p>
                            </div>
                        </div>
                        <div className="flex items-center whitespace-nowrap gap-3">
                            <div className="flex-shrink">
                                <BuildingStorefrontIcon className="h-8 w-8 text-white" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-base font-bold text-white">View Store locations</h3>
                                <p className="text-white text-sm">Fusce venenatis varius consectetur.</p>
                            </div>
                        </div>
                        <div className="flex items-center whitespace-nowrap gap-3">
                            <div className="flex-shrink">
                                <DevicePhoneMobileIcon className="h-8 w-8 text-white" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-base font-bold text-white">Download HALO App</h3>
                                <p className="text-white text-sm">Fusce venenatis varius consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-zinc-700" />
                <div className="grid xl:grid-cols-4 gap-6 py-10">
                    <div className="xl:col-span-3">
                        <div className="hidden md:block">
                            <div className="grid grid-cols-3 gap-6">
                                {/* Shop */}
                                <div>
                                    <h5 className="text-15 font-semibold uppercase text-white">Shop</h5>
                                    <ul className="mt-5">
                                        <li><a href="#" className="footer-link">New in</a></li>
                                        <li><a href="#" className="footer-link">Woman</a></li>
                                        <li><a href="header-men.html" className="footer-link">Men</a></li>
                                        <li><a href="#" className="footer-link">Shoes</a></li>
                                        <li><a href="bag.html" className="footer-link">Bags &amp; Accessories</a></li>
                                        <li><a href="brands.html" className="footer-link">Top Brands</a></li>
                                    </ul>
                                </div>
                                {/* Information */}
                                <div>
                                    <h5 className="text-15 font-semibold uppercase text-white">Information</h5>
                                    <ul className="mt-5">
                                        <li><a href="about-01.html" className="footer-link">About</a></li>
                                        <li><a href="#" className="footer-link">Customer Service</a></li>
                                        <li><a href="#" className="footer-link">Reward Program</a></li>
                                        <li><a href="#" className="footer-link">Shipping &amp; Returns</a></li>
                                        <li><a href="faqs-1.html" className="footer-link">Privacy Policy</a></li>
                                        <li><a href="#" className="footer-link">Terms &amp; Conditions</a></li>
                                        <li><a href="blog-01.html" className="footer-link">Blog</a></li>
                                    </ul>
                                </div>
                                {/* Customer Service */}
                                <div>
                                    <h5 className="text-15 font-semibold uppercase text-white">Customer Service</h5>
                                    <ul className="mt-5">
                                        <li><a href="#" className="footer-link">Search Terms</a></li>
                                        <li><a href="#" className="footer-link">Advanced Search</a></li>
                                        <li><a href="#" className="footer-link">Orders &amp; Returns</a></li>
                                        <li><a href="#" className="footer-link">Contact Us</a></li>
                                        <li><a href="#" className="footer-link">Theme FAQs</a></li>
                                        <li><a href="#" className="footer-link">Consultant</a></li>
                                        <li><a href="#" className="footer-link">Store Locations</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* FAQ for mobile: just static, no Alpine.js */}
                        <div className="md:hidden">
                            <ul className="shadow-box">
                                <li className="relative border-b border-gray-200 mb-5">
                                    <button type="button" className="w-full py-4 text-left flex justify-between">
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold uppercase text-15">Shop</span>
                                            <PlusIcon className="w-4 h-4 stroke-2 plus-icon" />
                                        </div>
                                    </button>
                                    {/* Just show the list, no collapse/expand */}
                                    <div className="relative overflow-hidden transition-all max-h-0 duration-700">
                                        <ul className="mt-3 space-y-1.5">
                                            <li><a href="#" className="footer-link-mobile">New in</a></li>
                                            <li><a href="#" className="footer-link-mobile">Woman</a></li>
                                            <li><a href="#" className="footer-link-mobile">Men</a></li>
                                            <li><a href="#" className="footer-link-mobile">Shoes</a></li>
                                            <li><a href="#" className="footer-link-mobile">Bags & Accessories</a></li>
                                            <li><a href="#" className="footer-link-mobile">Top Brands</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="relative border-b border-gray-200 mb-5">
                                    <button type="button" className="w-full py-4 text-left flex justify-between">
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold uppercase text-17">Information</span>
                                            <PlusIcon className="w-4 h-4 stroke-2 plus-icon" />
                                        </div>
                                    </button>
                                    <div className="relative overflow-hidden transition-all max-h-0 duration-700">
                                        <ul className="mt-3 space-y-1.5">
                                            <li><a href="#" className="footer-link-mobile">About</a></li>
                                            <li><a href="#" className="footer-link-mobile">Customer Service</a></li>
                                            <li><a href="#" className="footer-link-mobile">Reward Program</a></li>
                                            <li><a href="#" className="footer-link-mobile">Shipping & Returns</a></li>
                                            <li><a href="#" className="footer-link-mobile">Privacy Policy</a></li>
                                            <li><a href="#" className="footer-link-mobile">Terms & Conditions</a></li>
                                            <li><a href="#" className="footer-link-mobile">Blog</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="relative border-b border-gray-200 mb-5">
                                    <button type="button" className="w-full py-4 text-left flex justify-between">
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold uppercase text-17">Customer Service</span>
                                            <PlusIcon className="w-4 h-4 stroke-2 plus-icon" />
                                        </div>
                                    </button>
                                    <div className="relative overflow-hidden transition-all max-h-0 duration-700">
                                        <ul className="mt-3 space-y-1.5">
                                            <li><a href="#" className="footer-link-mobile">Search Terms</a></li>
                                            <li><a href="#" className="footer-link-mobile">Advanced Search</a></li>
                                            <li><a href="#" className="footer-link-mobile">Orders & Returns</a></li>
                                            <li><a href="#" className="footer-link-mobile">Contact Us</a></li>
                                            <li><a href="#" className="footer-link-mobile">Theme FAQs</a></li>
                                            <li><a href="#" className="footer-link-mobile">Consultant</a></li>
                                            <li><a href="#" className="footer-link-mobile">Store Locations</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Social and Newsletter */}
                    <div className="xl:col-span-1 grid grid-cols-2">
                        <div className="col-span-2 md:col-span-1 xl:col-span-2">
                            <h2 className="text-base font-bold uppercase text-white">stay connected</h2>
                            <div className="flex items-center gap-5 mt-6">
                                <a href="#" className="text-white hover:text-[#3a8551]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="md:w-8 md:h-8 w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-white hover:text-[#3a8551]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="md:w-8 md:h-8 w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-white hover:text-[#3a8551]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="md:w-8 md:h-8 w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a href="#" className="bg-white text-black hover:text-[#3a8551] rounded flex justify-center items-center w-5 h-5 md:w-7 md:h-7 p-1 transition-all duration-300 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full" viewBox="0 0 24 24">
                                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-white hover:text-[#3a8551]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="md:w-8 md:h-8 w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-white hover:text-[#3a8551]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="md:w-8 md:h-8 w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="border-zinc-700" />
                <div className="flex flex-col lg:flex-row items-center justify-between py-9 gap-4">
                    <div className="text-center">
                        <small className="font-normal text-white">
                            © {new Date().getFullYear()} | <span>All rights reserved.</span>
                        </small>
                    </div>
                    {/* Payment methods: You can keep SVGs or use images/icons as needed */}
                    <div className="flex flex-wrap items-center justify-center gap-5">
                        {/* ...payment method SVGs here... */}
                    </div>
                </div>
            </div>

        </footer>
    );
}