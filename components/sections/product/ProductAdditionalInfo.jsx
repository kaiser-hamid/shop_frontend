"use client"
import { Tab } from "@headlessui/react";
import { UserIcon, QuestionMarkCircleIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useReducer, useState } from "react";
import Reviews from "./tab/Reviews";
import QnA from "./tab/QnA";
import NoContent from "@/components/ui/NoContent";
import HttpClient from "@/lib/HttpClient";

export default function ProductAdditionalInfo({ productId }) {

    const [tabData, dispatchTabData] = useReducer((state, action) => {
        switch (action.type) {
            case 'SET_TAB_DATA':
                return action.payload;
            default:
                return state;
        }
    }, [
        { label: 'Description', content: <RichTextRenderer data={null} /> },
        { label: 'Reviews', content: <Reviews data={null} /> },
        { label: 'Q&A', content: <QnA data={null} /> }
    ]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: { status, message, data } } = await HttpClient.get(`/products/additional-info/${productId}`)
                if (status) {
                    const responseData = [];
                    responseData.push({ label: 'Description', content: <RichTextRenderer data={data.description} /> })

                    if (data.ingredient) {
                        responseData.push({ label: 'Ingredients', content: <RichTextRenderer data={data.ingredient} /> })
                    }

                    if (data.usage) {
                        responseData.push({ label: 'Usage', content: <RichTextRenderer data={data.usage} /> })
                    }

                    responseData.push({ label: 'Reviews', content: <Reviews data={data.reviews} /> })
                    responseData.push({ label: 'Q&A', content: <QnA data={data.qna} /> })

                    dispatchTabData({ type: 'SET_TAB_DATA', payload: responseData })
                }
            } catch (err) {
                console.log(err.message);
            }
        }

        fetchData();
    }, [])

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

const RichTextRenderer = ({ data }) => {

    if (!data) return <NoContent />;

    return (
        <div dangerouslySetInnerHTML={{ __html: data }} />
    )
}

