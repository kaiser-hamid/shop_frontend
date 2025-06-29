export default function TotalAmount({ data }) {
    return (
        <div className="flex gap-x-4 bg-white rounded-lg shadow-lg">
            <div className="md:w-1/2"></div>
            <div className="w-full md:w-1/2">
                <div className="px-4 py-3 flex text-gray-600">
                    <table className="w-full text-xs md:text-sm text-left text-gray-500">
                        <thead className="text-gray-700 uppercase">
                            <tr>
                                <th colSpan={2} className="px-6 py-1 text-md">Total</th>
                                <th colSpan={2} className="px-2 py-1 text-md">৳ {data.order_total}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}
