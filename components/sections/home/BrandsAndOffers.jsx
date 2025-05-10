import Image from 'next/image';
import Link from 'next/link';

export default function BrandsAndOffers() {
    return (
        <div className="container mt-10">
            <div>
                <h4 className="text-center font-bold text-xs mb-2">TOP BRANDS &amp; OFFERS</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Link href="/categories" className="cursor-pointer relative block">
                        <Image
                            alt="banner-image"
                            src="/assets/images/featured/top-brand-1.webp"
                            width={980}
                            height={428}
                            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                            priority
                        />
                    </Link>
                    <Link href="/categories" className="cursor-pointer relative block">
                        <Image
                            alt="banner-image"
                            src="/assets/images/featured/top-brand-2.webp"
                            width={980}
                            height={428}
                            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                            priority
                        />
                    </Link>
                    <Link href="/categories" className="cursor-pointer relative block">
                        <Image
                            alt="banner-image"
                            src="/assets/images/featured/top-brand-3.webp"
                            width={980}
                            height={428}
                            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                            priority
                        />
                    </Link>
                    <Link href="/categories" className="cursor-pointer relative block">
                        <Image
                            alt="banner-image"
                            src="/assets/images/featured/top-brand-4.webp"
                            width={980}
                            height={428}
                            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                            priority
                        />
                    </Link>
                    <Link href="/categories" className="cursor-pointer relative block">
                        <Image
                            alt="banner-image"
                            src="/assets/images/featured/top-brand-5.webp"
                            width={980}
                            height={428}
                            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                            priority
                        />
                    </Link>
                    <Link href="/categories" className="cursor-pointer relative block">
                        <Image
                            alt="banner-image"
                            src="/assets/images/featured/top-brand-6.gif"
                            width={980}
                            height={428}
                            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                            priority
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
