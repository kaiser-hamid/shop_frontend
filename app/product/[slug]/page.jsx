"use client"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import RelatedProducts from "@/components/partials/RelatedProducts";
import ProductGallery from "@/components/sections/product/ProductGallery";
import ProductDetails from "@/components/sections/product/ProductDetails";
import ProductInfoTab from "@/components/sections/product/ProductInfoTab";


export default function ProductPage() {

    return (
        <>
            <div className="bg-zinc-50 px-4 lg:px-9 xl:px-16">
                {/* Breadcrumb  */}
                <div className="pt-9 pb-5">
                    <div>
                        <ul className="flex items-center shrink-0 *:pr-6 *:relative *:before:font-remix *:before:absolute *:before:right-2 *:before:content-['/'] *:before:text-gray-300">
                            <li className="last:pr-0 last:before:hidden"><a href="index.html" className="text-gray-800 hover:text-red-500">(Product 10) Sample - Clothing And Accessory Boutiques For Sale</a></li>
                            <li className="last:pr-0 last:before:hidden"><a href="#!" className="text-gray-300">home</a></li>
                        </ul>
                    </div>
                </div>

                {/* content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:px-28 lg:gap-10">
                    {/* Gallery */}
                    <ProductGallery />
                    {/* Product Info */}
                    <ProductDetails />
                </div>

                {/* Additional Information */}
                <ProductInfoTab />

            </div>
            <RelatedProducts />
        </>
    );
}
