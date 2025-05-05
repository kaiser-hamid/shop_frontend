import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Product({ product }) {
    return (
        <div className="flex flex-col h-[480px] w-full max-w-[400px] shadow-sm transition-all duration-300 rounded-xl border border-zinc-100">
            {/* Image Section */}
            <div className="relative flex-1 relative overflow-hidden rounded-t-xl">
                <Link href="/product/slug" className="block w-full h-full">
                    <Image
                        src={product.img}
                        alt={product.name}
                        layout="fill"
                        className="w-full h-full object-cover transition-all duration-500 hover:scale-[1.2]"
                    />
                </Link>
                <span className="absolute top-0 left-0 bg-primary-500 text-white flex items-center justify-center rounded-br-xl text-sm px-3 py-1">
                    {Math.floor(Math.random() * (80 - 10 + 1)) + 10}% OFF
                </span>
            </div>
            {/* Details Section */}
            <div className="flex-1 flex flex-col justify-between p-4 lg:p-8 text-center">
                <div>
                    <a href={product.link} className="text-base font-bold uppercase block h-[48px] overflow-hidden text-ellipsis line-clamp-2">
                        {product.name}
                    </a>
                    <div className="flex justify-center py-2">
                        <p className="text-base text-white bg-primary-500 px-4 uppercase rounded-xl">Sale</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1">
                        {product.oldPrice && (
                            <span className="text-base font-normal text-zinc-400">
                                <s>৳{product.oldPrice}.00</s>
                            </span>
                        )}
                        <span className="font-bold text-slate-800"><span className="text-lg">৳</span>&nbsp;{product.price}.00</span>
                    </div>
                    <div>
                        <div className="flex items-center justify-center gap-1 mt-2">
                            {[...Array(5)].map((_, i) => {
                                const isFilled = i < 4;
                                return (
                                    <StarIcon
                                        key={i}
                                        className={`w-4 h-4 ${isFilled ? 'fill-yellow-400' : ''} text-yellow-400`}
                                    />
                                );
                            })}
                        </div>
                        <p className="text-sm text-zinc-500 font-medium mt-1">200ml</p>
                    </div>
                </div>
                <div>

                    <a
                        href={product.link}
                        className="w-full py-2 px-8 mt-3 inline-block rounded-full text-center text-15 font-bold border-2 border-zinc-950 text-zinc-950 bg-transparent hover:text-white hover:bg-zinc-950 transition-all duration-150"
                    >
                        Add To Bag
                    </a>
                </div>
            </div>
        </div>
    )
}
