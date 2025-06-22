import ProductGallery from "@/components/sections/product/ProductGallery";
import ProductDetails from "@/components/sections/product/ProductDetails";
import RecentlyViewedProducts from "@/components/sections/product/RecentlyViewedProducts";
import RecommendedProducts from "@/components/sections/product/RecommendedProducts";
import ProductAdditionalInfo from "@/components/sections/product/ProductAdditionalInfo";
import AvailableOffer from "@/components/sections/product/AvailableOffer";
import ShareGroup from "@/components/partials/ShareGroup";
import { notFound } from "next/navigation";


export async function getProduct(slug) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`);

        const data = await response.json();

        if (!data.status) {
            throw new Error('Product not found');
        }

        return data.data;
    } catch (error) {
        console.error('Error fetching product:', error.message);
        return null;
    }
}




export default async function ProductPage({ params }) {

    const product = await getProduct(params.slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="container">

            {/* Product Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-8">
                {/* Product Gallery */}
                <div className="product-detail-col image-comp mt-0 md:mt-[2rem]">
                    <ProductGallery productImages={product.product_images} />
                    <ShareGroup />
                </div>

                {/* Product Details */}
                <ProductDetails product={product} />
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
