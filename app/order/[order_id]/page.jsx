
import { notFound } from 'next/navigation';
import OrderStatus from './OrderStatus';
import OrderDetails from './OrderDetails';
import CustomerDetails from './CustomerDetails';
import DeliveryAddress from './DeliveryAddress';
import OrderSummary from './OrderSummary';
import TotalAmount from './TotalAmount';

export async function getOrderDetails(order_id) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout/order/${order_id}`);

        const data = await response.json();

        if (!data.status) {
            throw new Error(data?.message || 'Order details not found');
        }

        return data.data;
    } catch (error) {
        console.error('Error fetching order details:', error.message);
        notFound();
    }
}

export async function generateMetadata() {
    return {
        title: 'Order Details',
        description: 'Order Details',
        keywords: 'order, details, order details, order details page',
        openGraph: {
            title: 'Order Details',
            description: 'Order Details',
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title: 'Order Details',
            description: 'Order Details',
        }
    };
}

export default async function Order({ params }) {
    const { order_id } = await params;

    const orderDetails = await getOrderDetails(order_id);

    return (
        <div className="container mt-8">
            <div className="mb-3"></div>
            <div className="px-5 py-3 mb-5 bg-[#d4edda] text-[#155724] font-semibold border border-[#c3e6cb] rounded-md">
                <span>Your Order has been placed Successfully.</span>
            </div>
            <div className="w-full bg-[#FBF5F6] p-2 md:p-6 rounded-lg mb-10">
                {/* status & order number */}
                <OrderStatus orderNumber={orderDetails.order_number} status={orderDetails.order_status} />

                {/* order details */}
                <OrderDetails items={orderDetails.order_details} />

                {/* customer & order details */}
                <CustomerDetails data={orderDetails} />

                {/* delivery address & order summary */}
                <div className="flex flex-col md:flex-row gap-x-4">
                    {/* delivery address */}
                    <DeliveryAddress data={orderDetails} />

                    {/* order summary */}
                    <OrderSummary data={orderDetails} />
                </div>

                {/* total */}
                <TotalAmount data={orderDetails} />
            </div>
        </div>
    );
}