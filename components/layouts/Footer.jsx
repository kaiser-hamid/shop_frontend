import Image from "next/image";
import Link from "next/link";
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
        <footer className="mt-auto">
            <div className="bg-rr-black">
                <div className="container">
                    <div className="flex justify-between flex-col md:flex-row flex-wrap text-white">
                        <div className="py-6 md:py-10">
                            <Link href="/categories">
                                <Image
                                    alt="ruprong-logo"
                                    src="/assets/images/logo/ruprong-footer-logo.png"
                                    width={180}
                                    height={25}
                                />
                            </Link>
                            <div className="pt-4 flex flex-col gap-2 text-sm">
                                <Link href="/categories" className="hover:text-primary-500">OUR STORY</Link>
                                <Link href="/categories" className="hover:text-primary-500">RUPRONG MAGAZINE</Link>
                                <Link href="/categories" className="hover:text-primary-500">RUPRONG OUTLETS</Link>
                                <Link href="/categories" className="hover:text-primary-500">JOIN OUR TEAM</Link>
                                <Link href="/categories" className="hover:text-primary-500">AUTHENTICITY</Link>
                            </div>
                            <hr className="my-2" />
                            <div>
                                <p className="m-0 text-sm">SHARE YOUR LOVE</p>
                                <div className="flex mt-1">
                                    {/* Social icons can be added here as SVG or components */}
                                </div>
                            </div>
                        </div>
                        <div className="py-6 md:py-10">
                            <h5 className="text-primary-500">TOP CATEGORIES</h5>
                            <div className="pt-4 flex flex-col gap-2 text-sm">
                                <Link href="/categories" className="hover:text-primary-500">MAKEUP</Link>
                                <Link href="/categories" className="hover:text-primary-500">SKIN</Link>
                                <Link href="/categories" className="hover:text-primary-500">EYE CARE</Link>
                                <Link href="/categories" className="hover:text-primary-500">HAIR</Link>
                                <Link href="/categories" className="hover:text-primary-500">PERSONAL CARE</Link>
                                <Link href="/categories" className="hover:text-primary-500">NATURAL</Link>
                                <Link href="/categories" className="hover:text-primary-500">MOM & BABY</Link>
                            </div>
                        </div>
                        <div className="py-6 md:py-10">
                            <h5 className="text-primary-500">QUICK LINKS</h5>
                            <div className="pt-4 flex flex-col gap-2 text-sm">
                                <Link href="/categories" className="hover:text-primary-500">OFFERS</Link>
                                <Link href="/categories" className="hover:text-primary-500">MENS PRODUCTS</Link>
                                <Link href="/categories" className="hover:text-primary-500">SKIN CONCERNS</Link>
                                <Link href="/categories" className="hover:text-primary-500">NEW ARRIVAL</Link>
                                <Link href="/categories" className="hover:text-primary-500">MAKEUP</Link>
                            </div>
                        </div>
                        <div className="py-6 md:py-10">
                            <h5 className="text-primary-500">ALL ABOUT BEAUTY</h5>
                            <div className="pt-4 flex flex-col gap-2 text-sm">
                                <Link href="/categories" className="hover:text-primary-500">KNOW YOUR ROUTINE</Link>
                                <Link href="/categories" className="hover:text-primary-500">HAIR CARE 101</Link>
                                <Link href="/categories" className="hover:text-primary-500">SKIN CARE 101</Link>
                                <Link href="/categories" className="hover:text-primary-500">MAKEUP 101</Link>
                            </div>
                        </div>
                        <div className="py-6 md:py-10">
                            <h5 className="text-primary-500">HELP</h5>
                            <div className="pt-4 flex flex-col gap-2 text-sm">
                                <Link href="/categories" className="hover:text-primary-500">CONTACT US</Link>
                                <Link href="/categories" className="hover:text-primary-500">POINTS</Link>
                                <Link href="/categories" className="hover:text-primary-500">FAQS</Link>
                                <Link href="/categories" className="hover:text-primary-500">SHIPPING & DELIVERY</Link>
                                <Link href="/categories" className="hover:text-primary-500">TERMS & CONDITIONS</Link>
                                <Link href="/categories" className="hover:text-primary-500">REFUND & RETURN POLICY</Link>
                                <Link href="/categories" className="hover:text-primary-500">TRADE LICENSE</Link>
                                <Link href="/categories" className="hover:text-primary-500">PRIVACY POLICY</Link>
                            </div>
                            <hr className="my-5 md:my-2" />
                            <div>
                                <p className="m-0 mb-1 text-sm">PAYMENTS ACCEPTED</p>
                                <div className="flex items-center">
                                    <Image
                                        alt="payment-systems"
                                        src="/assets/images/featured/payment-system.webp"
                                        width={160}
                                        height={30}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="pb-7">
                        <div className="flex flex-wrap justify-center text-white text-sm">
                            <Link href="/categories" className="hover:text-primary-500 p-3">AUTHENTICITY</Link>
                            <Link href="/categories" className="hover:text-primary-500 p-3">TERMS & CONDITIONS</Link>
                            <Link href="/categories" className="hover:text-primary-500 p-3">PRIVACY POLICY</Link>
                            <Link href="/categories" className="hover:text-primary-500 p-3">REFUND & RETURN POLICY</Link>
                            <Link href="/categories" className="hover:text-primary-500 p-3">FAQS</Link>
                        </div>
                        <p className="text-white text-center text-sm">Copyright © 2025 Ruprong Limited. All Right Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}