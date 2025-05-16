"use client"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Dialog } from '@headlessui/react';

import { useState } from 'react';
import ProductOfferSlider from '@/components/cards/ProductOfferSlider';

export default function AvailableOffer() {
    return (
        <div className="relative w-full lg:w-full available-offers ml-auto">
            <h2 className="text-md font-semibold text-rr-quartz my-4 mb-8">Available Offers</h2>
            <OfferSlider />
        </div>
    );
}



const OfferSlider = () => {
    const offers = [
        {
            title: 'Shipping Offer',
            slug: 'shipping',
            subtitle: 'Free Shipping',
            description: 'Unilever Beauty Bargain 999',
            expiry: 'Jun 1, 2025',
            dialog: ShippingOfferDialog
        },
        {
            title: 'Special Discount',
            slug: 'special-discount',
            subtitle: '10% Off',
            description: 'On orders above ৳1000',
            expiry: 'Dec 31, 2024',
            dialog: SpecialDiscountDialog
        },
        {
            title: 'Bank Offer',
            slug: 'bank-offer',
            subtitle: '5% Cashback',
            description: 'On City Bank Credit Cards',
            expiry: 'Mar 31, 2025',
            dialog: BankOfferDialog
        },
        {
            title: 'Combo Deal',
            slug: 'combo-deal',
            subtitle: 'Buy 2 Get 1 Free',
            description: 'On selected skincare products',
            expiry: 'Sep 30, 2024',
            dialog: ComboDealDialog
        }
        // Add more offers here if needed
    ];

    // Track which offer is selected
    const [openModal, setOpenModal] = useState(null);

    const settings = {
        className: "available-offers-slider",
        centerMode: true,
        centerPadding: "40px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <ArrowButtonRight />,
        prevArrow: <ArrowButtonLeft />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '25px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '20px',
                }
            }
        ]
    };
    return (
        <>
            <Slider {...settings}>
                {offers.map((offer, idx) => (
                    <ProductOfferSlider offer={offer} />
                ))}
            </Slider>
        </>
    );
}

const ArrowButtonLeft = ({ onClick }) => (
    <button
        type="button"
        className="absolute top-[-47px] right-14 transform -translate-y-1/2 bg-rr-quartz hover:bg-primary-500 text-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer z-1"
        onClick={onClick}
        aria-label='Previous'
    >
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
        </svg>
    </button>
);


const ArrowButtonRight = ({ onClick }) => (
    <button
        type="button"
        className="absolute top-[-47px] right-0 transform -translate-y-1/2 bg-rr-quartz hover:bg-primary-500 text-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer z-1"
        onClick={onClick}
        aria-label='Next'
    >
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
        </svg>
    </button>
);

const ShippingOfferDialog = () => {
    return (
        <Dialog open={openModal === 'shipping'} onClose={() => setOpenModal(null)} className="fixed z-50 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
                <Dialog.Panel className="relative bg-white rounded-lg p-6 w-full max-w-md mx-auto z-10">
                    <button onClick={() => setOpenModal(null)} className="absolute top-2 right-2 text-xl">&times;</button>
                    <h3 className="text-lg font-semibold mb-3">Shipping Information</h3>
                    <div className="text-sm text-gray-700 space-y-2">
                        <p>We offer fast and reliable shipping services to ensure your order reaches you in perfect condition.</p>
                        <p>Standard shipping typically takes 3-5 business days within the continental United States.</p>
                        <p>Express shipping options are available for faster delivery, usually within 1-2 business days.</p>
                        <p>International shipping is available to select countries, with delivery times varying by destination.</p>
                        <p>All orders are processed within 24 hours during business days.</p>
                        <p>Free shipping is available on orders over $50 within the continental US.</p>
                        <p>Tracking information will be provided via email once your order ships.</p>
                        <p>We partner with trusted carriers to ensure secure and timely delivery.</p>
                        <p>Special handling is provided for fragile items at no extra cost.</p>
                        <p>For bulk orders, please contact our customer service for custom shipping arrangements.</p>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};
const SpecialDiscountDialog = () => {
    return (
        <Dialog open={openModal === 'special-discount'} onClose={() => setOpenModal(null)} className="fixed z-50 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
                <Dialog.Panel className="relative bg-white rounded-lg p-6 w-full max-w-md mx-auto z-10">
                    <button onClick={() => setOpenModal(null)} className="absolute top-2 right-2 text-xl">&times;</button>
                    <h3 className="text-lg font-semibold mb-3">Special Discount Details</h3>
                    <div className="text-sm text-gray-700 space-y-2">
                        <p>Get 10% off on your entire purchase when your order total exceeds ৳1000.</p>
                        <p>This offer is valid for all products available on our website.</p>
                        <p>The discount will be automatically applied at checkout when eligible.</p>
                        <p>Cannot be combined with other promotional offers or coupons.</p>
                        <p>Maximum discount amount is capped at ৳500 per order.</p>
                        <p>Offer is valid for both new and existing customers.</p>
                        <p>Returns and exchanges will be subject to the discounted amount paid.</p>
                        <p>We reserve the right to modify or cancel this offer at any time.</p>
                        <p>For any queries regarding this offer, please contact our customer support.</p>
                        <p>Offer valid until December 31, 2024.</p>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};
const BankOfferDialog = () => {
    return (
        <Dialog open={openModal === 'bank-offer'} onClose={() => setOpenModal(null)} className="fixed z-50 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
                <Dialog.Panel className="relative bg-white rounded-lg p-6 w-full max-w-md mx-auto z-10">
                    <button onClick={() => setOpenModal(null)} className="absolute top-2 right-2 text-xl">&times;</button>
                    <h3 className="text-lg font-semibold mb-3">Bank Offer Details</h3>
                    <div className="text-sm text-gray-700 space-y-2">
                        <p>Enjoy 5% cashback on all purchases made with City Bank Credit Cards.</p>
                        <p>This offer is applicable on the full order value including shipping.</p>
                        <p>Cashback will be credited to your card statement within 30 days.</p>
                        <p>Minimum purchase amount of ৳500 required to avail this offer.</p>
                        <p>Maximum cashback amount is ৳1000 per transaction.</p>
                        <p>Offer is valid once per card per month.</p>
                        <p>Valid on both EMI and non-EMI transactions.</p>
                        <p>Not applicable on debit cards or net banking transactions.</p>
                        <p>Bank reserves the right to modify terms without prior notice.</p>
                        <p>Offer valid until March 31, 2025.</p>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};
const ComboDealDialog = () => {
    return (
        <Dialog open={openModal === 'combo-deal'} onClose={() => setOpenModal(null)} className="fixed z-50 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
                <Dialog.Panel className="relative bg-white rounded-lg p-6 w-full max-w-md mx-auto z-10">
                    <button onClick={() => setOpenModal(null)} className="absolute top-2 right-2 text-xl">&times;</button>
                    <h3 className="text-lg font-semibold mb-3">Combo Deal Details</h3>
                    <div className="text-sm text-gray-700 space-y-2">
                        <p>Buy any 2 selected skincare products and get 1 free.</p>
                        <p>This offer is valid only on products marked with "Combo Deal" tag.</p>
                        <p>The lowest priced item will be given free in the combo.</p>
                        <p>Multiple combos can be availed in a single order.</p>
                        <p>Products must be added to cart in multiples of 3 to avail offer.</p>
                        <p>Free product will be automatically added at checkout.</p>
                        <p>Cannot be combined with other ongoing offers or discounts.</p>
                        <p>Returned items will be refunded at actual price paid.</p>
                        <p>We reserve the right to modify the product selection.</p>
                        <p>Offer valid until September 30, 2024.</p>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};




