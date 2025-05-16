import Image from 'next/image';

export default function ProductDetails() {
    return (
        <div className="product-detail-col mt-[2rem] p-[0.5rem]">
            <h2 className="text-lg leading-5 font-medium product-id-686247 text-rr-quartz">
                Parachute Naturale Nourishing Care Shampoo with Aloe Vera & Coconut Milk, For Strong & Silky Hair, Smoothens Hair, Paraben Free, 100% Vegan, All Hair Types, 160 ml
            </h2>
            <div className="flex items-center gap-4 my-4">
                <h4 className="text-sm text-gray-500">Size: 160ml</h4>
                <ProductRating />
            </div>
            <ProductPriceLine />

            {/* <div className="flex flex-col mb-4">
                <DownloadAppBanner />
                <SellerInfo />
            </div> */}

            <CartAction />

            <StockStatus />

            <hr className="mb-8 mt-8" />
            <ProductDescription />
        </div>
    );
}

const ProductRating = () => {
    return (
        <div className="flex gap-2 items-center">
            <div className="flex items-center bg-green-700 text-white gap-1 px-2 py-[2px] rounded-full text-sm font-medium">
                4.1
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                </svg>
                | 89 Reviews
            </div>
        </div>
    )
}

const ProductPriceLine = () => {
    return (
        <div className="my-4">
            <div className="flex text-lg space-x-3 ">
                <div className="flex flex-col">
                    <div className="flex items-center gap-4 flex-wrap">
                        <span className="just-price">৳110.00</span>
                        <span className="cut-price">৳140.00</span>
                        <span className="text-green-700 text-base">Save ৳30.00 </span>
                        <div className="flex items-center gap-4">
                            <span className="bg-purple-800 text-white px-3 py-1 rounded-tr-2xl rounded-bl-2xl text-xs">21% OFF</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const DownloadAppBanner = () => {
    return (
        <div className="text-rr-quartz font-medium mb-2 border inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm mt-2 w-fit">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#49454F" height="12" width="12" xmlns="http://www.w3.org/2000/svg" style={{ color: '#49454F' }}>
                <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
            </svg>
            <span>Download App for</span>
            <span className="text-purple-800">
                <a className="underline" href="https://apps.apple.com/us/app/shajgoj/id1473427629" target="_blank" rel="noreferrer">iOS</a> or <a className="underline" href="https://play.google.com/store/apps/details?id=com.shajgoj.shop" target="_blank" rel="noreferrer">Android</a>
            </span>
        </div>
    )
}

const SellerInfo = () => {
    return (
        <div className="border inline-block px-3 py-2 rounded-lg mb-2 w-fit">
            <div className="mb-3 last:mb-0 text-sm">
                <span className="bg-rr-black text-white px-2 py-1 rounded-xl font-medium text-xs">No #1 Best Seller</span>
                <span className="text-rr-quartz px-2"> in </span>
                <a className="text-purple-800 font-medium underline" href="/top-list/parachute-naturale">Parachute Naturale</a>
            </div>
        </div>
    )
}

const CartAction = () => {
    return (
        <div className="flex space-x-3 items-center p-1 mt-4">
            <button title="Add To Wishlist" className="bg-rr-black px-4 h-12 text-white rounded-lg">
                <svg stroke="currentColor" fill="white" strokeWidth="0" viewBox="0 0 16 16" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"></path>
                </svg>
            </button>
            <div className="flex space-x-3">
                <div className="w-24 md:w-32 h-12">
                    <div className="flex flex-row w-full h-full rounded-lg relative bg-transparent border border-1 border-gray-300">
                        <button data-action="decrement" className="text-gray-600 hover:text-primary-500 h-full w-20 rounded-l cursor-pointer outline-none text-2xl font-medium">−</button>
                        <input type="number" className="outline-none focus:outline-none text-center w-full font-semibold text-lg hover:text-black focus:text-black lg:text-base cursor-default flex items-center text-gray-700" name="custom-input-number" readOnly value="1" />
                        <button data-action="increment" className="text-gray-600 hover:text-primary-500 h-full w-20 rounded-r cursor-pointer text-2xl font-medium">+</button>
                    </div>
                </div>
                <button className="bg-primary-500 px-1 h-12 text-white rounded-lg min-w-[140px] md:min-w-[160px] text-sm hover:bg-primary-600 transition-colors duration-300" type="button">ADD TO CART </button>
            </div>
        </div>
    )
}

const StockStatus = () => {
    return (
        <div className="mt-5 flex items-center gap-2">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-primary-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"></path>
            </svg>
            <h4 className="text-sm font-medium ">Only <span className="text-primary-500 font-semibold">1</span> item left in stock</h4>
        </div>
    )
}

const ProductDescription = () => {
    return (
        <div className="mt-6 text-rr-quartz text-sm">
            <div className="flex flex-col md:flex-row mb-5 gap-2 md:gap-0">
                <h4 className="min-w-[160px] font-medium">Brief Description</h4>
                <div>
                    <div className="html-content max-h-24  overflow-hidden ">
                        <ul>
                            <li><strong>Brand:</strong> Parachute Naturale.</li>
                            <li><strong>Product Benefits:</strong> Strong & Silky Hair.</li>
                            <li><strong>Item Form:</strong> Liquid Shampoo.</li>
                            <li><strong>Material Type Free:</strong> Paraben, Silicone Free.</li>
                            <li><strong>Scent:</strong> Coconut.</li>
                            <li><strong>Hair Type:</strong> All Hair Types.</li>
                            <li><strong>Liquid Volume:</strong> 160 ml.</li>
                            <li><strong>Special Feature:</strong> Contains Aloe Vera & Coconut, 100% Vegan.</li>
                        </ul>
                        <p>&nbsp;</p>
                    </div>
                    <button className="text-primary-500 hover:text-purple-800 mt-1">Read More...</button>
                </div>
            </div>
            <div className="flex">
                <h4 className="min-w-[80px] md:min-w-[160px] font-medium">SKU</h4>
                <p>10726</p>
            </div>
            <div className="flex flex-col md:flex-row mb-5 gap-2 md:gap-0">
                <h4 className="min-w-[160px] font-medium">Categories</h4>
                <p>
                    <a className="cursor-pointer hover:text-primary-500" href="/product-category/hair">Hair, </a>
                    <a className="cursor-pointer hover:text-primary-500" href="/product-category/men">Men, </a>
                    <a className="cursor-pointer hover:text-primary-500" href="/product-category/offers">Offers, </a>
                    <a className="cursor-pointer hover:text-primary-500" href="/product-category/hair-care">Hair Care, </a>
                    <a className="cursor-pointer hover:text-primary-500" href="/product-category/shampoo">Shampoo, </a>
                    <a className="cursor-pointer hover:text-primary-500" href="/product-category/hair-care-men">Hair Care, </a>
                    <a className="cursor-pointer hover:text-primary-500" href="/product-category/shampoo-hair-care-men">Shampoo, </a>
                    <a className="cursor-pointer hover:text-primary-500" href="/product-category/top-selling">Top Selling, </a>
                    <a className="cursor-pointer hover:text-primary-500" href="/product-category/marico-pink-beauty-deals">Marico Pink Beauty Deals</a>
                </p>
            </div>
            <div className="flex">
                <h4 className="min-w-[80px] md:min-w-[160px] font-medium">Tags</h4>
                <p>
                    <a className="cursor-pointer hover:text-primary-500" href="/shop?tags=FMCG">FMCG, </a>
                    <a className="cursor-pointer hover:text-primary-500" href="/shop?tags=marico-bangladesh">marico-bangladesh, </a>
                    <a className="cursor-pointer hover:text-primary-500" href="/shop?tags=Pink+Beauty+Sale">Pink Beauty Sale, </a>
                    <a className="cursor-pointer hover:text-primary-500" href="/shop?tags=marico_parachute_campaign">marico_parachute_campaign, </a>
                    <a className="cursor-pointer hover:text-primary-500" href="/shop?tags=pink+beauty+sale+5.0">pink beauty sale 5.0</a>
                </p>
            </div>
            <div className="flex">
                <h4 className="min-w-[80px] md:min-w-[160px] font-medium">Brands</h4>
                <p>
                    <a className="cursor-pointer hover:text-primary-500" href="/brand/parachute-naturale">Parachute Naturale</a>
                </p>
            </div>
            <ProductAttributes />
        </div>
    )
}

const ProductAttributes = () => {
    return (
        <div className="flex gap-2 mt-8 md:mt-12 justify-between">
            <div className="flex flex-col justify-center items-center gap-2">
                <Image
                    alt="genuine-product"
                    src="/assets/images/icon/genuine.webp"
                    width={48}
                    height={48}
                    className="w-10 h-10"
                />
                <h4 className="text-xs text-center">100% Genuine Products</h4>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <Image
                    alt="secure-payment"
                    src="/assets/images/icon/secure-payment.webp"
                    width={48}
                    height={48}
                    className="w-10 h-10"
                />
                <h4 className="text-xs text-center">100% Secure Payments</h4>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <Image
                    alt="help-center"
                    src="/assets/images/icon/headset.webp"
                    width={48}
                    height={48}
                    className="w-10 h-10"
                />
                <h4 className="text-xs text-center">Help Center (+8809666737475)</h4>
            </div>
        </div>
    )
}

