"use client"
export default function RoundedButton({ children, className, onClick }) {
    return (
        <button type="button" onClick={onClick} className={`group h-[38px] font-bold py-3 px-3 xl:px-4 rounded-full flex items-center hover:bg-opacity-90 transition-all duration-150 ${className}`}>
            {children}
        </button>
    );
}
