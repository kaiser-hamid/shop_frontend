import CategorySidebar from "@/components/partials/CategorySidebar";
import CategoryContent from "@/components/sections/category/CategoryContent";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function CategoriesPage() {
    return (
        <div className="bg-[#f9f9f9]">
            <div className="px-4 xl:px-0 xl:max-w-[1370px] mx-auto">
                {/* Breadcrumb  */}
                <Breadcrumb />

                <div class="grid grid-cols-12 mt-8 mb-14">

                    {/* Category Sidebar */}
                    <CategorySidebar />

                    {/* Category Content */}
                    <CategoryContent />
                </div>
            </div>
        </div>
    );
}
