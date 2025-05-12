"use client"

import Link from "next/link";
import { useState } from "react";

export default function Checkout() {
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
                <CheckoutForm />
                <OrderSummary />
            </div>
        </div>
    )
}

const CheckoutForm = () => {
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
                    <select className="form-control bg-white" name="customer_city">
                        <option value="">Select City</option>
                        <option>Bagerhat</option>
                        <option>Bandarban</option>
                        <option>Barguna</option>
                        <option>Barisal</option>
                        <option>Bhola</option>
                        <option>Bogura</option>
                        <option>Brahmanbaria</option>
                        <option>Chandpur</option>
                        <option>Chapainawabganj</option>
                        <option>Chattogram</option>
                        <option>Chuadanga</option>
                        <option>Comilla</option>
                        <option>Coxsbazar</option>
                        <option>Dhaka</option>
                        <option>Dinajpur</option>
                        <option>Faridpur</option>
                        <option>Feni</option>
                        <option>Gaibandha</option>
                        <option>Gazipur</option>
                        <option>Gopalganj</option>
                        <option>Habiganj</option>
                        <option>Jamalpur</option>
                        <option>Jashore</option>
                        <option>Jhalakathi</option>
                        <option>Jhenaidah</option>
                        <option>Joypurhat</option>
                        <option>Khagrachhari</option>
                        <option>Khulna</option>
                        <option>Kishoreganj</option>
                        <option>Kurigram</option>
                        <option>Kushtia</option>
                        <option>Lakshmipur</option>
                        <option>Lalmonirhat</option>
                        <option>Madaripur</option>
                        <option>Magura</option>
                        <option>Manikganj</option>
                        <option>Meherpur</option>
                        <option>Moulvibazar</option>
                        <option>Munshiganj</option>
                        <option>Mymensingh</option>
                        <option>Naogaon</option>
                        <option>Narail</option>
                        <option>Narayanganj</option>
                        <option>Narsingdi</option>
                        <option>Natore</option>
                        <option>Netrokona</option>
                        <option>Nilphamari</option>
                        <option>Noakhali</option>
                        <option>Pabna</option>
                        <option>Panchagarh</option>
                        <option>Patuakhali</option>
                        <option>Pirojpur</option>
                        <option>Rajbari</option>
                        <option>Rajshahi</option>
                        <option>Rangamati</option>
                        <option>Rangpur</option>
                        <option>Satkhira</option>
                        <option>Shariatpur</option>
                        <option>Sherpur</option>
                        <option>Sirajganj</option>
                        <option>Sunamganj</option>
                        <option>Sylhet</option>
                        <option>Tangail</option>
                        <option>Thakurgaon</option>
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
                <div>
                    <input type="text" placeholder="Email (optional)" className="form-control" name="customer_email" />
                </div>
            </div>
            <div className="mt-4">
                <textarea
                    placeholder="Order Note (optional)"
                    className="form-control"
                    name="customer_note"
                    spellCheck={false}
                    autoComplete="off"
                />
            </div>
        </div>
    )
}

const OrderSummary = () => {
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
                        <div className="flex justify-between">
                            <label className="w-fit">
                                <input type="radio" name="shipping_zone" className="mr-2 accent-primary-500" value="outside_dhaka" defaultChecked />
                                Delivery Outside Dhaka
                            </label>
                            <span>৳ 99.00</span>
                        </div>
                        <div className="flex justify-between">
                            <label className="w-fit">
                                <input type="radio" name="shipping_zone" className="mr-2 accent-primary-500" value="inside_dhaka" />
                                Delivery Inside Dhaka
                            </label>
                            <span>৳ 66.00</span>
                        </div>
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
