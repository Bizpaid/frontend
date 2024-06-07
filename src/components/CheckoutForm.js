"use client";

import { useState } from "react";
import { TrashIcon } from "@heroicons/react/20/solid";
import cn from "classnames";

import { PhoneNumber } from "@/common";

const products = [
    {
        id: 1,
        title: "Basic Tee",
        href: "#",
        price: "$32.00",
        color: "Black",
        size: "Large",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
    },
    // More products...
];

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

            {/* Order summary */}
            <div className="mt-10 lg:mt-0">
                <h2 className="text-lg font-medium text-gray-900">
                    Order summary
                </h2>

                <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                    <h3 className="sr-only">Items in your cart</h3>
                    <ul role="list" className="divide-y divide-gray-200">
                        {products.map((product) => (
                            <li
                                key={product.id}
                                className="flex px-4 py-6 sm:px-6"
                            >
                                <div className="flex-shrink-0">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="w-20 rounded-md"
                                    />
                                </div>

                                <div className="ml-6 flex flex-1 flex-col">
                                    <div className="flex">
                                        <div className="min-w-0 flex-1">
                                            <h4 className="text-sm">
                                                <a
                                                    href={product.href}
                                                    className="font-medium text-gray-700 hover:text-gray-800"
                                                >
                                                    {product.title}
                                                </a>
                                            </h4>
                                            <p className="mt-1 text-sm text-gray-500">
                                                {product.color}
                                            </p>
                                            <p className="mt-1 text-sm text-gray-500">
                                                {product.size}
                                            </p>
                                        </div>

                                        <div className="ml-4 flow-root flex-shrink-0">
                                            <button
                                                type="button"
                                                className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                                            >
                                                <span className="sr-only">
                                                    Remove
                                                </span>
                                                <TrashIcon
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex flex-1 items-end justify-between pt-2">
                                        <p className="mt-1 text-sm font-medium text-gray-900">
                                            {product.price}
                                        </p>

                                        <div className="ml-4">
                                            <label
                                                htmlFor="quantity"
                                                className="sr-only"
                                            >
                                                Quantity
                                            </label>
                                            <select
                                                id="quantity"
                                                name="quantity"
                                                className="rounded-md border border-gray-300 text-left text-base font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                            >
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                                <option value={6}>6</option>
                                                <option value={7}>7</option>
                                                <option value={8}>8</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Subtotal</dt>
                            <dd className="text-sm font-medium text-gray-900">
                                $64.00
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Shipping</dt>
                            <dd className="text-sm font-medium text-gray-900">
                                $5.00
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Taxes</dt>
                            <dd className="text-sm font-medium text-gray-900">
                                $5.52
                            </dd>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                            <dt className="text-base font-medium">Total</dt>
                            <dd className="text-base font-medium text-gray-900">
                                $75.52
                            </dd>
                        </div>
                    </dl>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <button
                            type="submit"
                            className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                        >
                            Confirm order
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
