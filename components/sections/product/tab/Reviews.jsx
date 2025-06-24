import NoContent from "@/components/ui/NoContent";
import { UserIcon } from "@heroicons/react/24/solid";

export default function Reviews({ data }) {

    if (!data) return <NoContent />;

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