import ProductGallery from "@/components/sections/product/ProductGallery";
import ProductDetails from "@/components/sections/product/ProductDetails";
import CustomerAlsoViewedProducts from "@/components/sections/product/CustomerAlsoViewedProducts";
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

// Generate metadata for the product page
export async function generateMetadata({ params }) {
    const product = await getProduct(params.slug);

    if (!product) {
        return {
            title: 'Product Not Found',
            description: 'The requested product could not be found.'
        };
    }

    return {
        title: product.meta_title || 'Product Details',
        description: product.meta_description || product.brief_description,
        keywords: product.meta_keywords?.join(',') || product.name,
        openGraph: {
            title: product.meta_title || product.name,
            description: product.meta_description || product.brief_description,
            images: product.product_images && product.product_images.length > 0
                ? [{ url: product.product_images[0] }]
                : [],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: product.meta_title || product.name,
            description: product.meta_description || product.brief_description,
            images: product.product_images && product.product_images.length > 0
                ? [product.product_images[0]]
                : [],
        },
        alternates: {
            canonical: `/product/${params.slug}`,
        },
    };
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
            <ProductAdditionalInfo productId={product.id} />

            {/* Recommended Products */}
            <RecommendedProducts currentProduct={product} />

            {/* Recently Viewed Products */}
            <CustomerAlsoViewedProducts currentProduct={product} />

        </div>
    )

}
