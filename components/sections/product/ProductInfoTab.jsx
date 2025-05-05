"use client"
import { Tab } from "@headlessui/react";

const tabData = [
    {
        label: "Details",
        content: (
            <div>
                <p className=" text-gray-600 text-base lg:mr-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt nunc at eros tempus, ac scelerisque dolor luctus. Vivamus non convallis arcu. Duis vitae scelerisque nulla.
                </p>
                <ul className="text-gray-600 text-base">
                    <p className="mt-6 mb-2">Good For</p>
                    <li className="relative pl-5 text-gray-900 before:content-['√'] before:text-gray-500 before:absolute before:left-0">Comodous in tempor ullamcorper miaculis.</li>
                    <li className="relative pl-5 py-2 text-gray-900 before:content-['√'] before:text-gray-500 before:absolute before:left-0">Another item with a checkmark.</li>
                    <li className="relative pl-5 text-gray-900 before:content-['√'] before:text-gray-500 before:absolute before:left-0">Yet another item with a checkmark.</li>
                </ul>
                <ul className="text-gray-600 text-base">
                    <p className="mt-6 mb-2">Against</p>
                    <li className="relative pl-5 text-gray-900 before:content-['X'] before:text-red-500 before:absolute before:left-0">Pellentesque vitae neque mollis urna mattis laoreet.</li>
                    <li className="relative pl-5 pt-2 text-gray-900 before:content-['X'] before:text-red-500 before:absolute before:left-0">Divamus sit amet purus justo.</li>
                </ul>
            </div>
        ),
    },
    {
        label: "Usage",
        content: (
            <p className=" text-gray-600 text-base lg:mr-10">
                Use the custom tab to tell customers about your product. List product features, technical specifications, and visual attributes. A detailed description will help us show your product to the right customers.
            </p>
        ),
    },
    {
        label: "Ingredients",
        content: (
            <p className=" text-gray-600 text-base lg:mr-10">
                Use the custom tab to tell customers about your product. List product features, technical specifications, and visual attributes. A detailed description will help us show your product to the right customers.
            </p>
        ),
    },
    {
        label: "Shipping & Return",
        content: (
            <div>
                <h2 className="font-bold my-4 text-gray-600 text-base">Returns Policy</h2>
                <p className=" text-gray-600 text-base lg:mr-10">
                    You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).<br />
                    You should expect to receive your refund within four weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. This time period includes the transit time for us to receive your return from the shipper (5 to 10 business days), the time it takes us to process your return once we receive it (3 to 5 business days), and the time it takes your bank to process our refund request (5 to 10 business days).<br />
                    if you need to return an item, simply login to your account, view the order using the "Complete Orders" link under the My Account menu and click the Return Item(s) button. We'll notify you via e-mail of your refund once we've received and processed the returned item.
                </p>
                <h2 className="font-bold my-4 text-gray-600 text-base">Shipping</h2>
                <p className=" text-gray-600 text-base lg:mr-10">
                    We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations. <br />
                    When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose. Depending on the shipping provider you choose, shipping date estimates may appear on the shipping quotes page. <br />
                    Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be found on its detail page. To reflect the policies of the shipping companies we use, all weights will be rounded up to the next full pound.
                </p>
            </div>
        ),
    },
    {
        label: "Custom Tab",
        content: (
            <p className=" text-gray-600 text-base lg:mr-10">
                Use the custom tab to tell customers about your product. List product features, technical specifications, and visual attributes. A detailed description will help us show your product to the right customers.
            </p>
        ),
    },
];

export default function ProductInfoTab() {
    return (
        <div className="my-12 py-8">
            <Tab.Group>
                <Tab.List className="flex justify-center space-x-1 overflow-x-auto">
                    {tabData.map((tab, idx) => (
                        <Tab
                            key={tab.label}
                            className={({ selected }) =>
                                `cursor-pointer pe-6 flex items-center text-base uppercase font-semibold whitespace-nowrap py-4 outline-none ${selected ? "font-bold border-b-2 border-black" : "text-black"}`
                            }
                        >
                            <p className="text-center">{tab.label}</p>
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="pt-4 md:py-6 md:pb-4">
                    {tabData.map((tab, idx) => (
                        <Tab.Panel key={tab.label}>{tab.content}</Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}
