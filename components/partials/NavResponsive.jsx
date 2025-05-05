"use client"

import React, { useRef, useState } from "react";
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    UserIcon,
    ShoppingCartIcon,
    XMarkIcon,
    ArrowLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";

const menuData = [
    { title: "Home" },
    {
        title: "Shop",
        submenu: [
            { title: "All Products" },
            {
                title: "Categories",
                submenu: [
                    { title: "Men" },
                    { title: "Women" },
                    {
                        title: "Kids",
                        submenu: [
                            { title: "Toys" },
                            { title: "Clothes" },
                        ],
                    },
                ],
            },
            { title: "Brands" },
        ],
    },
    {
        title: "Product",
        submenu: [
            { title: "Product 1" },
            { title: "Product 2" },
        ],
    },
    {
        title: "Blog",
        submenu: [
            { title: "Blog 01" },
            { title: "Blog 02" },
            { title: "Blog 03" },
        ],
    },
    {
        title: "Pages",
        submenu: [
            { title: "About Us" },
            { title: "Contact" },
            { title: "FAQ" },
        ],
    },
];

export default function NavResponsive() {

    // Stack of { title, items } for navigation
    const [menuStack, setMenuStack] = useState([{ title: "Menu", items: menuData }]);

    // Go deeper into submenu
    const openSubmenu = (item) => {
        setMenuStack((stack) => [...stack, { title: item.title, items: item.submenu }]);
    };

    // Reset to main menu when drawer closes
    const handleDrawerClose = () => {
        setTimeout(() => setMenuStack([{ title: "Menu", items: menuData }]), 300);
    };

    // Current menu level
    const currentMenu = menuStack[menuStack.length - 1];


    return (
        <div className="drawer xl:hidden">
            {/* Drawer toggle */}
            <input
                id="my-drawer"
                type="checkbox"
                className="drawer-toggle"
                onChange={e => { if (!e.target.checked) handleDrawerClose(); }}
            />
            {/* Main content */}
            <div className="drawer-content flex justify-between items-center gap-3 py-2">
                {/* Left: Menu & Search */}
                <div className="flex gap-4">
                    <label htmlFor="my-drawer" className="cursor-pointer">
                        <Bars3Icon className="w-7 md:w-8" />
                    </label>
                    <div className="cursor-pointer">
                        <MagnifyingGlassIcon className="w-7 md:w-8" />
                    </div>
                </div>
                {/* Center: Logo */}
                <div>
                    <a href="index.html" className="flex justify-center">
                        <img
                            src="assets/images/logo/logo-dark.png"
                            className="max-w-24 sm:max-w-32"
                            alt="Logo"
                        />
                    </a>
                </div>
                {/* Right: Login & Cart */}
                <div className="flex gap-4">
                    <label htmlFor="login-drawer" className="cursor-pointer">
                        <UserIcon className="w-7 md:w-8" />
                    </label>
                    <label htmlFor="cart-drawer" className="cursor-pointer relative">
                        <ShoppingCartIcon className="w-7 md:w-8" />
                        <span className="absolute -top-1 -right-1 w-5 h-5 text-sm font-medium flex justify-center items-center text-white bg-green-400 rounded-full">
                            0
                        </span>
                    </label>
                </div>
            </div>
            {/* Drawer side */}
            <DrawerContent
                menuStack={menuStack}
                openSubmenu={openSubmenu}
            />
        </div>
    );
};


const DrawerContent = ({ menuStack, openSubmenu }) => {
    const currentMenu = menuStack[menuStack.length - 1];

    return (
        <div className="drawer-side z-50">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <div className="bg-white text-base-content min-h-full w-80 p-4 ">

                <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-lg">{currentMenu.title}</span>
                    <label htmlFor="my-drawer" className="cursor-pointer">
                        <XMarkIcon className="w-6 h-6" />
                    </label>
                </div>
                <ul className="menu">
                    {currentMenu.items.map((item, idx) =>
                        item.submenu ? (
                            <li key={item.title + idx}>
                                <button
                                    className="w-full text-left py-2 px-2 rounded hover:bg-base-300 flex justify-between items-center"
                                    onClick={() => openSubmenu(item)}
                                >
                                    {item.title}
                                    <ChevronRightIcon className="w-5 h-5" />
                                </button>
                            </li>
                        ) : (
                            <li key={item.title + idx}>
                                <a
                                    href={item.link || "#!"}
                                    className="block py-2 px-2 rounded hover:bg-base-300"
                                    onClick={() => {
                                        document.getElementById("my-drawer").checked = false;
                                    }}
                                >
                                    {item.title}
                                </a>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    )
}
