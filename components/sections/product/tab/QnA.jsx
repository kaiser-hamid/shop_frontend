import NoContent from "@/components/ui/NoContent";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";


export default function QnA({ data }) {

    if (!data) return <NoContent />;

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