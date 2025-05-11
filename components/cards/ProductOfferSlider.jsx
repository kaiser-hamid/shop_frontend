export default function ProductOfferSlider({ offer }) {
    return (
        <div className="px-2 cursor-pointer overflow-hidden w-full inline-block" tabIndex={-1}>
            <div className="min-h-[120px] offer-item relative rounded-lg px-3 py-2 bg-pink-50 flex gap-2 md:gap-4 border border-pink-500">
                <div className="self-center">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-8 md:w-12 h-8 md:h-12" color="#FF3D71" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(255, 61, 113)' }}>
                        <g id="Delivery_Truck">
                            <g>
                                <path d="M21.47,11.185l-1.03-1.43a2.5,2.5,0,0,0-2.03-1.05H14.03V6.565a2.5,2.5,0,0,0-2.5-2.5H4.56a2.507,2.507,0,0,0-2.5,2.5v9.94a1.5,1.5,0,0,0,1.5,1.5H4.78a2.242,2.242,0,0,0,4.44,0h5.56a2.242,2.242,0,0,0,4.44,0h1.22a1.5,1.5,0,0,0,1.5-1.5v-3.87A2.508,2.508,0,0,0,21.47,11.185ZM7,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,7,18.935Zm6.03-1.93H9.15a2.257,2.257,0,0,0-4.3,0H3.56a.5.5,0,0,1-.5-.5V6.565a1.5,1.5,0,0,1,1.5-1.5h6.97a1.5,1.5,0,0,1,1.5,1.5ZM17,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,17,18.935Zm3.94-2.43a.5.5,0,0,1-.5.5H19.15a2.257,2.257,0,0,0-4.3,0h-.82v-7.3h4.38a1.516,1.516,0,0,1,1.22.63l1.03,1.43a1.527,1.527,0,0,1,.28.87Z"></path>
                                <path d="M18.029,12.205h-2a.5.5,0,0,1,0-1h2a.5.5,0,0,1,0,1Z"></path>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-center">
                        <h3 className="font-medium text-sm md:text-md">{offer.title}</h3>
                    </div>
                    <div className="flex justify-between mt-1">
                        <h3 className="text-sm font-medium">{offer.subtitle}</h3>
                    </div>
                    <div className="flex justify-between mt-1">
                        <p className="text-xs mb-0 offer-con">{offer.description}</p>
                    </div>
                    <div className="flex justify-between mt-1 md:mt-2">
                        <p className="text-xs mb-0">Offer Expiry Date: {offer.expiry}</p>
                    </div>
                </div>
                <div className="top-cut"></div>
                <div className="bottom-cut"></div>
            </div>
        </div>
    )
}
