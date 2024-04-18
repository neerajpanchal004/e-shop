'use client';
import React, { useState } from 'react';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa6";


const FaqData = [
    {
        question: "How can I place an order?",
        answer: "You can place an order by browsing our products, adding them to your cart, and completing the checkout process.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept credit/debit cards, PayPal, and other secure payment methods. You can find more details in the payment options during checkout.",
    },
    {
        question: "How can I track my order?",
        answer: "Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your order on our website or the shipping carrier's site.",
    },
    {
        question: "What is your return policy?",
        answer: "Our return policy allows you to return items within 30 days of delivery. Please visit our 'Returns' page for more information on the return process and eligibility criteria.",
    },
    // Add other FAQ data as needed
];

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <div className="my-16 ">
            <div className="w-2/3 mx-auto  ">
                {FaqData.map((data, index) => {
                    const { question, answer } = data;
                    return (
                        <div key={index} className="border-b border-gray-200 ">
                            <button
                                className="flex justify-between items-center w-full py-5 text-left text-lg"
                                onClick={() => toggleItem(index)}
                            >
                                <span>{question}</span>
                                <span>{openIndex === index ? <FaMinus/> : <FaPlus/>}</span>
                            </button>
                            {openIndex === index && (
                                <div className="pb-5 px-4 text-lg">
                                    {answer}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Accordion;
