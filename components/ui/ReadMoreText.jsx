"use client"
import { useState, useRef, useEffect } from 'react';

export default function ReadMoreText({
    content,
    maxHeight = "max-h-24",
    className = "",
    buttonClassName = "text-primary-500 hover:text-purple-800 mt-1 transition-colors duration-200"
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflowed, setIsOverflowed] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        const checkOverflow = () => {
            if (contentRef.current) {
                const element = contentRef.current;
                setIsOverflowed(element.scrollHeight > element.clientHeight);
            }
        };

        checkOverflow();
        // Re-check on window resize
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, [content]);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={className}>
            <div
                ref={contentRef}
                className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-none' : maxHeight
                    }`}
            >
                {typeof content === 'string' ? (
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                ) : (
                    content
                )}
            </div>
            {isOverflowed && (
                <button
                    onClick={toggleExpanded}
                    className={buttonClassName}
                >
                    {isExpanded ? 'Read Less' : 'Read More...'}
                </button>
            )}
        </div>
    );
} 