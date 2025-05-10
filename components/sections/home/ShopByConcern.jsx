import Image from 'next/image';
import Link from 'next/link';

export default function ShopByConcern() {
    const concernCount = 10; // Number of images/concerns
    return (
        <section className="container mt-10">
            <div>
                <h4 className="text-center font-bold text-xs mb-2">SHOP BY CONCERN</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {Array.from({ length: concernCount }).map((_, idx) => (
                        <Link href="/categories" key={idx} className="cursor-pointer relative block">
                            <Image
                                alt="banner-image"
                                src={`/assets/images/featured/shop-concern-${idx + 1}.webp`}
                                width={980}
                                height={428}
                                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
