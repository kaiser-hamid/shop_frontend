import Link from "next/link"

export default function NavMenus() {
    return (
        <div className="relative hidden xl:flex items-center xl:justify-between gap-9">
            <ul className="hidden xl:flex items-center xl:justify-center gap-9">
                <li className="group inline-block">
                    <a href="#" className="inline-flex items-center text-15 font-bold text-gray-950 uppercase rounded py-4 hover:text-primary-400 transition-all duration-500">
                        Face
                    </a>
                    <div className="bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <FaceMenus />
                    </div>
                </li>
                <li className="group inline-block">
                    <a href="#" className="inline-flex items-center text-15 font-bold text-gray-950 uppercase rounded py-4 hover:text-primary-400 transition-all duration-500">
                        Skin
                    </a>
                    <div className="bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <SubMenus />
                    </div>
                </li>
                <li className="group inline-block">
                    <a href="#" className="inline-flex items-center text-15 font-bold text-gray-950 uppercase rounded py-4 hover:text-primary-400 transition-all duration-500">
                        Beauty
                    </a>
                    <div className="bg-teal-500 absolute left-0 right-0 bg-red-200 shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-8 group-hover:translate-y-0">
                        <BeautyMenus />
                    </div>
                </li>
                <li className="group inline-block relative">
                    <a href="#" className="inline-flex items-center text-15 font-bold text-gray-950 uppercase rounded py-4 hover:text-primary-400 transition-all duration-500">
                        Blog
                    </a>
                    <div className="absolute left-0 bg-white shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 transform translate-y-4 group-hover:translate-y-0 min-w-[180px]">
                        <ul className="py-2">
                            <li>
                                <Link href="/blog" className="block px-4 py-2 hover:text-primary-400 transition-colors">Latest Posts</Link>
                            </li>
                            <li>
                                <Link href="/blog/categories" className="block px-4 py-2 hover:text-primary-400 transition-colors">Categories</Link>
                            </li>
                            <li>
                                <Link href="/blog/about" className="block px-4 py-2 hover:text-primary-400 transition-colors">About Blog</Link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}


const SubMenus = () => {
    return (
        <div className="grid grid-cols-8 gap-6 max-h-[72vh] bg-white text-black p-4">
            {/* BATH & SHOWER + HOME CARE */}
            <div>
                <h5 className="font-bold uppercase mb-2"><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Bath & Shower</Link></h5>
                <ul>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Scrubs & Exfoliants</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Shower Gels & Body Wash</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Soaps</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Talcum Powder</Link></li>
                </ul>
                <h5 className="font-bold uppercase mt-4 mb-2"><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Home Care</Link></h5>
                <ul>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Candles</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Air Freshener</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Bathroom Essentials</Link></li>
                </ul>
            </div>
            {/* TOOLS & ACCESSORIES + ORAL CARE */}
            <div className="bg-gray-50">
                <h5 className="font-bold uppercase mb-2"><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Tools & Accessories</Link></h5>
                <ul>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Loofahs & Sponges</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Travel Makeup Bag</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Hair straightener</Link></li>
                </ul>
                <h5 className="font-bold uppercase mt-4 mb-2"><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Oral Care</Link></h5>
                <ul>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Toothpaste</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Tooth Brush</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Mouthwash</Link></li>
                </ul>
            </div>
            {/* FEMININE HYGIENE */}
            <div>
                <h5 className="font-bold uppercase mb-2"><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Feminine Hygiene</Link></h5>
                <ul>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Shaving & Hair Removal</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Feminine Cleanser</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Sanitary Napkins</Link></li>
                </ul>
            </div>
            {/* FEMININE CARE */}
            <div className="bg-gray-50">
                <h5 className="font-bold uppercase mb-2"><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Feminine Care</Link></h5>
                <ul>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Breast Cream</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Clothing & More</Link></li>
                </ul>
            </div>
            {/* BODY */}
            <div>
                <h5 className="font-bold uppercase mb-2"><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Body</Link></h5>
                <ul>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Toiletries</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Lotions & Creams</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Talcum Powder</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Deodorants/Roll Ons</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Sunscreen</Link></li>
                </ul>
            </div>
            {/* FACE */}
            <div className="bg-gray-50">
                <h5 className="font-bold uppercase mb-2"><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Face</Link></h5>
                <ul>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Facewash</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Moisturizer</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Face Wipes</Link></li>
                </ul>
            </div>
            {/* HANDS & FEET */}
            <div>
                <h5 className="font-bold uppercase mb-2"><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Hands & Feet</Link></h5>
                <ul>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Feet Puff</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Foot Care</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Foot Set</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Foot Scrub</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Hand Sanitizer</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Hand Wash</Link></li>
                </ul>
            </div>
            {/* WELLNESS */}
            <div className="bg-gray-50">
                <h5 className="font-bold uppercase mb-2"><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Wellness</Link></h5>
                <ul>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Weightloss</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Shop By Concern</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Face Mask</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Sexual Wellness</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Health & Fitness</Link></li>
                </ul>
            </div>
        </div>
    )
}

// components/partials/FaceMenus.jsx
const FaceMenus = () => {
    return (
        <div className="grid grid-cols-8 gap-6 max-h-[72vh] bg-white text-black p-4">
            {/* Example categories for Face */}
            <div>
                <h5 className="font-bold uppercase mb-2"><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Cleansers</Link></h5>
                <ul>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Face Wash</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Makeup Remover</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Micellar Water</Link></li>
                </ul>
                <h5 className="font-bold uppercase mt-4 mb-2"><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Toners</Link></h5>
                <ul>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Hydrating Toner</Link></li>
                    <li><Link href="/category/slug" className="hover:text-primary-400 transition-colors">Exfoliating Toner</Link></li>
                </ul>
            </div>
            {/* Add more columns/categories as needed */}
            {/* ... */}
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

const BeautyMenus = () => {
    return (
        <div className="grid grid-cols-8 gap-6 max-h-[72vh] bg-white text-black p-4">
            {/* MAKEUP */}
            <div>
                <h5 className="font-bold uppercase mb-2">
                    <Link href={`/category/${slugify('Makeup')}`} className="hover:text-primary-400 transition-colors">Makeup</Link>
                </h5>
                <ul>
                    {['Foundation', 'Concealer', 'Blush', 'Highlighter', 'Primer'].map(item => (
                        <li key={item}>
                            <Link href={`/category/${slugify(item)}`} className="hover:text-primary-400 transition-colors">{item}</Link>
                        </li>
                    ))}
                </ul>
                <h5 className="font-bold uppercase mt-4 mb-2">
                    <Link href={`/category/${slugify('Eyes')}`} className="hover:text-primary-400 transition-colors">Eyes</Link>
                </h5>
                <ul>
                    {['Mascara', 'Eyeliner', 'Eyeshadow', 'Eyebrow Pencil'].map(item => (
                        <li key={item}>
                            <Link href={`/category/${slugify(item)}`} className="hover:text-primary-400 transition-colors">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* LIPS */}
            <div className="bg-gray-50">
                <h5 className="font-bold uppercase mb-2">
                    <Link href={`/category/${slugify('Lips')}`} className="hover:text-primary-400 transition-colors">Lips</Link>
                </h5>
                <ul>
                    {['Lipstick', 'Lip Gloss', 'Lip Balm', 'Lip Liner'].map(item => (
                        <li key={item}>
                            <Link href={`/category/${slugify(item)}`} className="hover:text-primary-400 transition-colors">{item}</Link>
                        </li>
                    ))}
                </ul>
                <h5 className="font-bold uppercase mt-4 mb-2">
                    <Link href={`/category/${slugify('Nails')}`} className="hover:text-primary-400 transition-colors">Nails</Link>
                </h5>
                <ul>
                    {['Nail Polish', 'Nail Care', 'Nail Art'].map(item => (
                        <li key={item}>
                            <Link href={`/category/${slugify(item)}`} className="hover:text-primary-400 transition-colors">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* FRAGRANCES */}
            <div>
                <h5 className="font-bold uppercase mb-2">
                    <Link href={`/category/${slugify('Fragrances')}`} className="hover:text-primary-400 transition-colors">Fragrances</Link>
                </h5>
                <ul>
                    {['Perfume', 'Body Mist', 'Deodorant'].map(item => (
                        <li key={item}>
                            <Link href={`/category/${slugify(item)}`} className="hover:text-primary-400 transition-colors">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* HAIR CARE */}
            <div className="bg-gray-50">
                <h5 className="font-bold uppercase mb-2">
                    <Link href={`/category/${slugify('Hair Care')}`} className="hover:text-primary-400 transition-colors">Hair Care</Link>
                </h5>
                <ul>
                    {['Shampoo', 'Conditioner', 'Hair Oil', 'Hair Mask', 'Hair Serum'].map(item => (
                        <li key={item}>
                            <Link href={`/category/${slugify(item)}`} className="hover:text-primary-400 transition-colors">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* BEAUTY TOOLS */}
            <div>
                <h5 className="font-bold uppercase mb-2">
                    <Link href={`/category/${slugify('Beauty Tools')}`} className="hover:text-primary-400 transition-colors">Beauty Tools</Link>
                </h5>
                <ul>
                    {['Brushes', 'Sponges', 'Eyelash Curler', 'Tweezers'].map(item => (
                        <li key={item}>
                            <Link href={`/category/${slugify(item)}`} className="hover:text-primary-400 transition-colors">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* SKIN TREATMENTS */}
            <div className="bg-gray-50">
                <h5 className="font-bold uppercase mb-2">
                    <Link href={`/category/${slugify('Skin Treatments')}`} className="hover:text-primary-400 transition-colors">Skin Treatments</Link>
                </h5>
                <ul>
                    {['Face Masks', 'Serums', 'Spot Treatments'].map(item => (
                        <li key={item}>
                            <Link href={`/category/${slugify(item)}`} className="hover:text-primary-400 transition-colors">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* BATH & BODY */}
            <div>
                <h5 className="font-bold uppercase mb-2">
                    <Link href={`/category/${slugify('Bath & Body')}`} className="hover:text-primary-400 transition-colors">Bath & Body</Link>
                </h5>
                <ul>
                    {['Body Scrub', 'Body Lotion', 'Body Oil'].map(item => (
                        <li key={item}>
                            <Link href={`/category/${slugify(item)}`} className="hover:text-primary-400 transition-colors">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* GIFT SETS */}
            <div className="bg-gray-50">
                <h5 className="font-bold uppercase mb-2">
                    <Link href={`/category/${slugify('Gift Sets')}`} className="hover:text-primary-400 transition-colors">Gift Sets</Link>
                </h5>
                <ul>
                    {['Makeup Kits', 'Skincare Sets', 'Fragrance Sets'].map(item => (
                        <li key={item}>
                            <Link href={`/category/${slugify(item)}`} className="hover:text-primary-400 transition-colors">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


