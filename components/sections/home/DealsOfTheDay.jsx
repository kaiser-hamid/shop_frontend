import Link from "next/link";
import Image from "next/image";
export default function DealsOfTheDay() {
    return (
        <div className="container mt-10">
            <div>
                <h4 className="text-center font-bold text-xs mb-2">DEALS YOU CANNOT MISS</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div>
                        <Link href="/categories">
                            <Image src="/assets/images/featured/deal-1.webp" className="w-full h-auto" alt="Vaseline Offer" width={1080} height={1080} />
                        </Link>
                    </div>
                    <div>
                        <Link href="/categories">
                            <Image src="/assets/images/featured/deal-2.webp" className="w-full h-auto" alt="Vaseline Offer" width={1080} height={1080} />
                        </Link>
                    </div>
                    <div>
                        <Link href="/categories">
                            <Image src="/assets/images/featured/deal-3.webp" className="w-full h-auto" alt="Vaseline Offer" width={1080} height={1080} />
                        </Link>
                    </div>
                    <div>
                        <Link href="/categories">
                            <Image src="/assets/images/featured/deal-4.webp" className="w-full h-auto" alt="Vaseline Offer" width={1080} height={1080} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
