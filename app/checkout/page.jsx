import Link from "next/link";

export default function Checkout() {
    return (
        <section className="bg-zinc-50">
            <div className="container py-4 lg:py-8">
                <div className="p-2 lg:p-4 bg-blue-500/20 rounded-sm">
                    <p>
                        Returning customer? <Link href="#" className="text-primary-500">Click here to login</Link>
                    </p>
                </div>
                <h4 className="text-lg font-medium uppercase text-zinc-800 my-2.5 lg:mb-4 lg:mt-6">Billing & Shipping</h4>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 divide-x divide-zinc-200 mb-8 lg:mb-12">
                    <CheckoutForm />
                    <OrderSummary />
                </div>
            </div>
        </section>
    )
}

const CheckoutForm = () => {
    return (
        <div className="col-span-1 lg:col-span-3">
            <div className="flex flex-col gap-y-4">
                {/* Form item group */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                    {/* Form item */}
                    <div>
                        <input type="text" placeholder="Name" className="py-2.5 px-3 block w-full border border-[#c7c7c7] bg-white text-base placeholder:text-gray-500 focus:border-zinc-500 focus:ring-0 focus:outline-0 ring-0" />
                    </div>
                    {/* Form item */}
                    <div>
                        <input type="text" placeholder="Phone" className="py-2.5 px-3 block w-full border border-[#c7c7c7] bg-white text-base placeholder:text-gray-500 focus:border-zinc-500 focus:ring-0 focus:outline-0 ring-0" />
                    </div>
                </div>

                {/* Form item group */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                    {/* Form item */}
                    <div>
                        <select name="country" id="country" className="py-2.5 px-3 block w-full border border-[#c7c7c7] bg-white text-base placeholder:text-gray-500 focus:border-zinc-500 focus:ring-0 focus:outline-0 ring-0">
                            <option value="Dhaka">Dhaka</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Chittagong">Chittagong</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Barishal">Barishal</option>
                        </select>
                    </div>
                    {/* Form item */}
                    <div>
                        <select name="country" id="country" className="py-2.5 px-3 block w-full border border-[#c7c7c7] bg-white text-base placeholder:text-gray-500 focus:border-zinc-500 focus:ring-0 focus:outline-0 ring-0">
                            <option value="Mirpur">Mirpur</option>
                            <option value="Dhanmondi">Dhanmondi</option>
                            <option value="Gulshan">Gulshan</option>
                            <option value="Banani">Banani</option>
                            <option value="Uttara">Uttara</option>
                            <option value="Mohammadpur">Mohammadpur</option>
                            <option value="Motijheel">Motijheel</option>
                        </select>
                    </div>
                </div>

                {/* Form item group */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                    {/* Form item */}
                    <div>
                        <input type="text" placeholder="Address" className="py-2.5 px-3 block w-full border border-[#c7c7c7] bg-white text-base placeholder:text-gray-500 focus:border-zinc-500 focus:ring-0 focus:outline-0 ring-0" />
                    </div>
                    {/* Form item */}
                    <div>
                        <input type="text" placeholder="Email (optional)" className="py-2.5 px-3 block w-full border border-[#c7c7c7] bg-white text-base placeholder:text-gray-500 focus:border-zinc-500 focus:ring-0 focus:outline-0 ring-0" />
                    </div>
                </div>

                {/* Form item group */}
                <div className="grid grid-cols-1 gap-2 lg:gap-4">
                    {/* Form item */}
                    <div>
                        <textarea name="message" placeholder="Order notes (optional)" className="py-2.5 px-3 block w-full border border-[#c7c7c7] bg-white text-base placeholder:text-gray-500 focus:border-zinc-500 focus:ring-0 focus:outline-0 ring-0" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const OrderSummary = () => {
    return (
        <div className="col-span-1 lg:col-span-2 lg:pl-6">
            <div className="flex flex-col gap-y-4">
                {/* Coupon */}
                <div>
                    <button type="button" className="text-lg text-primary-500">Have Coupon / Voucher?</button>
                    <div className="hidden">
                        <input type="text" placeholder="Phone" className="py-2.5 px-3 block w-full border border-[#c7c7c7] bg-white text-base placeholder:text-gray-500 focus:border-zinc-500 focus:ring-0 focus:outline-0 ring-0" />
                    </div>
                </div>

                {/* Shipping method */}
                <div>
                    <h4 className="text-lg font-medium uppercase text-zinc-800 mb-2.5 lg:mb-4">Choose Shipping Method</h4>
                    <div className="flex flex-col gap-y-1">
                        {/* Items */}
                        <div className="flex items-center justify-between gap-x-2">
                            <label className="flex items-center gap-x-1">
                                <input type="radio" name="shipping" />{" "}
                                <span> Outside Dhaka</span>
                            </label>
                            <p>৳ 99.00</p>
                        </div>

                        {/* Items */}
                        <div className="flex items-center justify-between gap-x-2">
                            <label className="flex items-center gap-x-1">
                                <input type="radio" name="shipping" />{" "}
                                <span> Delivery Inside Dhaka</span>
                            </label>
                            <p>৳ 66.00</p>
                        </div>
                    </div>
                    <div className="flex flex-col divide-y divide-zinc-200 my-2.5 lg:my-4">
                        <div className="flex items-center justify-between gap-x-2 py-3">
                            <p className="text-base font-medium text-zinc-800">Sub Total</p>
                            <p className="text-base font-medium text-zinc-800">৳ 425.00</p>
                        </div>

                        <div className="flex items-center justify-between gap-x-2 py-3">
                            <p className="text-lg font-medium text-zinc-800">Total Amount</p>
                            <p className="text-lg font-medium text-primary-500">৳ 154.00</p>
                        </div>
                    </div>
                </div>
                {/* Payment method */}
                <div>
                    <h4 className="text-lg font-medium uppercase text-zinc-800 my-2.5 lg:mb-4 lg:mt-6">Choose Shipping Method</h4>
                    <div className="flex flex-col gap-y-1">
                        <ul>
                            <li>
                                <label className="flex items-center gap-x-1">
                                    <input type="radio" name="method" />
                                    <span>Cash on delivery</span>
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center gap-x-1">
                                    <input type="radio" name="method" />
                                    <span>bKash</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Action */}
                <div>
                    <button type="button" className="w-full py-2 px-8 mt-3 inline-block text-center text-15 font-bold border-2 border-primary-500 text-primary-500 bg-transparent hover:text-white hover:bg-primary-500 transition-all duration-150">Place Order</button>
                </div>
            </div>
        </div>
    )
}
