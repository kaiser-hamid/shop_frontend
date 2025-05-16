"use client"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ProductGallery from "@/components/sections/product/ProductGallery";
import ProductDetails from "@/components/sections/product/ProductDetails";
import RecentlyViewedProducts from "@/components/sections/product/RecentlyViewedProducts";
import RecommendedProducts from "@/components/sections/product/RecommendedProducts";
import ProductAdditionalInfo from "@/components/sections/product/ProductAdditionalInfo";
import AvailableOffer from "@/components/sections/product/AvailableOffer";
import FrequentlyBuy from "@/components/sections/product/FrequentlyBuy";
import ShareGroup from "@/components/partials/ShareGroup";


export default function ProductPage() {
    return (
        <div className="container">

            {/* Product Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-8">
                {/* Product Gallery */}
                <div className="product-detail-col image-comp mt-0 md:mt-[2rem]">
                    <ProductGallery />
                    <ShareGroup />
                </div>

                {/* Product Details */}
                <ProductDetails />
            </div>

            {/* Frequently buy & Avalable offer */}
            <div className="flex flex-col-reverse lg:flex-row mt-8 justify-between gap-3">
                {/* <FrequentlyBuy /> */}
                <AvailableOffer />
            </div>

            {/* Product Additional Info Tab */}
            <ProductAdditionalInfo />

            {/* Recommended Products */}
            <RecommendedProducts />

            {/* Recently Viewed Products */}
            <RecentlyViewedProducts />

        </div>
    )

}
