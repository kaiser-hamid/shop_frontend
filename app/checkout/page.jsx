"use client"

import Link from "next/link";
import { useState } from "react";

export default function Checkout() {
    const [customer_city, setCustomerCity] = useState("");

    return (
        <div className="container mb-10">
            <div className="flex gap-x-3 bg-[#d9edf7] px-4 py-2 my-4 border border-[#bce8f1]">
                <h4>Returning Customer ?</h4>
                <Link className="text-primary-500" href="/login?from=/checkout">
                    Click here to login
                </Link>
            </div>
            <h2 className="text-lg font-medium py-4">BILLING &amp; SHIPPING</h2>
            <div className="flex flex-wrap md:flex-nowrap">
                <CheckoutForm customer_city={customer_city} setCustomerCity={setCustomerCity} />
                <OrderSummary customer_city={customer_city} />
            </div>
        </div>
    )
}

const CheckoutForm = ({ customer_city, setCustomerCity }) => {
    // City list with Dhaka first
    const cityOptions = [
        { label: 'Dhaka', value: 1 },
        { label: 'Bagerhat', value: 2 },
        { label: 'Bandarban', value: 3 },
        { label: 'Barguna', value: 4 },
        { label: 'Barisal', value: 5 },
        { label: 'Bhola', value: 6 },
        { label: 'Bogura', value: 7 },
        { label: 'Brahmanbaria', value: 8 },
        { label: 'Chandpur', value: 9 },
        { label: 'Chapainawabganj', value: 10 },
        { label: 'Chattogram', value: 11 },
        { label: 'Chuadanga', value: 12 },
        { label: 'Comilla', value: 13 },
        { label: 'Coxsbazar', value: 14 },
        { label: 'Dinajpur', value: 15 },
        { label: 'Faridpur', value: 16 },
        { label: 'Feni', value: 17 },
        { label: 'Gaibandha', value: 18 },
        { label: 'Gazipur', value: 19 },
        { label: 'Gopalganj', value: 20 },
        { label: 'Habiganj', value: 21 },
        { label: 'Jamalpur', value: 22 },
        { label: 'Jashore', value: 23 },
        { label: 'Jhalakathi', value: 24 },
        { label: 'Jhenaidah', value: 25 },
        { label: 'Joypurhat', value: 26 },
        { label: 'Khagrachhari', value: 27 },
        { label: 'Khulna', value: 28 },
        { label: 'Kishoreganj', value: 29 },
        { label: 'Kurigram', value: 30 },
        { label: 'Kushtia', value: 31 },
        { label: 'Lakshmipur', value: 32 },
        { label: 'Lalmonirhat', value: 33 },
        { label: 'Madaripur', value: 34 },
        { label: 'Magura', value: 35 },
        { label: 'Manikganj', value: 36 },
        { label: 'Meherpur', value: 37 },
        { label: 'Moulvibazar', value: 38 },
        { label: 'Munshiganj', value: 39 },
        { label: 'Mymensingh', value: 40 },
        { label: 'Naogaon', value: 41 },
        { label: 'Narail', value: 42 },
        { label: 'Narayanganj', value: 43 },
        { label: 'Narsingdi', value: 44 },
        { label: 'Natore', value: 45 },
        { label: 'Netrokona', value: 46 },
        { label: 'Nilphamari', value: 47 },
        { label: 'Noakhali', value: 48 },
        { label: 'Pabna', value: 49 },
        { label: 'Panchagarh', value: 50 },
        { label: 'Patuakhali', value: 51 },
        { label: 'Pirojpur', value: 52 },
        { label: 'Rajbari', value: 53 },
        { label: 'Rajshahi', value: 54 },
        { label: 'Rangamati', value: 55 },
        { label: 'Rangpur', value: 56 },
        { label: 'Satkhira', value: 57 },
        { label: 'Shariatpur', value: 58 },
        { label: 'Sherpur', value: 59 },
        { label: 'Sirajganj', value: 60 },
        { label: 'Sunamganj', value: 61 },
        { label: 'Sylhet', value: 62 },
        { label: 'Tangail', value: 63 },
        { label: 'Thakurgaon', value: 64 },
    ];

    return (
        <div className="w-full md:w-3/5 md:pr-8 md:border-r-2 md:border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                    <input type="text" placeholder="Name" className="form-control" name="customer_name" />
                </div>
                <div>
                    <input type="text" placeholder="Phone" className="form-control" name="customer_phone" />
                </div>
                <div>
                    <select
                        className="form-control bg-white"
                        name="customer_city"
                        value={customer_city}
                        onChange={e => setCustomerCity(e.target.value)}
                    >
                        <option value="">Select City</option>
                        {cityOptions.map(city => (
                            <option key={city.value} value={city.value}>{city.label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <select className="form-control bg-white" name="customer_town">
                        <option value="">Select Area</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder="Address" className="form-control" name="customer_address" />
                </div>
                {customer_city !== "" && customer_city != 1 && (
                    <div>
                        <input type="text" placeholder="Transaction Number" className="form-control" name="customer_email" />
                    </div>
                )}
            </div>

        </div>
    )
}

const OrderSummary = ({ customer_city }) => {
    const [showCoupon, setShowCoupon] = useState(false);
    const [couponCode, setCouponCode] = useState('');
    return (
        <div className="w-full md:w-2/5 md:ml-3">
            <div className="md:ml-4 mb-4">
                <button type="button" onClick={() => setShowCoupon(!showCoupon)} className="text-primary-500 text-lg">
                    Have Coupon / Voucher?
                </button>
                {showCoupon && (
                    <div className="flex flex-col">
                        <div className={`flex justify-between mt-2`}>
                            <div className="w-[75%]">
                                <input
                                    type="text"
                                    placeholder="Coupon Code"
                                    className="form-control"
                                    name="couponCode"
                                />
                            </div>
                            <button
                                className="bg-primary-500 w-1/5 text-white rounded-xl h-11 hover:bg-primary-600 transition-all duration-300"
                                type="button"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                )}

            </div>
            <div className="border-b-2 border-gray-300 pb-4 md:ml-4">
                <h2 className="mb-3 text-lg font-medium">Choose Shipping Method</h2>
                <div className="flex flex-col">
                    <div>
                        {Number(customer_city) === 1 ? (
                            <div className="flex justify-between">
                                <label className="w-fit">
                                    <input type="radio" name="shipping_zone" className="mr-2 accent-primary-500" value="inside_dhaka" />
                                    Delivery Inside Dhaka
                                </label>
                                <span>৳ 66.00</span>
                            </div>
                        ) : (
                            <div className="flex justify-between">
                                <label className="w-fit">
                                    <input type="radio" name="shipping_zone" className="mr-2 accent-primary-500" value="outside_dhaka" defaultChecked />
                                    Delivery Outside Dhaka
                                </label>
                                <span>৳ 99.00</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-between mt-8">
                    <span>Total MRP</span>
                    <span>৳ 110.00</span>
                </div>
            </div>
            <div className="flex justify-between mt-3 md:pl-4">
                <span className="text-lg font-medium">Total Amount</span>
                <span className="text-primary-500 text-lg font-semibold">৳ 209.00</span>
            </div>
            <div className="md:pl-4">
                <h2 className="mb-3 mt-5 font-medium text-lg">Choose Payment Method</h2>
                <div className="flex flex-col">
                    <label className="w-fit">
                        <input type="radio" name="payment_method" className="mr-2 accent-primary-500" value="cod" defaultChecked />
                        Cash on delivery
                    </label>
                    <label className="w-fit cursor-not-allowed text-gray-300">
                        <input type="radio" disabled={true} name="payment_method" className="mr-2 accent-primary-500" value="pther" />
                        Other methods
                    </label>

                </div>
                <button className="bg-primary-500 p-3 w-full text-white rounded-xl mt-5 uppercase hover:bg-primary-600 transition-all duration-300" type="button">
                    Place Order
                </button>
            </div>
        </div>
    )
}
