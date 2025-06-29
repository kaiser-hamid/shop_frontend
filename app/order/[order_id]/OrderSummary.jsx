export default function OrderSummary({ data }) {
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
                            <td scope="row" className="px-6 py-1 font-medium text-gray-900">{data.order_date}</td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-1 font-semibold text-gray-900">Order Time</td>
                            <td scope="row" className="px-6 py-1 font-medium text-gray-900">{data.order_time}</td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-1 font-semibold text-gray-900">Sub Total</td>
                            <td scope="row" className="px-6 py-1 font-medium text-gray-900">৳ {data.subtotal}</td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-1 font-semibold text-gray-900">Delivery Fee</td>
                            <td scope="row" className="px-6 py-1 font-medium text-gray-900">৳ {data.delivery_fee}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}