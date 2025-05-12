import Image from 'next/image';
import Link from 'next/link';

export default function Order() {
    return (
        <div className="container mt-8">
            <div className="mb-3"></div>
            <div className="px-5 py-3 mb-5 bg-[#d4edda] text-[#155724] font-semibold border border-[#c3e6cb] rounded-md">
                <span>Your Order has placed Successfully.</span>
            </div>
            <div className="w-full bg-[#FBF5F6] p-2 md:p-6 rounded-lg mb-10">
                {/* status & order number */}
                <OrderStatus />

                {/* order details */}
                <OrderDetails />

                {/* customer & order details */}
                <CustomerDetails />

                {/* delivery address & order summary */}
                <div className="flex flex-col md:flex-row gap-x-4">
                    {/* delivery address */}
                    <DeliveryAddress />

                    {/* order summary */}
                    <OrderSummary />
                </div>

                {/* total */}
                <Total />
            </div>
        </div>
    );
}

const OrderStatus = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mb-1 px-4 pb-5">
            <h2 className="text-md md:text-xl font-bold text-gray-700">
                Order Number :<span className="text-primary-500 ml-4">#6094359</span>
            </h2>
            <div className="flex items-center gap-4 mb-1">
                <h2 className="text-md md:text-xl font-bold text-gray-700">
                    Status : <span className="text-primary-500 ml-4 uppercase">processing</span>
                </h2>
            </div>
        </div>
    )
}

const OrderDetails = () => {
    return (
        <div className="bg-white rounded-lg mb-6 shadow-lg">
            <div className="p-2 md:px-4 md:py-3 flex gap-x-8 text-gray-600">
                <table className="w-full text-xs md:text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-1 md:px-6 py-3">Image</th>
                            <th scope="col" className="px-1 md:px-6 py-3">Items</th>
                            <th scope="col" className="px-1 md:px-6 py-3">QTY</th>
                            <th width="15%" scope="col" className="px-1 py-3 text-center">Price</th>
                            <th width="15%" scope="col" className="px-1 py-3">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b">
                            <td scope="row" className="px-1 py-2 font-medium text-gray-900">
                                <div className="h-20 w-20 relative">
                                    <Image
                                        alt="product-image"
                                        src="/assets/images/product/buy-together-1.webp"
                                        width={256}
                                        height={256}
                                        className="rounded-md object-cover"
                                    />
                                </div>
                            </td>
                            <td scope="row" className="px-1 md:px-6 py-2 font-medium text-gray-900">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="pb-1 flex gap-x-4 flex-wrap">
                                                <Link className="hover:text-primary-500" href="/product/slug">
                                                    Parachute Naturale Nourishing Care Shampoo with Aloe Vera & Coconut Milk, For Strong & Silky Hair, Smoothens Hair, Paraben Free, 100% Vegan, All Hair Types, 160 ml
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td scope="row" className="px-1 md:px-6 py-4 font-medium text-gray-900">x 1</td>
                            <td scope="row" className="px-1 md:px-6 py-4 font-medium text-gray-900">৳ 110.00</td>
                            <td scope="row" className="px-1 md:px-6 py-4 font-medium text-gray-900">৳ 110.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const CustomerDetails = () => {
    return (
        <div className="bg-white rounded-lg mb-6 shadow-lg">
            <div className="px-4 py-3 flex gap-x-8 text-gray-600">
                <table className="w-full text-xs md:text-sm text-left text-gray-500">
                    <thead className="text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th colSpan={2} className="px-2 md:px-6 py-2 text-md md:text-lg">Customer & Order Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b">
                            <td scope="row" className="px-2 md:px-6 py-4 font-semibold text-gray-900">Customer Name</td>
                            <td scope="row" className="px-2 md:px-6 py-4 font-medium text-gray-900">Dr. Mohammad Younus</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td scope="row" className="px-2 md:px-6 py-4 font-semibold text-gray-900">Phone Number</td>
                            <td scope="row" className="px-2 md:px-6 py-4 font-medium text-gray-900">8801818765432</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td scope="row" className="px-2 md:px-6 py-4 font-semibold text-gray-900">Email Address</td>
                            <td scope="row" className="px-2 md:px-6 py-4 font-medium text-gray-900">yunus@hasina.com</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td scope="row" className="px-2 md:px-6 py-4 font-semibold text-gray-900">Delivery Type</td>
                            <td scope="row" className="px-2 md:px-6 py-4 font-medium text-gray-900">Outside Dhaka</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td scope="row" className="px-2 md:px-6 py-4 font-semibold text-gray-900">Payment Method</td>
                            <td scope="row" className="px-2 md:px-6 py-4 font-medium text-gray-900">Cash on Delivery</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td scope="row" className="px-2 md:px-6 py-4 font-semibold text-gray-900">Note</td>
                            <td scope="row" className="px-2 md:px-6 py-4 font-medium text-gray-900">N/A</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const DeliveryAddress = () => {
    return (
        <div className="bg-white rounded-lg mb-6 shadow-lg w-full md:w-1/2">
            <div className="px-4 py-3 flex gap-x-8 text-gray-600">
                <table className="w-full text-xs md:text-sm text-left text-gray-500">
                    <thead className="text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th colSpan={2} className="px-6 py-2 text-lg">Delivery Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-1 font-semibold text-gray-900">ADDRESS</td>
                            <td scope="row" className="px-6 py-1 font-medium text-gray-900">Grameen Bank</td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-1 font-semibold text-gray-900">Area</td>
                            <td scope="row" className="px-6 py-1 font-medium text-gray-900">Raozan</td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-1 font-semibold text-gray-900">City</td>
                            <td scope="row" className="px-6 py-1 font-medium text-gray-900">Chattogram</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const OrderSummary = () => {
    return (
        <div className="bg-white rounded-lg mb-6 shadow-lg w-full md:w-1/2">
            <div className="px-4 py-3 flex gap-x-8 text-gray-600">
                <table className="w-full text-xs md:text-sm text-left text-gray-500">
                    <thead className="text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th colSpan={2} className="px-6 py-2 text-lg">Order Summary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-1 font-semibold text-gray-900">Order Date</td>
                            <td scope="row" className="px-6 py-1 font-medium text-gray-900">May 12, 2025</td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-1 font-semibold text-gray-900">Order Time</td>
                            <td scope="row" className="px-6 py-1 font-medium text-gray-900">06:35 pm</td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-1 font-semibold text-gray-900">Sub Total</td>
                            <td scope="row" className="px-6 py-1 font-medium text-gray-900">৳ 110.00</td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-1 font-semibold text-gray-900">Delivery Fee</td>
                            <td scope="row" className="px-6 py-1 font-medium text-gray-900">৳ 99.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const Total = () => {
    return (
        <div className="flex gap-x-4 bg-white rounded-lg shadow-lg">
            <div className="md:w-1/2"></div>
            <div className="w-full md:w-1/2">
                <div className="px-4 py-3 flex text-gray-600">
                    <table className="w-full text-xs md:text-sm text-left text-gray-500">
                        <thead className="text-gray-700 uppercase">
                            <tr>
                                <th colSpan={2} className="px-6 py-1 text-md">Total</th>
                                <th colSpan={2} className="px-2 py-1 text-md">৳ 209.00</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}
