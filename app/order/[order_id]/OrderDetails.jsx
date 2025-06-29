import Image from 'next/image';
import Link from 'next/link';

export default function OrderDetails({ items }) {
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
                        {items?.map((item, index) => (
                            <tr key={index} className="bg-white border-b">
                                <td scope="row" className="px-1 py-2 font-medium text-gray-900">
                                    <div className="h-20 w-20 relative">
                                        <Image
                                            alt="product-image"
                                            src={item.image || '/assets/images/placeholder/product.png'}
                                            width={256}
                                            height={256}
                                            className="w-full h-full rounded-md object-cover"
                                        />
                                    </div>
                                </td>
                                <td scope="row" className="px-1 md:px-6 py-2 font-medium text-gray-900">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="pb-1 flex gap-x-4 flex-wrap">
                                                    <Link className="hover:text-primary-500" href={`/product/${item.slug}`} target='_blank'>
                                                        {item.name}
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td scope="row" className="px-1 md:px-6 py-4 font-medium text-gray-900">x {item.quantity}</td>
                                <td scope="row" className="px-1 md:px-6 py-4 font-medium text-gray-900">৳ {item.unit_price}</td>
                                <td scope="row" className="px-1 md:px-6 py-4 font-medium text-gray-900">৳ {item.total_price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}