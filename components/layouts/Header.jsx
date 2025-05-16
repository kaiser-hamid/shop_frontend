"use client"

import HeaderStart from "../partials/HeaderStart";
import HeaderTop from "../partials/HeaderTop";
import NavResponsive from "../partials/NavResponsive";
import NavDesktop from "../partials/NavDesktop";
import NavMenus from "../partials/NavMenus";
import Link from "next/link";
import { MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import RoundedButton from "../ui/buttons/RoundedButton";
import Image from "next/image";
import React, { useRef } from "react";
import PageOverlay from "./PageOverlay";
export default function Header() {
    return (
        <div className="fixed w-full top-0 z-10 bg-white nav-box z-30">
            <nav className="container z-30">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center relative py-2">
                    {/* for mobile | hidden on desktop */}

                    {/* Logo & brands */}
                    <div className="flex lg:justify-between items-center py-3 lg:py-0">
                        <div className="flex items-center mx-auto w-1/3 lg:w-full">
                            {/* Hidden on desktop */}

                            {/* Logo */}
                            <Link href="/" className="flex">
                                <img src="/assets/images/logo/ruprong-logo.jpg" alt="logo" className="w-24" />
                                {/* <span className="text-xl lg:text-[32px] font-bold uppercase tracking-wider">Ruprong</span> */}
                            </Link>

                            {/* brand */}
                            <div className="lg:flex items-center hidden">
                                <div className="flex flex-col mt-2 lg:flex-row lg:mt-0 lg:mx-1">
                                    {/* Brand dropdown */}
                                    <div className="group">
                                        <a href="#" className="my-1 text-sm font-semibold uppercase leading-5 md:mx-4 md:my-0 px-4">Brands</a>
                                        <div className="text-[0.8rem] bg-transparent absolute left-0 right-0 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0 pt-4">
                                            <BrandDropdown />
                                        </div>
                                        <PageOverlay />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Search section */}
                    <div className="flex items-center border-2 mb-3 md:mb-0 border-primary-500 text-gray-700 bg-zinc-100 rounded-3xl placeholder-gray-500 w-full lg:w-1/3 relative">
                        <MagnifyingGlassIcon className="w-6 h-6 ml-3" />
                        <input
                            type="text"
                            className="w-full px-2 py-2 leading-tight text-sm focus:outline-none bg-zinc-100 rounded-3x placeholder:text-slate-400 placeholder:font-medium rounded-r-3xl"
                            placeholder="Search for products, brands..."
                        />
                    </div>

                    {/* cart section */}
                    <div className="lg:flex items-center hidden">
                        <div className="flex items-center gap-x-4 -mx-1 md:mx-0 text-xs">
                            <RoundedButton onClick={() => { }} className="bg-gray-800 text-white uppercase">Wishlist</RoundedButton>
                            <RoundedButton onClick={() => { }} className="bg-slate-200 text-gray-800 uppercase">Login</RoundedButton>
                            <RoundedButton onClick={() => { }} className="flex justify-center gap-x-2 bg-primary-500 text-white uppercase">
                                <ShoppingBagIcon className="w-4 h-4" />
                                <span>Bag</span>
                                <span className="flex items-center justify-center text-xs h-5 w-5 rounded-full bg-white text-primary-500">0</span>
                            </RoundedButton>
                        </div>


                    </div>
                </div>

                <hr className="hidden lg:block" />

                <NavMenus />
            </nav>
        </div>
    )
}

const BrandDropdown = () => {
    // Create a ref to pass to BrandList and BrandContent
    const brandListRef = useRef(null);
    return (
        <div className="flex bg-white">
            <BrandList scrollRef={brandListRef} />
            <BrandContent scrollRef={brandListRef} />
            <PopularBrands />
        </div>
    )
}

const BrandList = ({ scrollRef }) => {
    const brands = [
        { name: "Topface", href: "/brand/topface", count: 425 },
        { name: "NICKA K", href: "/brand/nicka-k", count: 402 },
        { name: "L'Oreal", href: "/brand/loreal", count: 352 },
        { name: "The Body Shop", href: "/brand/the-body-shop", count: 329 },
        { name: "Flormar", href: "/brand/flormar", count: 328 },
        { name: "Dove", href: "/brand/dove", count: 279 },
        { name: "Revlon", href: "/brand/revlon", count: 261 },
        { name: "Pastel", href: "/brand/pastel", count: 259 },
        { name: "Nivea", href: "/brand/nivea", count: 236 },
        { name: "Technic", href: "/brand/technic", count: 227 },
    ];

    return (
        <div ref={scrollRef} className="w-1/4 h-[26rem] overflow-auto text-sm custom-scroll mt-2 scroll-smooth">
            {/* Top brands */}
            <h4 className="mx-4 mb-2 py-1 font-semibold border-b border-gray-200">
                TOP BRANDS
            </h4>
            {brands.map((brand) => (
                <div className="bg-white px-4 text-[0.8rem]" key={brand.href}>
                    <ul className="top-0">
                        <li className="py-[0.1rem]">
                            <Link
                                className="block cursor-pointer hover:text-primary-500"
                                href={brand.href}
                            >
                                {brand.name} <span className="bg-slate-300 px-1 rounded-md">{brand.count}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            ))}

            {/* All Brands */}
            <h4 className="mx-4 mb-2 py-[0.1rem] font-semibold border-b border-gray-200">
                ALL BRANDS
            </h4>
            <div className="bg-white px-4 text-[0.8rem]">
                <h2
                    id="brand#"
                    className="text-primary-500 font-bold border-b border-gray-200 text-md"
                >
                    #
                </h2>
                <ul className="top-0 py-3">
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/some-by-mi">
                            [SOME BY MI] <span className="bg-slate-300 px-1 rounded-md">35</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/3w-clinic">
                            3W Clinic <span className="bg-slate-300 px-1 rounded-md">83</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/5lanc">
                            5LANC <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="bg-white px-4 text-[0.8rem]">
                <h2
                    id="brandA"
                    className="text-primary-500 font-bold border-b border-gray-200 text-md"
                >
                    A
                </h2>
                <ul className="top-0 py-3">
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/a-bena">
                            A-Bena <span className="bg-slate-300 px-1 rounded-md">2</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/apieu">
                            A'PIEU <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/abo">
                            A&BO <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/ad">
                            A&D <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/aarong-earth">
                            Aarong Earth <span className="bg-slate-300 px-1 rounded-md">45</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/abib">
                            Abib <span className="bg-slate-300 px-1 rounded-md">1</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="bg-white px-4 text-[0.8rem]">
                <h2
                    id="brandM"
                    className="text-primary-500 font-bold border-b border-gray-200 text-md"
                >
                    M
                </h2>
                <ul className="top-0 py-3">
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/m-tree">
                            M Tree <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/m-a-c">
                            M.A.C <span className="bg-slate-300 px-1 rounded-md">7</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/ms">
                            M&amp;S <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/msakuraco">
                            M&amp;Sakuraco <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/maaile">
                            Maaile <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mac">
                            MAC <span className="bg-slate-300 px-1 rounded-md">2</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/macadamia">
                            Macadamia <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/macleans">
                            Macleans <span className="bg-slate-300 px-1 rounded-md">2</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/magic">
                            Magic <span className="bg-slate-300 px-1 rounded-md">10</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mailers">
                            Mailer's <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/makeup-revolution">
                            Makeup Revolution <span className="bg-slate-300 px-1 rounded-md">162</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/malibu">
                            Malibu <span className="bg-slate-300 px-1 rounded-md">1</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mamaearth">
                            Mamaearth <span className="bg-slate-300 px-1 rounded-md">98</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/maothercare">
                            Maothercare <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/maple-holistics">
                            Maple Holistics <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/marc-jacobs">
                            Marc Jacobs <span className="bg-slate-300 px-1 rounded-md">1</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/marks-and-spencer">
                            Marks and Spencer <span className="bg-slate-300 px-1 rounded-md">11</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/marvel">
                            Marvel <span className="bg-slate-300 px-1 rounded-md">1</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mary-kay">
                            Mary Kay <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/marymay">
                            Mary&amp;May <span className="bg-slate-300 px-1 rounded-md">1</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/maryaj">
                            Maryaj <span className="bg-slate-300 px-1 rounded-md">11</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/matrix">
                            Matrix <span className="bg-slate-300 px-1 rounded-md">16</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/maxbeu">
                            Maxbeu <span className="bg-slate-300 px-1 rounded-md">5</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/may-island">
                            May Island <span className="bg-slate-300 px-1 rounded-md">1</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/maya">
                            Maya <span className="bg-slate-300 px-1 rounded-md">15</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/maybelline">
                            Maybelline <span className="bg-slate-300 px-1 rounded-md">178</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mccons">
                            McCons <span className="bg-slate-300 px-1 rounded-md">1</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/med-b">
                            Med B <span className="bg-slate-300 px-1 rounded-md">1</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/medby">
                            Medby <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mederma">
                            Mederma <span className="bg-slate-300 px-1 rounded-md">6</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/medi-peel">
                            Medi-Peel <span className="bg-slate-300 px-1 rounded-md">1</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/medibeau">
                            Medibeau <span className="bg-slate-300 px-1 rounded-md">5</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/medica">
                            MEDICA <span className="bg-slate-300 px-1 rounded-md">1</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/medica-tech-limited">
                            Medica Tech limited <span className="bg-slate-300 px-1 rounded-md">7</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mediflower">
                            MediFlower <span className="bg-slate-300 px-1 rounded-md">1</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mediker">
                            Mediker <span className="bg-slate-300 px-1 rounded-md">5</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mediker-safelife">
                            Mediker SafeLife <span className="bg-slate-300 px-1 rounded-md">12</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/meena-herbal">
                            Meena Herbal <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mei-linda">
                            Mei Linda <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/meilin">
                            Meilin <span className="bg-slate-300 px-1 rounded-md">11</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mercedes-benz">
                            Mercedes Benz <span className="bg-slate-300 px-1 rounded-md">2</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/meril">
                            Meril <span className="bg-slate-300 px-1 rounded-md">49</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mielle">
                            Mielle <span className="bg-slate-300 px-1 rounded-md">11</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/milani">
                            Milani <span className="bg-slate-300 px-1 rounded-md">48</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/minerva">
                            Minerva <span className="bg-slate-300 px-1 rounded-md">2</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/miss-mrs">
                            Miss &amp; Mrs <span className="bg-slate-300 px-1 rounded-md">46</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/miss-adoro">
                            Miss Adoro <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/miss-and-mrs">
                            MISS AND MRS <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/miss-ashley">
                            Miss Ashley <span className="bg-slate-300 px-1 rounded-md">1</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/missha">
                            Missha <span className="bg-slate-300 px-1 rounded-md">47</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mistine">
                            Mistine <span className="bg-slate-300 px-1 rounded-md">1</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mitvana">
                            Mitvana <span className="bg-slate-300 px-1 rounded-md">20</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mixueer">
                            Mixueer <span className="bg-slate-300 px-1 rounded-md">1</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/miyako">
                            Miyako <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/moda">
                            Moda <span className="bg-slate-300 px-1 rounded-md">3</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/monalisa">
                            Monalisa&nbsp;<span className="bg-slate-300 px-1 rounded-md">3</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mont-blanc">
                            Mont Blanc <span className="bg-slate-300 px-1 rounded-md">15</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/montagne">
                            Montagne <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/montblanc">
                            Montblanc <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/moods">
                            MOODS <span className="bg-slate-300 px-1 rounded-md">22</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/morfose">
                            Morfose <span className="bg-slate-300 px-1 rounded-md">3</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/morphe">
                            Morphe <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mothercare">
                            Mothercare <span className="bg-slate-300 px-1 rounded-md">9</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mozer">
                            Mozer <span className="bg-slate-300 px-1 rounded-md">3</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mr-magic">
                            Mr. Magic <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mr-cool">
                            Mr.Cool <span className="bg-slate-300 px-1 rounded-md">1</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mua">
                            MUA <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mumtaz-hebal">
                            Mumtaz Hebal <span className="bg-slate-300 px-1 rounded-md">0</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/mumtaz-herbal">
                            Mumtaz Herbal <span className="bg-slate-300 px-1 rounded-md">20</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/muuchstac">
                            Muuchstac <span className="bg-slate-300 px-1 rounded-md">1</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/myglamm">
                            MyGlamm <span className="bg-slate-300 px-1 rounded-md">72</span>
                        </Link>
                    </li>
                    <li className="py-[0.1rem]">
                        <Link className="block cursor-pointer hover:text-primary-500" href="/brand/myonly">
                            MYONLY <span className="bg-slate-300 px-1 rounded-md">5</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

const BrandContent = ({ scrollRef }) => {
    const handleScroll = (char, e) => {
        e.preventDefault();
        if (!scrollRef.current) return;
        const target = scrollRef.current.querySelector(`#brand${char}`);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <div className="text-sm pl-8 leading-4 mt-2">
            <ul>
                {["#", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")].map((char) => (
                    <li key={char}>
                        <a
                            href=""
                            className="hover:text-primary-500 cursor-pointer"
                            onClick={(e) => handleScroll(char, e)}
                        >
                            {char}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const PopularBrands = () => {
    return (
        <div className="ml-2 grow">
            <h2 className="text-xl text-center my-2">TOP BRANDS</h2>
            <div className="px-8 py-4 border-t border-gray-300 grid grid-cols-4">
                {Array.from({ length: 12 }).map((_, i) => (
                    <Link href="/categories" key={i} className="flex items-center justify-center">
                        <Image
                            alt="top-brands"
                            src={`/assets/images/featured/brand-logo-${i + 1}.webp`}
                            width={167}
                            height={106}
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
