import Link from "next/link"
import PageOverlay from "../layouts/PageOverlay"
export default function NavMenus() {
    return (
        <div className="mt-3 py-3 -mx-3 hidden lg:flex lg:flex-row lg:justify-between lg:mt-0 lg:mx-1 relative items-center">
            <ul className="hidden flex-1 lg:flex items-center lg:justify-between">
                <li className="group inline-block">
                    <a href="#" className="my-1 lg:px-1 xl:px-2 px-3 text-xs group-hover:text-primary-500 font-medium  leading-5 md:my-0">
                        Makeup
                    </a>
                    <div className="text-[0.8rem] bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <BeautyMenus />
                    </div>
                    <PageOverlay />
                </li>
                <li className="group inline-block">
                    <a href="#" className="my-1 lg:px-1 xl:px-2 px-3 text-xs group-hover:text-primary-500 font-medium  leading-5 md:my-0">
                        Skin
                    </a>
                    <div className="text-[0.8rem] bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <BeautyMenus />
                    </div>
                    <PageOverlay />
                </li>
                <li className="group inline-block">
                    <a href="#" className="my-1 lg:px-1 xl:px-2 px-3 text-xs group-hover:text-primary-500 font-medium  leading-5 md:my-0">
                        Hair
                    </a>
                    <div className="text-[0.8rem] bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <BeautyMenus />
                    </div>
                    <PageOverlay />
                </li>
                <li className="group inline-block">
                    <a href="#" className="my-1 lg:px-1 xl:px-2 px-3 text-xs group-hover:text-primary-500 font-medium  leading-5 md:my-0">
                        Personal Care
                    </a>
                    <div className="text-[0.8rem] bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <BeautyMenus />
                    </div>
                    <PageOverlay />
                </li>
                <li className="group inline-block">
                    <a href="#" className="my-1 lg:px-1 xl:px-2 px-3 text-xs group-hover:text-primary-500 font-medium  leading-5 md:my-0">
                        Mom & Baby
                    </a>
                    <div className="text-[0.8rem] bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <BeautyMenus />
                    </div>
                    <PageOverlay />
                </li>
                <li className="group inline-block">
                    <a href="#" className="my-1 lg:px-1 xl:px-2 px-3 text-xs group-hover:text-primary-500 font-medium  leading-5 md:my-0">
                        Fragrance
                    </a>
                    <div className="text-[0.8rem] bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <BeautyMenus />
                    </div>
                    <PageOverlay />
                </li>

                {/* button nav link dropdown*/}
                <li className="group inline-block p-1 pt-[3px] h-[32px] rounded-full text-white bg-blue-600 uppercase">
                    <a href="#" className="my-1 lg:px-1 xl:px-2 px-3 text-xs font-semibold  leading-5 md:my-0">
                        Undergarments
                    </a>
                    <div className="text-[0.8rem] bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <BeautyMenus />
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
                <li className="relative group inline-block p-1 pt-[3px] h-[32px] rounded-full text-white bg-purple-600 uppercase">
                    <a href="#" className="my-1 lg:px-1 xl:px-2 px-3 text-xs font-semibold  leading-5 md:my-0">
                        Juwellerey
                    </a>
                    <div className="text-[0.8rem] bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <SimpleMenus />
                    </div>
                    <PageOverlay />
                </li>

                {/* button nav link */}
                <li className="group inline-block p-1 pt-[3px] h-[32px] rounded-full text-white bg-teal-600 uppercase">
                    <Link href="/crealance-sale" className="my-1 lg:px-1 xl:px-2 px-3 text-xs font-semibold  leading-5 md:my-0">
                        Crealance sale
                    </Link>
                </li>

                {/* button nav link dropdown */}
                <li className="group inline-block p-1 pt-[3px] h-[32px] rounded-full text-white bg-green-700/90 uppercase">
                    <a href="#" className="my-1 lg:px-1 xl:px-2 px-3 text-xs font-semibold  leading-5 md:my-0">
                        Men
                    </a>
                    <div className="text-[0.8rem] bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <BeautyMenus />
                    </div>
                    <PageOverlay />
                </li>
            </ul>
        </div >
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

const BeautyMenus = () => {
    return (
        <div className="grid grid-cols-8 gap-6 max-h-[72vh] bg-white text-black p-4">
            {/* MAKEUP */}
            <div>
                <h5 className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">
                    <Link href={`/category/${slugify('Makeup')}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">Makeup</Link>
                </h5>
                <ul>
                    {['Foundation', 'Concealer', 'Blush', 'Highlighter', 'Primer'].map(item => (
                        <li key={item} className="py-[0.1rem]">
                            <Link href={`/category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                        </li>
                    ))}
                </ul>
                <h5 className="font-bold uppercase mt-4 mb-2">
                    <Link href={`/category/${slugify('Eyes')}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">Eyes</Link>
                </h5>
                <ul>
                    {['Mascara', 'Eyeliner', 'Eyeshadow', 'Eyebrow Pencil'].map(item => (
                        <li key={item} className="py-[0.1rem]">
                            <Link href={`/category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* LIPS */}
            <div className="bg-gray-50">
                <h5 className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">
                    <Link href={`/category/${slugify('Lips')}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">Lips</Link>
                </h5>
                <ul>
                    {['Lipstick', 'Lip Gloss', 'Lip Balm', 'Lip Liner'].map(item => (
                        <li key={item} className="py-[0.1rem]">
                            <Link href={`/category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                        </li>
                    ))}
                </ul>
                <h5 className="font-bold uppercase mt-4 mb-2">
                    <Link href={`/category/${slugify('Nails')}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">Nails</Link>
                </h5>
                <ul>
                    {['Nail Polish', 'Nail Care', 'Nail Art'].map(item => (
                        <li key={item} className="py-[0.1rem]">
                            <Link href={`/category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* FRAGRANCES */}
            <div>
                <h5 className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">
                    <Link href={`/category/${slugify('Fragrances')}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">Fragrances</Link>
                </h5>
                <ul>
                    {['Perfume', 'Body Mist', 'Deodorant'].map(item => (
                        <li key={item} className="py-[0.1rem]">
                            <Link href={`/category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* HAIR CARE */}
            <div className="bg-gray-50">
                <h5 className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">
                    <Link href={`/category/${slugify('Hair Care')}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">Hair Care</Link>
                </h5>
                <ul>
                    {['Shampoo', 'Conditioner', 'Hair Oil', 'Hair Mask', 'Hair Serum'].map(item => (
                        <li key={item} className="py-[0.1rem]">
                            <Link href={`/category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* BEAUTY TOOLS */}
            <div>
                <h5 className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">
                    <Link href={`/category/${slugify('Beauty Tools')}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">Beauty Tools</Link>
                </h5>
                <ul>
                    {['Brushes', 'Sponges', 'Eyelash Curler', 'Tweezers'].map(item => (
                        <li key={item} className="py-[0.1rem]">
                            <Link href={`/category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* SKIN TREATMENTS */}
            <div className="bg-gray-50">
                <h5 className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">
                    <Link href={`/category/${slugify('Skin Treatments')}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">Skin Treatments</Link>
                </h5>
                <ul>
                    {['Face Masks', 'Serums', 'Spot Treatments'].map(item => (
                        <li key={item} className="py-[0.1rem]">
                            <Link href={`/category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* BATH & BODY */}
            <div>
                <h5 className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">
                    <Link href={`/category/${slugify('Bath & Body')}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">Bath & Body</Link>
                </h5>
                <ul>
                    {['Body Scrub', 'Body Lotion', 'Body Oil'].map(item => (
                        <li key={item} className="py-[0.1rem]">
                            <Link href={`/category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* GIFT SETS */}
            <div className="bg-gray-50">
                <h5 className="block font-semibold text-[0.75rem] uppercase cursor-pointer text-black">
                    <Link href={`/category/${slugify('Gift Sets')}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">Gift Sets</Link>
                </h5>
                <ul>
                    {['Makeup Kits', 'Skincare Sets', 'Fragrance Sets'].map(item => (
                        <li key={item} className="py-[0.1rem]">
                            <Link href={`/category/${slugify(item)}`} className="block cursor-pointer text-gray-700 hover:text-primary-500">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


const SimpleMenus = () => {
    return (
        <div className="absolute left-0 bg-white text-[0.8rem] shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-4 group-hover:translate-y-0 min-w-[180px]">
            <ul className="top-0 bg-white shadow px-4 py-3 h-full">
                <li className="py-[0.1rem]">
                    <Link href="/blog" className="block cursor-pointer text-gray-700 hover:text-primary-500 capitalize">Latest Posts</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/blog/categories" className="block cursor-pointer text-gray-700 hover:text-primary-500 capitalize">Categories</Link>
                </li>
                <li className="py-[0.1rem]">
                    <Link href="/blog/about" className="block cursor-pointer text-gray-700 hover:text-primary-500 capitalize">About Blog</Link>
                </li>
            </ul>
        </div>
    )
}