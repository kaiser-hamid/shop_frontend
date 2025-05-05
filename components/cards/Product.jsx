export default function Product({ product }) {
    return (
        <div className="inline-block group w-full shadow-sm rounded-sm">
            <a href={product.link} className="relative overflow-hidden block">
                <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-auto transition-all duration-500 scale-100 group-hover:scale-105"
                />
            </a>
            <div className="mt-2 text-center">
                <a href={product.link} className="text-base font-bold uppercase block">
                    {product.name}
                </a>
                <div className="flex items-center justify-center gap-2">
                    {product.oldPrice && (
                        <span className="text-base font-normal text-zinc-900">
                            <s>${product.oldPrice}.00</s>
                        </span>
                    )}
                    <span className="font-black text-zinc-900">${product.price}.00</span>
                </div>
                <a
                    href={product.link}
                    className="py-2 px-8 mt-5 inline-block rounded-full text-center text-15 font-bold border-2 border-zinc-950 text-zinc-950 bg-transparent hover:text-white hover:bg-zinc-950 transition-all duration-500"
                >
                    Add To Bag
                </a>
            </div>
        </div>
    )
}
