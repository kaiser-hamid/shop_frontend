import Link from "next/link"
import PageOverlay from "../layouts/PageOverlay"
import { useState } from "react"
export default function NavMenus() {

    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <div className="mt-3 py-3 -mx-3 hidden lg:flex lg:flex-row lg:justify-between lg:mt-0 lg:mx-1 relative items-center">
            <ul className="hidden flex-1 lg:flex items-center lg:justify-between">
                <li className="group inline-block">
                    <a href="#" className="my-1 lg:px-1 xl:px-2 px-3 text-xs group-hover:text-primary-500 font-medium  leading-5 md:my-0">
                        Makeup
                    </a>
                    <div className="text-[0.8rem] bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <MakeupMenus />
                    </div>
                    <PageOverlay />
                </li>
                <li className="group inline-block">
                    <a href="#" className="my-1 lg:px-1 xl:px-2 px-3 text-xs group-hover:text-primary-500 font-medium  leading-5 md:my-0">
                        Skin
                    </a>
                    <div className="text-[0.8rem] bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <SkinMenus />
                    </div>
                    <PageOverlay />
                </li>
                <li className="group inline-block">
                    <a href="#" className="my-1 lg:px-1 xl:px-2 px-3 text-xs group-hover:text-primary-500 font-medium  leading-5 md:my-0">
                        Hair
                    </a>
                    <div className="text-[0.8rem] bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <HairMenus />
                    </div>
                    <PageOverlay />
                </li>
                <li className="group inline-block">
                    <a href="#" className="my-1 lg:px-1 xl:px-2 px-3 text-xs group-hover:text-primary-500 font-medium  leading-5 md:my-0">
                        Personal Care
                    </a>
                    <div className="text-[0.8rem] bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <PersonalCareMenus />
                    </div>
                    <PageOverlay />
                </li>

                <li className="relative group inline-block">
                    <a href="#" className="my-1 lg:px-1 xl:px-2 px-3 text-xs group-hover:text-primary-500 font-medium  leading-5 md:my-0">
                        Mom & Baby
                    </a>
                    <div className="text-[0.8rem] bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <MomAndBabyMenus />
                    </div>
                    <PageOverlay />
                </li>

                <li className="relative group inline-block">
                    <a href="#" className="my-1 lg:px-1 xl:px-2 px-3 text-xs group-hover:text-primary-500 font-medium  leading-5 md:my-0">
                        Fragrance
                    </a>
                    <div className="text-[0.8rem] bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <FragranceMenus />
                    </div>
                    <PageOverlay />
                </li>

                {/* button nav link dropdown */}
                <li className="group inline-block p-1 pt-[3px] h-[32px] rounded-full text-white bg-green-700/90 uppercase">
                    <a href="#" className="my-1 lg:px-1 xl:px-2 px-3 text-xs font-semibold  leading-5 md:my-0">
                        Men
                    </a>
                    <div className="text-[0.8rem] bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <MenMenus />
                    </div>
                    <PageOverlay />
                </li>

                {/* button nav link */}
                <li className="group inline-block p-1 pt-[3px] h-[32px] rounded-full text-white bg-lime-500 uppercase">
                    <Link href="/eid-giga-glam" className="my-1 lg:px-1 xl:px-2 px-3 text-xs font-semibold leading-5 md:my-0">
                        Eid giga glam
                    </Link>
                </li>

                {/* button nav link dropdown */}
                <li className="relative group inline-block p-1 pt-[3px] h-[32px] rounded-full text-white bg-purple-600">
                    <a href="#" className="my-1 lg:px-1 xl:px-2 px-3 text-xs font-semibold  leading-5 md:my-0 uppercase">
                        Juwellerey
                    </a>
                    <div className="text-[0.8rem] bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <JewelleryMenus />
                    </div>
                    <PageOverlay />
                </li>

                {/* button nav link */}
                <li className="group inline-block p-1 pt-[3px] h-[32px] rounded-full text-white bg-teal-600 uppercase">
                    <Link href="/crealance-sale" className="my-1 lg:px-1 xl:px-2 px-3 text-xs font-semibold  leading-5 md:my-0">
                        Crealance sale
                    </Link>
                </li>
            </ul>
            {showOverlay && <div className="category-overlay" />}
        </div >
    )
}

const MakeupMenus = () => {
    return (
        <div className="group-hover:block dropdown-menu absolute hidden h-auto left-0 w-full z-30 bg-white mt-[1px] category-dropdown">
            <div className="flex">
                {/* Face Section */}
                <div className="w-auto grow">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/face" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Face</Link>
                        </li>
                        {[
                            'Face Primer',
                            'Concealer',
                            'Foundation',
                            'Compact & Pressed Powder',
                            'Contour',
                            'Loose Powder',
                            'Blush',
                            'Bronzer',
                            'Tinted Moisturizer',
                            'BB & CC cream',
                            'Highlighters',
                            'Makeup Remover',
                            'Setting Spray',
                            'Face Pallete'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Eyes Section */}
                <div className="w-auto grow bg-[#f7f7f7]">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/eyes" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Eyes</Link>
                        </li>
                        {[
                            'Kajal',
                            'Eyeliner',
                            'Mascara',
                            'Eye Shadow',
                            'Eye Brow Enhancers',
                            'Eye Primer',
                            'False Eyelashes',
                            'Eye Makeup Remover',
                            'Under Eye Concealer'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Lips Section */}
                <div className="w-auto grow">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/lips" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Lips</Link>
                        </li>
                        {[
                            'Lipstick',
                            'Liquid Lipsticks',
                            'Lip Crayon',
                            'Lip Gloss',
                            'Lip Liner',
                            'Lip Plumper',
                            'Lip Stain',
                            'Lip Balm',
                            'Lip Exfoliator'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Nails Section */}
                <div className="w-auto grow bg-[#f7f7f7]">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/nails" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Nails</Link>
                        </li>
                        {[
                            'Nail Polish',
                            'Nail Art Kits',
                            'Nail Polish Sets',
                            'Nail Care',
                            'Nail Polish Remover',
                            'Manicure & Pedicure Kits'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tools & Brushes Section */}
                <div className="w-auto grow">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/tools-brushes" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Tools & Brushes</Link>
                        </li>
                        {[
                            'Face Brush',
                            'Blush Brush',
                            'Eye Brush',
                            'Lip Brush',
                            'Brush Sets',
                            'Eyelash Curlers',
                            'Sponges & Applicators',
                            'Tweezers',
                            'Sharpeners',
                            'Mirrors',
                            'Makeup Pouches'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Top Brands Section */}
                <div className="w-auto grow bg-[#f7f7f7]">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/top-brands" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Top Brands</Link>
                        </li>
                        {[
                            "L'Oreal",
                            'MAC',
                            'The Body Shop'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/makeup-kits" className="block cursor-pointer font-semibold text-[0.75rem] text-black uppercase">Makeup Kits</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const SkinMenus = () => {
    return (
        <div className="group-hover:block dropdown-menu absolute hidden h-auto left-0 w-full z-30 bg-white mt-[1px] category-dropdown">
            <div className="flex">
                {/* Face Section */}
                <div className="w-auto grow">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/face-1" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Face</Link>
                        </li>
                        {[
                            'Cleanser',
                            'Day Cream',
                            'Night Cream',
                            'Day & Night Cream',
                            'Facewash',
                            'Masks & Peels',
                            'Sleeping Mask',
                            'Scrubs & Exfoliators',
                            'Toners & Astringents',
                            'Sheet Mask',
                            'Facial Wipes',
                            'Serums/Oils',
                            'Moisturizer',
                            'Facial Kit',
                            'Spot Remover',
                            'LIP BALMS/LIP CARE'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* K-Beauty Section */}
                <div className="w-auto grow bg-[#f7f7f7]">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/k-beauty" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">K- Beauty</Link>
                        </li>
                        {[
                            'Sunscreen',
                            'Moisturizers',
                            'Serums & Oils',
                            'Essence',
                            'Toners & Astringents',
                            'Sheet Mask',
                            'Face Packs & Peels',
                            'Scrubs & Exfoliators',
                            'Cleanser/Cleansing Oil',
                            'Sleeping mask/Mask',
                            'Face wash/Cleanser',
                            'Hair care',
                            'Eye cream/gel/patch',
                            'Facial Wipes',
                            'Cleansing oil',
                            'Ampoule'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hand & Feet Section */}
                <div className="w-auto grow">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/hand-feet" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Hand & Feet</Link>
                        </li>
                        {[
                            'Hand Creams',
                            'Foot Creams'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/sun-care" className="block cursor-pointer font-semibold text-[0.75rem] text-black uppercase">Sun Care</Link>
                        </li>
                    </ul>
                </div>

                {/* Body Section */}
                <div className="w-auto grow bg-[#f7f7f7]">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/body-1" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Body</Link>
                        </li>
                        {[
                            'Sunscreen',
                            'Body Butter',
                            'Body Mist/Spray',
                            'Deodorants/Roll-Ons',
                            'Lotions & Creams',
                            'Anti-Stretch Mark Creams',
                            'Body Scrubs'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Eye Care Section */}
                <div className="w-auto grow">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/eye-care" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Eye Care</Link>
                        </li>
                        {[
                            'Eye Cream',
                            'Eye Gel',
                            'Eye Roller',
                            'Under Eye Cream',
                            'Dark Circles / Wrinkles',
                            'Puffiness',
                            'Day/Night Cream',
                            'Eye Makeup Remover'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Shop By Concern Section */}
                <div className="w-auto grow bg-[#f7f7f7]">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/shop-by-concern-1-skin" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Shop By Concern</Link>
                        </li>
                        {[
                            'Skin Lightening',
                            'Sun Protection',
                            'Tan Removal',
                            'Pigmentation',
                            'Acne Treatment',
                            'Anti Aging',
                            'Oil Control',
                            'Cold Protection',
                            'Dull Skin Treatment',
                            'Pore Care',
                            'Dry Skin Remedy'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const HairMenus = () => {
    return (
        <div className="group-hover:block dropdown-menu absolute hidden h-auto left-0 w-full z-30 bg-white mt-[1px] category-dropdown">
            <div className="flex">
                <div className="w-auto grow">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/hair-care" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Hair Care</Link>
                        </li>
                        {[
                            'Shampoo',
                            'Conditioner',
                            'Hair Oil',
                            'Hair Cream & Masks',
                            'Hair Serum',
                            'Rebonding Kit',
                            'Value Pack'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-auto grow bg-[#f7f7f7]">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/hair-styling" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Hair styling</Link>
                        </li>
                        {[
                            'Hair Color',
                            'Hair Spray',
                            'Gels & Waxes',
                            'Hair Primer'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-auto grow">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/tools-accessories-1" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Tools & Accessories</Link>
                        </li>
                        {[
                            'Hair Combs',
                            'Hair straightener',
                            'Hair Dryer',
                            'Hair Band'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-auto grow bg-[#f7f7f7]">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/shop-by-hair-type" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">SHOP BY HAIR TYPE</Link>
                        </li>
                        {[
                            'Straight',
                            'Curly & Wavy'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-auto grow">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/shop-by-concern" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">SHOP BY CONCERN</Link>
                        </li>
                        {[
                            'Hairfall & Thinning',
                            'Dandruff',
                            'Dry & Frizzy Hair',
                            'Split Ends',
                            'Color Protection'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const PersonalCareMenus = () => {
    return (
        <div className="group-hover:block dropdown-menu absolute hidden h-auto left-0 w-full z-30 bg-white mt-[1px] category-dropdown">
            <div className="flex">
                <div className="w-auto grow">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/bath-shower" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Bath & Shower</Link>
                        </li>
                        {[
                            'Scrubs & Exfoliants',
                            'Shower Gels & Body Wash',
                            'Soaps',
                            'Talcum Powder'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/home-care-personal-care" className="block cursor-pointer font-semibold text-[0.75rem] text-black uppercase">HOME CARE</Link>
                        </li>
                        {[
                            'Candles',
                            'Air Freshener',
                            'Bathroom Essentials'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-auto grow bg-[#f7f7f7]">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/tools-accessories" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Tools & Accessories</Link>
                        </li>
                        {[
                            'Loofahs & Sponges',
                            'Travel Makeup Bag',
                            'Hair straightener'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/oral-care" className="block cursor-pointer font-semibold text-[0.75rem] text-black uppercase">Oral Care</Link>
                        </li>
                        {[
                            'Toothpaste',
                            'Tooth Brush',
                            'Mouthwash'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-auto grow">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/feminine-hygiene" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Feminine Hygiene</Link>
                        </li>
                        {[
                            'Shaving & Hair Removal',
                            'Feminine Cleanser',
                            'Sanitary Napkins'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-auto grow bg-[#f7f7f7]">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/feminine-care" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Feminine Care</Link>
                        </li>
                        {[
                            'Breast Cream',
                            'Clothing & More'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-auto grow">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/body" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Body</Link>
                        </li>
                        {[
                            'Toiletries',
                            'Lotions & Creams',
                            'Talcum Powder',
                            'Deodorants/Roll Ons',
                            'Sunscreen'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-auto grow bg-[#f7f7f7]">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/face-care" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">FACE</Link>
                        </li>
                        {[
                            'Facewash',
                            'Moisturizer',
                            'Face Wipes'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-auto grow">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/hands-feet" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Hands & Feet</Link>
                        </li>
                        {[
                            'Feet Puff',
                            'Foot Care',
                            'Foot Set',
                            'Foot Scrub',
                            'Hand Sanitizer',
                            'Hand Wash'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-auto grow bg-[#f7f7f7]">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/wellness" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Wellness</Link>
                        </li>
                        {[
                            'Weightloss',
                            'Shop By Concern',
                            'Face Mask',
                            'Sexual Wellness',
                            'Health & Fitness'
                        ].map(item => (
                            <li key={item} className="py-[0.1rem]">
                                <Link href={`/product-category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const MomAndBabyMenus = () => {
    return (
        <div className="absolute left-0 min-w-[280px] bg-white text-[0.8rem] shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-4 group-hover:translate-y-0 min-w-[180px]">
            <ul className="top-0 bg-white shadow px-4 py-3 h-full">
                <li className="py-[0.1rem]">
                    <Link href="/product-category/bath-time" className="block cursor-pointer text-gray-700 hover:text-primary-500">Bath Time</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/creams-lotions-oils" className="block cursor-pointer text-gray-700 hover:text-primary-500">Creams, Lotions & Oils</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/moisturizer" className="block cursor-pointer text-gray-700 hover:text-primary-500">Moisturizer</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/sunscreen" className="block cursor-pointer text-gray-700 hover:text-primary-500">Sunscreen</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/baby-care" className="block cursor-pointer text-gray-700 hover:text-primary-500">Baby Care</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/baby-products" className="block cursor-pointer text-gray-700 hover:text-primary-500">Baby Products</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/oil" className="block cursor-pointer text-gray-700 hover:text-primary-500">Oil</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/creams-moisturizers" className="block cursor-pointer text-gray-700 hover:text-primary-500">Creams & Moisturizers</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/lotion" className="block cursor-pointer text-gray-700 hover:text-primary-500">Lotion</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/shampoo-mom-baby" className="block cursor-pointer text-gray-700 hover:text-primary-500">Shampoo</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/wipes" className="block cursor-pointer text-gray-700 hover:text-primary-500">Wipes</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/soap-bodywash" className="block cursor-pointer text-gray-700 hover:text-primary-500">Soap & Bodywash</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/powder" className="block cursor-pointer text-gray-700 hover:text-primary-500">Powder</Link>
                </li>
            </ul>
        </div>
    )
}

const FragranceMenus = () => {
    return (
        <div className="absolute left-0 min-w-[280px] bg-white text-[0.8rem] shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-4 group-hover:translate-y-0 min-w-[180px]">
            <ul className="top-0 bg-white shadow px-4 py-3 h-full">
                <li className="py-[0.1rem]">
                    <Link href="/product-category/perfume" className="block cursor-pointer text-gray-700 hover:text-primary-500">Perfume</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/high-end-perfume" className="block cursor-pointer text-gray-700 hover:text-primary-500">High-end Perfume</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/edp" className="block cursor-pointer text-gray-700 hover:text-primary-500">EDP</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/edt" className="block cursor-pointer text-gray-700 hover:text-primary-500">EDT</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/body-spray-1" className="block cursor-pointer text-gray-700 hover:text-primary-500">Body Spray</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/body-mist" className="block cursor-pointer text-gray-700 hover:text-primary-500">Body Mist</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/cologne" className="block cursor-pointer text-gray-700 hover:text-primary-500">Cologne</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/ator" className="block cursor-pointer text-gray-700 hover:text-primary-500">Ator</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/deodorants-roll-ons" className="block cursor-pointer text-gray-700 hover:text-primary-500">Deodorants/Roll-Ons</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/unisex" className="block cursor-pointer text-gray-700 hover:text-primary-500">Unisex</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/for-women" className="block cursor-pointer text-gray-700 hover:text-primary-500">For Women</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/for-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">For Men</Link>
                </li>
            </ul>
        </div>
    )
}

const JewelleryMenus = () => {
    return (
        <div className="absolute left-0 min-w-[280px] bg-white text-[0.8rem] shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-4 group-hover:translate-y-0 min-w-[180px]">
            <ul className="top-0 bg-white shadow px-4 py-3 h-full">
                <li className="py-[0.1rem]">
                    <Link href="/product-category/necklaces" className="block cursor-pointer text-gray-700 hover:text-primary-500">Necklaces</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/necklace-sets" className="block cursor-pointer text-gray-700 hover:text-primary-500">Necklace Sets</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/earring" className="block cursor-pointer text-gray-700 hover:text-primary-500">Earring</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/product-category/bracelets-bangles" className="block cursor-pointer text-gray-700 hover:text-primary-500">Bracelets & Bangles</Link>
                </li>
            </ul>
        </div>
    )
}

const MenMenus = () => {
    return (
        <div className="group-hover:block dropdown-menu absolute hidden h-auto left-0 w-full z-30 bg-white mt-[1px] category-dropdown">
            <div className="flex">
                <div className="w-auto grow">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/shaving" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Shaving</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/razors" className="block cursor-pointer text-gray-700 hover:text-primary-500">Razor</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/shaving-cream-foam-gel" className="block cursor-pointer text-gray-700 hover:text-primary-500">Shaving cream, Foam & Gel</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/shaving-brush" className="block cursor-pointer text-gray-700 hover:text-primary-500">Shaving Brush</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/beard-and-moustache-care" className="block cursor-pointer text-gray-700 hover:text-primary-500">Beard and Moustache care</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/aftershave-lotion" className="block cursor-pointer text-gray-700 hover:text-primary-500">Aftershave Lotion/Balm</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/trimmers" className="block cursor-pointer text-gray-700 hover:text-primary-500">Trimmers</Link>
                        </li>
                    </ul>
                </div>

                <div className="w-auto grow bg-[#f7f7f7]">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/hair-care-men" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Hair Care</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/shampoo-hair-care-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">Shampoo</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/conditioner-hair-care-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">Conditioner</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/hair-oil-hair-care-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">Hair Oil</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/hair-color-hair-care-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">Hair Color</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/hair-styling-hair-care-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">Hair Styling</Link>
                        </li>
                    </ul>
                </div>

                <div className="w-auto grow">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/skin-care-men" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Skin Care</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/face-wash-skin-care-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">Face Wash</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/moisturizer-skin-care-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">Moisturizer</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/sunscreen-skin-care-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">Sunscreen</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/face-masks-peels" className="block cursor-pointer text-gray-700 hover:text-primary-500">Face Masks & Peels</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/scrubs-exfoliators-skin-care-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">Scrubs & Exfoliators</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/fairness-skin-care-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">Fairness</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/whitening-cream" className="block cursor-pointer text-gray-700 hover:text-primary-500">Whitening Cream</Link>
                        </li>
                    </ul>
                </div>

                <div className="w-auto grow bg-[#f7f7f7]">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/fragrances" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Fragrances</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/deodorant-roll-on" className="block cursor-pointer text-gray-700 hover:text-primary-500">Deodorant & Roll On</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/body-spray" className="block cursor-pointer text-gray-700 hover:text-primary-500">Body Spray</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/perfume-cologne" className="block cursor-pointer text-gray-700 hover:text-primary-500">Perfume & Cologne</Link>
                        </li>
                    </ul>
                </div>

                <div className="w-auto grow">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/bath-body-men" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Bath & Body</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/body-wash-shower-gel" className="block cursor-pointer text-gray-700 hover:text-primary-500">Body Wash & Shower Gel</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/soap" className="block cursor-pointer text-gray-700 hover:text-primary-500">Soap</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/talcum-powder-bath-body-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">Talcum Powder</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/body-lotion" className="block cursor-pointer text-gray-700 hover:text-primary-500">Body Lotion</Link>
                        </li>
                    </ul>
                </div>

                <div className="w-auto grow bg-[#f7f7f7]">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/shop-by-concern-men" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Shop By Concern</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/anti-dandruff-shop-by-concern-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">Anti-Dandruff</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/anti-hairfall-shop-by-concern-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">Anti-Hairfall</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/anti-aging" className="block cursor-pointer text-gray-700 hover:text-primary-500">Anti-Aging</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/acne-solution" className="block cursor-pointer text-gray-700 hover:text-primary-500">Acne Solution</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/oil-control-shop-by-concern-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">Oil Control</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/dry-skin-care" className="block cursor-pointer text-gray-700 hover:text-primary-500">Dry Skin Care</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/pore-care" className="block cursor-pointer text-gray-700 hover:text-primary-500">Pore Care</Link>
                        </li>
                    </ul>
                </div>

                <div className="w-auto grow">
                    <ul className="top-0 px-4 py-3 h-full">
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/top-brands-men" className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">Top Brands</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/he" className="block cursor-pointer text-gray-700 hover:text-primary-500">HE</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/garnier-top-brands-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">Garnier</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/addidas" className="block cursor-pointer text-gray-700 hover:text-primary-500">Addidas</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/dunhill-london" className="block cursor-pointer text-gray-700 hover:text-primary-500">Dunhill London</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/nautica" className="block cursor-pointer text-gray-700 hover:text-primary-500">Nautica</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/bigen" className="block cursor-pointer text-gray-700 hover:text-primary-500">Bigen</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/neotrogena" className="block cursor-pointer text-gray-700 hover:text-primary-500">Neotrogena</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/nivea-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">Nivea Men</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/fair-and-lovely" className="block cursor-pointer text-gray-700 hover:text-primary-500">Fair And Lovely</Link>
                        </li>
                        <li className="py-[0.1rem]">
                            <Link href="/product-category/ponds-men" className="block cursor-pointer text-gray-700 hover:text-primary-500">Pond's Men</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}



// components/partials/BeautyMenus.jsx
const slugify = (text) =>
    text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')               // Trim - from start of text
        .replace(/-+$/, '');              // Trim - from end of text
