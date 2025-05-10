import Image from "next/image";
import Link from "next/link";

export default function OfferBanner() {
    return (
        <div className="container">
            <div>
                <Link href="/vaseline-offers">
                    <Image src="/assets/images/featured/vaseline-prime.webp" alt="Vaseline Offer" width={1920} height={200} />
                </Link>
            </div>
        </div>
    )
}