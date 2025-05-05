export default function PageLoader() {
    return (
        <div
            id="loader-wrapper"
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-[9999] overflow-hidden"
        >
            <div className="loader relative inline-block w-16 h-16">
                <span className="loader-span absolute inline-block w-16 h-16 rounded-full bg-[#f593a9]"></span>
                <span className="loader-span absolute inline-block w-16 h-16 rounded-full bg-[#f593a9]"></span>
            </div>
        </div>
    )
}
