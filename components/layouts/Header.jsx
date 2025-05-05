import HeaderStart from "../partials/HeaderStart";
import HeaderTop from "../partials/HeaderTop";
import Navbar from "./Navbar";
export default function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
            <HeaderTop />
            <Navbar />
        </div>
    )
}