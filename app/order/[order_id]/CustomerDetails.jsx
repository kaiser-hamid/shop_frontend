export default function CustomerDetails({ data }) {
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
                            <td scope="row" className="px-2 md:px-6 py-4 font-medium text-gray-900">{data.customer_name}</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td scope="row" className="px-2 md:px-6 py-4 font-semibold text-gray-900">Phone Number</td>
                            <td scope="row" className="px-2 md:px-6 py-4 font-medium text-gray-900">{data.customer_phone}</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td scope="row" className="px-2 md:px-6 py-4 font-semibold text-gray-900">Email Address</td>
                            <td scope="row" className="px-2 md:px-6 py-4 font-medium text-gray-900">{data.customer_email}</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td scope="row" className="px-2 md:px-6 py-4 font-semibold text-gray-900">Delivery Type</td>
                            <td scope="row" className="px-2 md:px-6 py-4 font-medium text-gray-900">{data.delivery_type}</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td scope="row" className="px-2 md:px-6 py-4 font-semibold text-gray-900">Payment Method</td>
                            <td scope="row" className="px-2 md:px-6 py-4 font-medium text-gray-900">{data.payment_method}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}