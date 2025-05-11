export default function CategoryBanner() {
    return (
        <div
            className="text-white text-xl h-[120px] mb-2 md:mb-8 flex justify-center items-center"
            style={{
                backgroundImage: 'url(/assets/images/banner/category-banner.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
            }}
        />
    );
}

