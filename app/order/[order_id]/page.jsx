export default function Order() {
    return (
        <section className="bg-zinc-50">
            <div className="container flex flex-col gap-y-4 lg:gap-y-8 py-4 lg:py-8">
                {/* success message */}
                <div className="px-4 lg:px-6 py-1.5 lg:py-3.5 rounded-lg bg-green-500/30">
                    <h1 className="text-lg font-medium text-center lg:text-left text-green-700">Your order has been placed successfully!</h1>
                </div>

                {/* order details */}
                <div className="p-4 lg:p-8 rounded-lg bg-white shadow-md border-t border-zinc-100">
                    {/* order number & status*/}
                    <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-x-4">
                        <div className="flex items-center justify-between lg:justify-start gap-x-2">
                            <p className="text-lg lg:text-xl font-bold text-zinc-700">Order Number:</p>
                            <p className="text-lg lg:text-xl font-bold text-primary-500">#{483756564}</p>
                        </div>

                        <div className="flex items-center justify-between lg:justify-start gap-x-2">
                            <p className="text-lg lg:text-xl font-bold text-zinc-700">Status:</p>
                            <p className="text-lg lg:text-xl font-bold text-primary-500">PROCESSING</p>
                        </div>
                    </div>

                    {/* order items */}
                    <div className="my-4">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="p-1.5 lg:p-2 text-left font-medium text-zinc-950 text-center bg-blue-50/50 uppercase">Image</th>
                                        <th className="p-1.5 lg:p-2 text-left font-medium text-zinc-950 text-center bg-blue-50/50 uppercase">Items</th>
                                        <th className="p-1.5 lg:p-2 text-center font-medium text-zinc-950 text-center bg-blue-50/50 uppercase">Qty</th>
                                        <th className="p-1.5 lg:p-2 text-right font-medium text-zinc-950 text-center bg-blue-50/50 uppercase">Price</th>
                                        <th className="p-1.5 lg:p-2 text-right font-medium text-zinc-950 bg-blue-50/50 uppercase">Total Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(3)].map((_, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="p-1.5 lg:p-2">
                                                <img src="/assets/images/beauty/img-69.jpg" alt="Product" className="w-16 h-16 object-cover rounded-lg" />
                                            </td>
                                            <td className="p-1.5 lg:p-2">
                                                <p className="font-medium text-zinc-800">3W Clinic Intensive UV Sunblock Cream SPF 50+PA+++</p>
                                            </td>
                                            <td className="p-1.5 lg:p-2 text-center font-medium text-zinc-800">1</td>
                                            <td className="p-1.5 lg:p-2 text-right font-medium text-zinc-800">৳ 550.00</td>
                                            <td className="p-1.5 lg:p-2 text-right font-medium text-zinc-800">৳ 550.00</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* customer details */}
                <div className="p-2 lg:p-4 rounded-lg bg-white shadow-md border-t border-zinc-100">
                    <div className="my-4">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <tbody>
                                    <tr className="border-b">
                                        <th colSpan={2} className="p-1.5 lg:p-2 text-left bg-blue-50/50 font-semibold text-zinc-950 text-lg lg:text-xl font-bold uppercase">Customer & Order Details</th>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2.5 lg:p-4 text-left font-medium text-zinc-800">Customer Name</td>
                                        <td className="p-2.5 lg:p-4 text-left text-zinc-800">Kaiser Hamid</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2.5 lg:p-4 text-left font-medium text-zinc-800">Phone Number</td>
                                        <td className="p-2.5 lg:p-4 text-left text-zinc-800">+8801717171717</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2.5 lg:p-4 text-left font-medium text-zinc-800">Email Address</td>
                                        <td className="p-2.5 lg:p-4 text-left text-zinc-800">kaiser@gmail.com</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2.5 lg:p-4 text-left font-medium text-zinc-800">Delivery Type</td>
                                        <td className="p-2.5 lg:p-4 text-left text-zinc-800">Outside Dhaka</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2.5 lg:p-4 text-left font-medium text-zinc-800">Payment Method</td>
                                        <td className="p-2.5 lg:p-4 text-left text-zinc-800">Cash on Delivery</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2.5 lg:p-4 text-left font-medium text-zinc-800">Order Note</td>
                                        <td className="p-2.5 lg:p-4 text-left text-zinc-800">N/A</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* order summary */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* left delivery address */}
                    <div className="rounded-lg bg-white shadow-md border-t border-zinc-100 p-2 lg:px-4">
                        <div className="my-4">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <tbody>
                                        <tr className="">
                                            <th colSpan={2} className="p-1 lg:px-2 text-left bg-blue-50/50 font-semibold text-zinc-950 text-lg lg:text-xl font-bold uppercase">Delivery Address</th>
                                        </tr>
                                        <tr className="">
                                            <td className="p-1 lg:px-2 text-left font-medium text-zinc-800">Address</td>
                                            <td className="p-1 lg:px-2 text-left text-zinc-800">Mirpur 10, Dhaka</td>
                                        </tr>
                                        <tr className="">
                                            <td className="p-1 lg:px-2 text-left font-medium text-zinc-800">Area</td>
                                            <td className="p-1 lg:px-2 text-left text-zinc-800">Mirpur</td>
                                        </tr>
                                        <tr className="">
                                            <td className="p-1 lg:px-2 text-left font-medium text-zinc-800">City</td>
                                            <td className="p-1 lg:px-2 text-left text-zinc-800">Dhaka</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* right summery */}
                    <div className="rounded-lg bg-white shadow-md border-t border-zinc-100 p-2 lg:px-4">
                        <div className="my-4">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <tbody>
                                        <tr className="">
                                            <th colSpan={2} className="p-1 lg:px-2 text-left bg-blue-50/50 font-semibold text-zinc-950 text-lg lg:text-xl font-bold uppercase">Order Summary</th>
                                        </tr>
                                        <tr className="">
                                            <td className="p-1 lg:px-2 text-left font-medium text-zinc-800">Order Date</td>
                                            <td className="p-1 lg:px-2 text-left text-zinc-800">2024-01-01</td>
                                        </tr>
                                        <tr className="">
                                            <td className="p-1 lg:px-2 text-left font-medium text-zinc-800">Order Time</td>
                                            <td className="p-1 lg:px-2 text-left text-zinc-800">10:00 AM</td>
                                        </tr>
                                        <tr className="">
                                            <td className="p-1 lg:px-2 text-left font-medium text-zinc-800">Subtotal</td>
                                            <td className="p-1 lg:px-2 text-left text-zinc-800">৳ 550.00</td>
                                        </tr>
                                        <tr className="">
                                            <td className="p-1 lg:px-2 text-left font-medium text-zinc-800">Delivery Charge</td>
                                            <td className="p-1 lg:px-2 text-left text-zinc-800">৳ 99.00</td>
                                        </tr>
                                        <tr className="">
                                            <td className="p-1 lg:px-2 text-left font-bold text-base lg:text-lg text-zinc-800 pt-4 uppercase">Total</td>
                                            <td className="p-1 lg:px-2 text-left font-bold text-base lg:text-lg text-zinc-800 pt-4">৳ 649.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}
