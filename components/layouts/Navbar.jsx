import NavResponsive from "../partials/NavResponsive";
import NavDesktop from "../partials/NavDesktop";
import NavMenus from "../partials/NavMenus";

export default function Navbar() {
    return (
        <nav className="container relative bg-white">
            <NavResponsive />
            <NavDesktop />
            <NavMenus />
        </nav>
    )
}
