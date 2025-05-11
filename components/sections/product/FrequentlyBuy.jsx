import Image from 'next/image';

export default function FrequentlyBuy() {
    return (
        <div className="w-full md:w-2/3">
            <h2 className="text-md font-semibold text-rr-quartz my-4 mb-8">Frequently Bought Together</h2>
            <div className="flex items-center">
                <div className="h-[130px] w-[130px]">
                    <Image
                        alt="Himalaya Baby Powder"
                        src="/assets/images/product/buy-together-1.webp"
                        width={200}
                        height={200}
                        className="object-cover object-center"
                    />
                </div>
                <div className="text-3xl mx-10">+</div>
                <span className="h-[130px] w-[130px]">
                    <Image
                        alt="Himalaya Brightening Vitamin C Orange Face Wash-100ml"
                        src="/assets/images/product/buy-together-2.webp"
                        width={200}
                        height={200}
                        className="object-cover object-center"
                    />
                </span>
                <div className="hidden sm:flex flex-col justify-center ml-10">
                    <p className="mb-2">Total Price: <span className="text-primary-500 ml-2 font-semibold"> ৳ 198.00</span></p>
                    <button className="bg-primary-500 px-4 py-3 text-wproducte rounded-lg text-white text-sm" type="button">ADD BOTH TO CART </button>
                </div>
            </div>
            <div className="mt-5">
                <ul>
                    <li className="flex items-center text-sm flex-wrap">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" color="#FF3D71" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(255, 61, 113)' }}><path d="M14 0h-12c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zM7 12.414l-3.707-3.707 1.414-1.414 2.293 2.293 4.793-4.793 1.414 1.414-6.207 6.207z"></path></svg>
                        <span className="text-primary-500 mr-2 font-semibold">This Item:</span>
                        <span className="mr-2">Himalaya Baby Powder</span>
                        <span className="mr-2">(100gm)</span>
                        <span className="line-through text-gray-400 mr-2">৳ 140.00</span>
                        <span className="text-primary-500 font-semibold">৳ 99.00</span>
                    </li>
                    <li className="flex items-center text-sm mt-2 flex-wrap">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" color="#FF3D71" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(255, 61, 113)' }}><path d="M14 0h-12c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zM7 12.414l-3.707-3.707 1.414-1.414 2.293 2.293 4.793-4.793 1.414 1.414-6.207 6.207z"></path></svg>
                        <span className="mr-2">Himalaya Brightening Vitamin C Orange Face Wash-100ml</span>
                        <span className="mr-2">(100ml)</span>
                        <span className="line-through text-gray-400 mr-2">৳ 200.00</span>
                        <span className="text-primary-500 font-semibold">৳ 99.00</span>
                    </li>
                </ul>
            </div>
            <div className="flex sm:hidden mt-6 items-center gap-10">
                <p className="mb-2 flex flex-col">Total Price <span className="text-primary-500 font-semibold"> ৳ 198.00</span></p>
                <button className="bg-primary-500 px-3 py-4 text-wproducte rounded-lg text-white text-sm" type="button">ADD BOTH TO CART </button>
            </div>
        </div>
    );
}
