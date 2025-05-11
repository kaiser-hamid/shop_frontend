import Image from "next/image";
import Link from "next/link";

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
                                <ul className="flex gap-x-3 mt-1">
                                    <li>
                                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" /></svg>
                                        </Link>
                                    </li>
                                </ul>
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