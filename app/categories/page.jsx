import CategorySidebar from "@/components/partials/CategorySidebar";
import CategoryContent from "@/components/sections/category/CategoryContent";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function CategoriesPage() {
    return (
        <div className="bg-zinc-50">
            <div className="container">
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
