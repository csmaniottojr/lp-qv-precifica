import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "../Button";
import { useState } from "react";

const Pricing = () => {
    const [billingType, setBillingType] = useState("yearly"); // "yearly" or "yearly-installments"

    const plans = [
        {
            name: "Basic plan",
            price: 12,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",

            ],
        },
        {
            name: "Startup",
            price: 35,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
        {
            name: "Enterprise",
            price: 60,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
    ];

    return (
        <section className='py-14 bg-white'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h3 className='text-gray-900 text-3xl font-semibold sm:text-4xl'>
                        Pricing for all sizes
                    </h3>
                    <div className='mt-3 max-w-xl'>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
                        </p>
                    </div>
                </div>
                
                {/* Billing Type Selector */}
                <div className="mt-12 flex justify-center">
                    <div className="bg-gray-100 p-1 rounded-lg flex">
                        <button
                            onClick={() => setBillingType("yearly")}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                                billingType === "yearly"
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            Anual
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                                -25%
                            </span>
                        </button>
                        <button
                            onClick={() => setBillingType("yearly-installments")}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                billingType === "yearly-installments"
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            Anual Parcelado
                        </button>
                    </div>
                </div>

                <div className='mt-8 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        plans.map((item, idx) => {
                            const isMiddlePlan = idx === 1; // Startup plan
                            const yearlyPrice = Math.round(item.price * 12 * 0.75); // 25% discount only for "Anual"
                            const yearlyInstallmentsPrice = item.price * 12; // Full price for "Anual Parcelado"
                            const displayPrice = billingType === "yearly" ? yearlyPrice : yearlyInstallmentsPrice;
                            const billingPeriod = "/ano";
                            
                            return (
                                <div key={idx} className={`relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2 transition-all duration-300 ${
                                    isMiddlePlan 
                                        ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-white shadow-xl scale-105' 
                                        : 'border-gray-200 hover:border-primary-300 hover:shadow-lg bg-white'
                                }`}>
                                    {isMiddlePlan && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                                Mais Popular
                                            </span>
                                        </div>
                                    )}
                                    <div>
                                        <span className={`font-medium ${isMiddlePlan ? 'text-primary-800' : 'text-primary-800'}`}>
                                            {item.name}
                                        </span>
                                        <div className='mt-4 text-gray-900 text-3xl font-semibold'>
                                            ${displayPrice} <span className="text-xl text-gray-600 font-normal">{billingPeriod}</span>
                                            {billingType === "yearly" && (
                                                <div className="text-sm text-green-600 font-medium mt-1">
                                                    Economize ${yearlyInstallmentsPrice - yearlyPrice}/ano
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                <ul className='py-8 space-y-3'>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5 text-primary-800'
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'>
                                                    <path
                                                        fillRule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clipRule='evenodd'></path>
                                                </svg>
                                                <span className="text-gray-700">{featureItem}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="flex-1 flex items-end">
                                    <button className={`px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 ${
                                        isMiddlePlan 
                                            ? 'text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800' 
                                            : 'text-white bg-primary-800 hover:bg-primary-700 active:bg-primary-900'
                                    }`}>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );

};

export default Pricing