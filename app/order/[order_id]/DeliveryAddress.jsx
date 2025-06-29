export default function DeliveryAddress({ data }) {
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
                            <td scope="row" className="px-6 py-1 font-medium text-gray-900">{data.address}</td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-1 font-semibold text-gray-900">Area</td>
                            <td scope="row" className="px-6 py-1 font-medium text-gray-900">{data.area}</td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-1 font-semibold text-gray-900">City</td>
                            <td scope="row" className="px-6 py-1 font-medium text-gray-900">{data.city}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}