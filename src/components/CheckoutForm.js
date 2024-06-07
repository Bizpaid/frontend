"use client";

import { useState } from "react";
import cn from "classnames";

import { PhoneNumber } from "@/common";
import { OrderSummary } from "@/components";

const bankTransfers = [
    { id: "bri", title: "Bank transfer BRI", image: "/bri.svg" },
    { id: "bni", title: "Bank transfer BNI", image: "/bni.svg" },
    { id: "mandiri", title: "Bank transfer Mandiri", image: "/mandiri.svg" },
    { id: "bsi", title: "Bank transfer BSI", image: "/bsi.svg" },
    { id: "permata", title: "Bank transfer Permata", image: "/permata.svg" },
    { id: "bnc", title: "Bank transfer BNC", image: "/bnc.png" },
    { id: "bss", title: "Bank transfer BSS", image: "/bss.png" },
    { id: "bca", title: "Bank transfer BCA", image: "/bca.svg" },
    { id: "bjb", title: "Bank transfer BJB", image: "/bjb.svg" },
    { id: "cimb", title: "Bank transfer CIMB", image: "/cimb.svg" },
];

export default function CheckoutForm() {
    return (
        <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            <div>
                <div>
                    <h2 className="text-lg font-medium text-gray-900">
                        Billing details
                    </h2>

                    <div className="mt-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="name"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                        >
                            City
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="city"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="phone-number"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Phone number
                        </label>
                        <PhoneNumber className="mt-2 rounded-md shadow-sm" />
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email address
                        </label>
                        <div className="mt-1">
                            <input
                                type="email"
                                id="email-address"
                                name="email-address"
                                autoComplete="email"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Payment */}
                <div className="mt-10 border-t border-gray-200 pt-10">
                    <h2 className="text-lg font-medium text-gray-900">
                        Bank transfer
                    </h2>

                    <fieldset className="mt-4">
                        <legend className="sr-only">Bank options</legend>
                        <div className="space-y-4 flex flex-col">
                            {bankTransfers.map((bank, bankIdx) => (
                                <div
                                    key={bank.id}
                                    className="flex items-center"
                                >
                                    {bankIdx === 0 ? (
                                        <input
                                            id={bank.id}
                                            name="payment-type"
                                            type="radio"
                                            defaultChecked
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                    ) : (
                                        <input
                                            id={bank.id}
                                            name="payment-type"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                    )}

                                    <label
                                        htmlFor={bank.id}
                                        className="ml-3 text-sm font-medium text-gray-700 flex items-center"
                                    >
                                        {bank.title}
                                        <img
                                            src={bank.image}
                                            alt={bank.title}
                                            className={cn(
                                                "ml-1 h-[24px] rounded-md",
                                                {
                                                    "w-[38px]":
                                                        bank.id !== "bss",
                                                    "w-[74px]":
                                                        bank.id === "bss",
                                                }
                                            )}
                                        />
                                    </label>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                </div>
            </div>

            <OrderSummary />
        </form>
    );
}
