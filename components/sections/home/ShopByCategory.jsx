import Image from 'next/image';
import Link from 'next/link';

export default function ShopByCategory() {
    return (
        <div className="container mt-10">
            <div>
                <h4 className="text-center font-bold text-xs mb-2">SHOP BEAUTY PRODUCTS BY CATEGORY</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[...Array(8)].map((_, idx) => (
                        <div className="cursor-pointer relative" key={idx}>
                            <Link href="/categories">
                                <Image
                                    alt="banner-image"
                                    src={`/assets/images/featured/top-category-${idx + 1}.webp`}
                                    width={500}
                                    height={500}
                                    style={{ objectFit: 'contain' }}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
