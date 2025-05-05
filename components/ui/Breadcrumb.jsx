export default function Breadcrumb() {
    return (
        <div className="pt-9 pb-5">
            <div>
                <ul className="flex items-center shrink-0 *:pr-6 *:relative *:before:font-remix *:before:absolute *:before:right-2 *:before:content-['/'] *:before:text-gray-300">
                    <li className="last:pr-0 last:before:hidden">
                        <a href="index.html" className="text-gray-800 hover:text-red-500">Sub title</a>
                    </li>
                    <li className="last:pr-0 last:before:hidden">
                        <a href="#!" className="text-gray-300">Title</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
