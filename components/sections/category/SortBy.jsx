export default function SortBy() {
    return (
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center md:justify-end mb-5">
            <div className="flex items-center justify-between gap-2">
                <div className="w-">
                    <select className="w-full px-3 py-2 text-sm rounded focus:outline-none ring-1 ring-accent-100 placeholder:text-accent-300">
                        <option value="1">Default sorting</option>
                        <option value="2">Price: Low to High</option>
                        <option value="3">Price: High to Low</option>
                        <option value="4">Product: Old First</option>
                        <option value="5">Product: New First</option>
                        <option value="6">Popularity: Most Popular First</option>
                        <option value="7">Popularity: Less Popular First</option>
                    </select>
                </div>
            </div>
        </div>
    )
}