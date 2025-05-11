"use client"
import { Tab } from "@headlessui/react";
import { UserIcon, QuestionMarkCircleIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

export default function ProductAdditionalInfo() {
    const tabData = [
        {
            label: "Description",
            content: Description
        },
        {
            label: "Reviews (2)",
            content: Reviews
        },
        {
            label: "Q&A (1)",
            content: QnA
        },
    ];

    return (
        <div className="flex flex-wrap mt-16">
            <div className="w-full">
                <Tab.Group>
                    {/* Tab List */}
                    <Tab.List className="flex flex-wrap mb-0 list-none pt-3 pb-4 flex-row w-full lg:w-3/4 mx-auto gap-2">
                        {tabData.map((tab, idx) => (
                            <Tab
                                key={tab.label}
                                className={({ selected }) =>
                                    `-mb-px last:mr-0 flex-auto text-center rounded-md outline-none ${selected ? "text-white bg-primary-500" : "text-gray-500 bg-gray-200"}`
                                }
                            >
                                <p className="text-xs font-bold uppercase px-3 lg:px-5 py-3 block leading-normal">{tab.label}</p>
                            </Tab>
                        ))}
                    </Tab.List>

                    {/* Tab Panels */}
                    <Tab.Panels className="relative flex flex-col min-w-0 break-words bg-white text-gray-500 w-full mb-6 rounded">
                        <div className="px-4 py-5 flex-auto">
                            {tabData.map((tab, idx) => (
                                <Tab.Panel key={tab.label}>{tab.content}</Tab.Panel>
                            ))}
                        </div>
                    </Tab.Panels>
                </Tab.Group>

            </div>
        </div>
    )
}

const Description = () => {
    return (
        <div className="flex flex-col gap-4">
            <p>
                Himalaya&apos;s Baby Powder eliminates dryness and keeps baby&apos;s skin cool and comfortable.
            </p>
            <p>Benefits:</p>
            <ul className="list-disc list-inside">
                <li>Helps manage excess sweating and body odor</li>
                <li>Powder containing herbal actives</li>
                <li>Effective and safe</li>
                <li>Free from Parabens, Phthalates, and Synthetic Colors</li>
            </ul>
        </div>
    )
}

const Reviews = () => {
    return (
        <div className="max-h-[600px] overflow-auto">
            <div>
                {/* Review 1 */}
                <div className="flex gap-x-3 md:gap-x-5 mb-5">
                    <div className="mt-1 md:mt-0 flex flex-col justify-center items-center h-10 w-10 self-start bg-gray-300 rounded-sm">
                        <UserIcon className="w-9 h-9 text-white" />
                    </div>
                    <div className="grow flex flex-col justify-center text-sm">
                        <div className="flex justify-between flex-col md:flex-row">
                            <h2 className="font-bold">
                                Faria Zaman
                                <span className="font-normal"> - February 14, 2022</span>
                            </h2>
                            <div className="star-ratings" title="5 Stars" style={{ position: "relative", boxSizing: "border-box", display: "inline-block" }}>
                                {/* 5 stars */}
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="relative inline-block align-middle px-[2px] first:pl-0 last:pr-0">
                                        <svg viewBox="0 0 51 48" className="w-[15px] h-[15px] transition-transform duration-200">
                                            <path className="star fill-[#ffa500] transition-colors duration-200" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
                                        </svg>
                                    </span>
                                ))}
                            </div>
                        </div>
                        <p className="mb-0 mt-1">Very good quality of powder. Loved it.</p>
                        <div className="flex gap-2 flex-wrap mt-2"></div>
                    </div>
                </div>
                {/* Review 2 */}
                <div className="flex gap-x-3 md:gap-x-5 mb-5">
                    <div className="mt-1 md:mt-0 flex flex-col justify-center items-center h-10 w-10 self-start bg-gray-300 rounded-sm">
                        <UserIcon className="w-9 h-9 text-white" />
                    </div>
                    <div className="grow flex flex-col justify-center text-sm">
                        <div className="flex justify-between flex-col md:flex-row">
                            <h2 className="font-bold">
                                Khadija Mahamood
                                <span className="font-normal"> - May 2, 2021</span>
                            </h2>
                            <div className="star-ratings" title="5 Stars" style={{ position: "relative", boxSizing: "border-box", display: "inline-block" }}>
                                {/* 5 stars */}
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="relative inline-block align-middle px-[2px] first:pl-0 last:pr-0">
                                        <svg viewBox="0 0 51 48" className="w-[15px] h-[15px] transition-transform duration-200">
                                            <path className="star fill-[#ffa500] transition-colors duration-200" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
                                        </svg>
                                    </span>
                                ))}
                            </div>
                        </div>
                        <p className="mb-0 mt-1">
                            The smell of powder is very nice<br />
                            Love it<br />
                            Highly recommend
                        </p>
                        <div className="flex gap-2 flex-wrap mt-2"></div>
                    </div>
                </div>
            </div>
            {/* Add Review Form */}
            <div className="mt-4">
                <h2 className="text-xl font-medium">Add Review</h2>
                <div className="flex gap-x-5 my-3 items-center">
                    <p className="mb-0">Your Rating</p>
                    <div className="star-ratings" title="0 Stars" style={{ position: "relative", boxSizing: "border-box", display: "inline-block" }}>
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="relative inline-block align-middle px-[3px] first:pl-0 last:pr-0 cursor-pointer">
                                <svg viewBox="0 0 51 48" className="w-[18px] h-[18px] transition-transform duration-200">
                                    <path className="star fill-[rgb(203,211,227)] transition-colors duration-200" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
                                </svg>
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex gap-x-3">
                    <div className="w-1/2">
                        <div className="mb-3">
                            <input type="text" placeholder="Name" className="form-control" name="name" defaultValue="" />
                        </div>
                        <input type="text" placeholder="Email Address" className="form-control" name="email" defaultValue="" />
                    </div>
                    <div className="w-1/2">
                        <div className="h-full flex flex-col">
                            <textarea placeholder="Review" className="form-control flex-grow" name="message" />
                        </div>
                    </div>
                </div>
                <div className="mt-4 mb-2">
                    <input type="file" multiple placeholder="Select image" />
                    <div className="flex gap-2 mt-2"></div>
                </div>
                <button className="mt-3 p-1 md:px-3 md:py-2 bg-primary-500 text-white rounded-full" type="button">
                    Submit
                </button>
            </div>
        </div>
    )
}

const QnA = () => {

    return (
        <div className="block" id="link5">
            <div className="flex gap-x-3 bg-[#d9edf7] px-4 py-2 mb-4 border border-[#bce8f1]">
                <a className="text-primary-500" href="/login?from=/product/himalaya-baby-powder">Login or Register</a>
                <h4>to ask question about this product.</h4>
            </div>
            <div className="qna-item mb-4 bg-gray-100 p-4">
                {/* Question */}
                <div className="flex gap-x-2 md:gap-x-4 mb-4">
                    <div>
                        <QuestionMarkCircleIcon className="text-[#FF3D71]" width={25} height={25} />
                    </div>
                    <div className="leading-4">
                        <h2>বড়রা ফেইসে ব্যবহার করতে পারবে?</h2>
                        <span className="text-xs my-0 py-0">Sanjida Zafrin - April 17, 2025</span>
                    </div>
                </div>
                {/* Answer */}
                <div className="flex gap-x-2 md:gap-x-4 mb-2">
                    <div>
                        <ChatBubbleLeftRightIcon className="text-gray-400" width={22} height={22} />
                    </div>
                    <div className="leading-4">
                        <h2>হ্যালো, এটি শিশুদের স্কিন অনুযায়ী তৈরি করা। অ্যাডাল্ট দের স্কিনের জন্য সুইটেবল হবেনা। ধন্যবাদ।</h2>
                        <span className="text-xs my-0 py-0">Ruprong Customer Care - April 17, 2025</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
