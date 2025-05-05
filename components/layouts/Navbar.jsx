import NavResponsive from "../partials/NavResponsive";
import NavDesktop from "../partials/NavDesktop";
import NavMenus from "../partials/NavMenus";

export default function Navbar() {
    return (
        <nav className="px-4 lg:px-9 2xl:px-[270px] mx-auto relative bg-white">
            <NavResponsive />
            <NavDesktop />
            <NavMenus />
        </nav>
    )
}
