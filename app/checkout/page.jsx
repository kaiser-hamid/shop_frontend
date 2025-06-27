import CheckoutForm from "./CheckoutForm";

export async function getCities() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data/cities-with-areas`);

        const data = await response.json();

        if (!data.status) {
            throw new Error('Cities not found');
        }

        return data.data;
    } catch (error) {
        console.error('Error fetching cities:', error.message);
        return null;
    }
}

export async function generateMetadata() {
    return {
        title: 'Checkout',
        description: 'Complete your purchase securely with our easy checkout process.',
        keywords: 'checkout, payment, purchase, secure payment, online shopping',
        openGraph: {
            title: 'Checkout',
            description: 'Complete your purchase securely with our easy checkout process.',
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title: 'Checkout',
            description: 'Complete your purchase securely with our easy checkout process.',
        },
        alternates: {
            canonical: '/checkout',
        },
    };
}

export default async function CheckoutPage() {

    const { cities, areas } = await getCities();

    return (
        <div className="container mb-10">
            <CheckoutForm cities={cities} areas={areas} />
        </div>
    )
}