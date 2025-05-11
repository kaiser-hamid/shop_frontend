import CategorySidebar from "@/components/partials/CategorySidebar";
import CategoryContent from "@/components/sections/category/CategoryContent";
import CategoryBanner from "@/components/sections/banners/CateoryBanner";
export default function CategoriesPage() {
    return (
        <div className="">
            {/* Banner  */}
            <CategoryBanner />
            <div className="container pb-8">

                <div class="flex flex-col md:flex-row md:space-x-4">

                    {/* Category Sidebar */}
                    <CategorySidebar />

                    {/* Category Content */}
                    <CategoryContent />
                </div>
            </div>
        </div>
    );
}
