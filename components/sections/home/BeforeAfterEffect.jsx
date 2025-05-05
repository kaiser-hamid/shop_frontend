"use client";

import { useRef, useState } from "react";

export default function BeforeAfterEffect() {
    const [sliderValue, setSliderValue] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);

    return (
        <section className="container mt-12">
            <div className="grid grid-cols-12 gap-6 items-center">
                <div className="col-span-12 lg:col-span-4 xl:col-span-3">
                    <div className="lg:max-w-xs">
                        <h3 className="text-26 font-bodoni-moda font-bold">BEFORE & AFTER</h3>
                        <p className="text-base mt-4 font-normal text-zinc-600">Fusce venenatis varius consectetur. Ut tempor lectus id mauris feugiat tempus. Integer condimentum congue nunc quis mollis. Vivamus suscipit dolor sed quam malesuada nec aliquet.</p>
                        <a href="aenean-purus.html" className="inline-block mt-4 px-7 py-1.5 text-base font-bold border-2 rounded-full border-zinc-950 hover:text-white hover:bg-[#3a8551] hover:border-[#3a8551] transition-all duration-500 scale-100 group-hover/item:scale-105">Shop all Eyeshadows</a>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-8 xl:col-span-9 relative z-10">
                    <div className="relative w-full h-[300px] lg:h-[550px] cursor-pointer">
                        {/* Background image */}
                        <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover" style={{ backgroundImage: `url('/assets/images/beauty/img-14.jpg')` }}></div>
                        {/* Foreground image, width controlled by slider */}
                        <div
                            id="foreground-img"
                            className="absolute border-r-white border-r-2 top-0 left-0 h-full bg-no-repeat bg-cover"
                            style={{
                                backgroundImage: `url('/assets/images/beauty/img-13.jpg')`,
                                width: `${sliderValue}%`,
                                transition: isDragging ? 'none' : 'width 0.2s',
                            }}
                        ></div>
                        {/* Range slider */}
                        <input
                            id="sliderInput"
                            ref={sliderRef}
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            onChange={e => setSliderValue(Number(e.target.value))}
                            onMouseDown={() => setIsDragging(true)}
                            onMouseUp={() => setIsDragging(false)}
                            onTouchStart={() => setIsDragging(true)}
                            onTouchEnd={() => setIsDragging(false)}
                            className="absolute z-20 flex items-center justify-center w-full h-full m-0 transition-all duration-200 outline-none appearance-none opacity-0 slider-thumb bg-transparent"
                        />
                        {/* Vertical divider */}
                        <div
                            className="absolute inline-block h-full border-t-0 border-r-0 border-b-0 border-l-2 p-1 border-white"
                            style={{ left: `calc(${sliderValue}% - 1px)` }}
                        ></div>
                        {/* Slider button */}
                        <div
                            id="sliderButton"
                            className="absolute z-10 flex items-center justify-center w-10 h-10 p-1 bg-white border border-gray-100 rounded-full pointer-events-none top-1/2 transform -translate-y-1/2 cursor-pointer"
                            style={{ left: `calc(${sliderValue}% - 20px)` }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9.04304 5.79285 2.83594 12 9.04304 18.2071 10.4573 16.7928 5.66436 12 10.4573 7.20706 9.04304 5.79285ZM14.957 18.2072 21.1641 12.0001 14.957 5.793 13.5427 7.20721 18.3356 12.0001 13.5427 16.793 14.957 18.2072Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
