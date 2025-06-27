"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//components
import UpcomingFeature from "@/components/modals/UpcomingFeature";
import useCartStore from "@/store/cart-store";
import PageLoader from "@/components/ui/PageLoader";

const SHIPPING_COST = { inside_dhaka: 66, outside_dhaka: 99 };

// Validation schema
const checkoutSchema = yup.object({
    customer_name: yup.string().required("Name is required").max(100, "Name must be less than 100 characters"),
    customer_phone: yup.string().required("Phone is required").matches(/^(\+880|880|0)?1[3456789]\d{8}$/, "Please enter a valid phone number"),
    customer_city: yup.string().required("Please select a city"),
    customer_area: yup.string().required("Please select an area"),
    customer_address: yup.string().required("Address is required").max(200, "Address must be less than 200 characters"),
    transaction_number: yup.string().when('customer_city', {
        is: (val) => val !== "" && val !== "Dhaka",
        then: (schema) => schema.required("Transaction number is required").max(32, "Transaction number must be less than 32 characters"),
        otherwise: (schema) => schema.optional(),
    }),
}).required();

export default function CheckoutForm({ cities, areas }) {

    const [isPageLoading, setIsPageLoading] = useState(true);
    const cartItems = useCartStore(state => state.cartItems);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useForm({
        resolver: yupResolver(checkoutSchema),
        defaultValues: {
            customer_name: "",
            customer_phone: "",
            customer_city: "",
            customer_area: "",
            customer_address: "",
            customer_email: "",
            shipping_zone: "",
            payment_method: "cod"
        }
    });

    const watchedCity = watch("customer_city");

    useEffect(() => {
        setIsPageLoading(false);
    }, [cartItems]);

    const onSubmit = (data) => {
        console.log("Form data:", data);
        // Handle form submission here
    };

    if (isPageLoading) {
        return <PageLoader />
    }

    if (cartItems.length === 0) {
        return <NoCartItems />
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-x-3 bg-[#d9edf7] px-4 py-2 my-4 border border-[#bce8f1]">
                <h4>Returning Customer ?</h4>
                <Link className="text-primary-500" href="/login?from=/checkout">
                    Click here to login
                </Link>
            </div>
            <h2 className="text-lg font-medium py-4">BILLING &amp; SHIPPING</h2>
            <div className="flex flex-wrap md:flex-nowrap">
                <FormFields register={register} errors={errors} setValue={setValue} city={watchedCity} cities={cities} areas={areas} />
                <OrderSummary city={watchedCity} />
            </div>
        </form>
    );
}


const FormFields = ({ register, errors, setValue, city, cities, areas }) => {
    const [selectedAreas, setSelectedAreas] = useState([]);

    // Update parent component when city changes
    useEffect(() => {

        console.log("city", city);
        console.log("areas", areas);
        console.log("selectedAreas", areas[city]);

        setSelectedAreas(areas[city] || []);
        setValue("customer_area", "");
    }, [city]);

    return (
        <div className="w-full md:w-3/5 md:pr-8 md:border-r-2 md:border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        className={`form-control ${errors.customer_name ? 'border-red-500' : ''}`}
                        {...register("customer_name")}
                    />
                    {errors.customer_name && (
                        <p className="text-red-500 text-sm mt-1">{errors.customer_name.message}</p>
                    )}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Phone"
                        className={`form-control ${errors.customer_phone ? 'border-red-500' : ''}`}
                        {...register("customer_phone")}
                    />
                    {errors.customer_phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.customer_phone.message}</p>
                    )}
                </div>
                <div>
                    <select
                        className={`form-control bg-white ${errors.customer_city ? 'border-red-500' : ''}`}
                        {...register("customer_city")}
                    >
                        <option value="">Select City</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                    {errors.customer_city && (
                        <p className="text-red-500 text-sm mt-1">{errors.customer_city.message}</p>
                    )}
                </div>
                <div>
                    <select
                        className={`form-control bg-white ${errors.customer_area ? 'border-red-500' : ''}`}
                        {...register("customer_area")}
                    >
                        <option value="">Select Area</option>
                        {selectedAreas.map((area, index) => (
                            <option key={index} value={area}>{area}</option>
                        ))}
                    </select>
                    {errors.customer_area && (
                        <p className="text-red-500 text-sm mt-1">{errors.customer_area.message}</p>
                    )}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Address"
                        className={`form-control ${errors.customer_address ? 'border-red-500' : ''}`}
                        {...register("customer_address")}
                    />
                    {errors.customer_address && (
                        <p className="text-red-500 text-sm mt-1">{errors.customer_address.message}</p>
                    )}
                </div>
                {city !== "" && city !== "Dhaka" && (
                    <div>
                        <input
                            type="text"
                            placeholder="Transaction Number"
                            className={`form-control ${errors.transaction_number ? 'border-red-500' : ''}`}
                            {...register("transaction_number")}
                        />
                        {errors.transaction_number && (
                            <p className="text-red-500 text-sm mt-1">{errors.transaction_number.message}</p>
                        )}
                    </div>
                )}
            </div>
        </div >
    )
}

const OrderSummary = ({ city }) => {
    const totalPrice = useCartStore(state => state.totalPrice);

    const [showCoupon, setShowCoupon] = useState(false);

    const deliveryCost = city === "Dhaka" ? SHIPPING_COST.inside_dhaka : SHIPPING_COST.outside_dhaka;

    const totalAmount = totalPrice + deliveryCost;

    return (
        <div className="w-full md:w-2/5 md:ml-3">
            <div className="md:ml-4 mb-4">
                <button type="button" onClick={() => setShowCoupon(!showCoupon)} className="text-primary-500 text-lg">
                    Have Coupon / Voucher?
                </button>
                {showCoupon && (
                    <div className="flex flex-col">
                        <div className={`flex justify-between mt-2`}>
                            <div className="w-[75%]">
                                <input
                                    type="text"
                                    placeholder="Coupon Code"
                                    className="form-control"
                                    name="couponCode"
                                />
                            </div>
                            <UpcomingFeature className="w-1/5"> {/* button change className: w-full to w-1/5 */}
                                <button
                                    className="bg-primary-500 w-full text-white rounded-xl h-11 hover:bg-primary-600 transition-all duration-300"
                                    type="button"
                                >
                                    Apply
                                </button>
                            </UpcomingFeature>
                        </div>
                    </div>
                )}

            </div>
            <div className="border-b-2 border-gray-300 pb-4 md:ml-4">
                <h2 className="mb-3 text-lg font-medium">Choose Shipping Method</h2>
                <div className="flex flex-col">
                    <div>
                        {city === "Dhaka" ? (
                            <div className="flex justify-between">
                                <p className="w-fit"> Delivery Inside Dhaka</p>
                                <span>৳ {SHIPPING_COST.inside_dhaka.toFixed(2)}</span>
                            </div>
                        ) : (
                            <div className="flex justify-between">
                                <p className="w-fit">Delivery Outside Dhaka</p>
                                <span>৳ {SHIPPING_COST.outside_dhaka.toFixed(2)}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-between mt-8">
                    <span>Total MRP</span>
                    <span>৳ {totalPrice.toFixed(2)}</span>
                </div>
            </div>
            <div className="flex justify-between mt-3 md:pl-4">
                <span className="text-lg font-medium">Total Amount</span>
                <span className="text-primary-500 text-lg font-semibold">৳ {totalAmount.toFixed(2)}</span>
            </div>
            <div className="md:pl-4">
                <h2 className="mb-3 mt-5 font-medium text-lg">Choose Payment Method</h2>
                <div className="flex flex-col">
                    <label className="w-fit">
                        <input type="radio" name="payment_method" className="mr-2 accent-primary-500" value="cod" defaultChecked />
                        Cash on delivery
                    </label>
                    <label className="w-fit cursor-not-allowed text-gray-300">
                        <input type="radio" disabled={true} name="payment_method" className="mr-2 accent-primary-500" value="pther" />
                        Other methods
                    </label>

                </div>
                <button className="bg-primary-500 p-3 w-full text-white rounded-xl mt-5 uppercase hover:bg-primary-600 transition-all duration-300" type="submit">
                    Place Order
                </button>
            </div>
        </div>
    )
}

const NoCartItems = () => {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-152px)] text-center">
            <div className="flex flex-col items-center justify-center">
                <h2 className="mb-5">Your cart is currently empty.</h2>
                <Link className="px-10 py-2 bg-primary-500 text-white rounded-xl tracking-widest" href="/categories">
                    RETURN TO SHOP
                </Link>
            </div>
        </div>
    )
}
