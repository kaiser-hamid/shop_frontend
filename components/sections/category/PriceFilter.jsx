"use client";

import { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useRange } from 'react-instantsearch';

function PriceFilter() {
    const { range, refine } = useRange({ attribute: 'sale_price' });

    const [price, setPrice] = useState([0, 10000]);
    const [hasUserInteracted, setHasUserInteracted] = useState(false);

    // Sync local state to Algolia when price changes
    useEffect(() => {
        if (range.min && range.max && !hasUserInteracted) {
            setPrice([range.min, range.max]);
        }
    }, [range.min, range.max, hasUserInteracted]);


    const handleSliderChange = (values) => {
        setPrice(values);
        setHasUserInteracted(true);
    };

    const handleSliderChangeComplete = (values) => {
        refine(values);
    };


    if (range.min === range.max) return null; // Avoid rendering slider when all prices are the same

    return (
        <div className="ml-2">
            <Slider
                range
                min={range.min}
                max={range.max}
                step={10}
                value={price}
                onChange={handleSliderChange}
                onChangeComplete={handleSliderChangeComplete}
                trackStyle={{ backgroundColor: "#c72116", height: "8px" }}
                handleStyle={{
                    backgroundColor: "#FFF",
                    opacity: 1,
                    marginTop: "-5px",
                    borderColor: "#e5e5e5",
                    borderWidth: "2px",
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                }}
                railStyle={{ backgroundColor: "#d8d8d8", height: "8px", borderRadius: 0 }}
                className="price-slider"
            />

            <div className="flex justify-between w-full items-center mt-2">
                <p className="text-[0.8rem]">৳ {price[0]}</p>
                <p className="text-[0.8rem]">৳ {price[1]}</p>
            </div>
        </div>
    );
}

export default PriceFilter;
