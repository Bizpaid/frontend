"use client";

import { useState } from "react";
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { toast } from "react-toastify";
import cn from "classnames";

import { PhoneNumber } from "@/common";
import { OrderSummary } from "@/components";
import { INTERNAL_SERVER_ERROR, X_API_HEADER } from "@/utils/const";

const bankTransfers = [
    { id: "bca", name: "Bank transfer BCA", image: "/bca.svg" },
    { id: "mandiri", name: "Bank transfer Mandiri", image: "/mandiri.svg" },
    { id: "bni", name: "Bank transfer BNI", image: "/bni.svg" },
    { id: "bri", name: "Bank transfer BRI", image: "/bri.svg" },
    { id: "bsi", name: "Bank transfer BSI", image: "/bsi.svg" },
    { id: "permata", name: "Bank transfer Permata", image: "/permata.svg" },
    { id: "bnc", name: "Bank transfer BNC", image: "/bnc.png" },
    { id: "bss", name: "Bank transfer BSS", image: "/bss.png" },
    { id: "bjb", name: "Bank transfer BJB", image: "/bjb.svg" },
    { id: "cimb", name: "Bank transfer CIMB", image: "/cimb.svg" },
];

export default function CheckoutForm({ reminder }) {
    const [selectedBank, setSelectedBank] = useState(bankTransfers[0]);
    const [contactName, setContactName] = useState(
        reminder?.contact.contact_name || ""
    );
    const [address, setAddress] = useState(
        reminder?.customer.business_address || ""
    );
    const [phone, setPhone] = useState(reminder?.contact.phone || "");
    const [email, setEmail] = useState(reminder?.contact.email || "");
    const [submitLoading, setSubmitLoading] = useState(false);

    function handleChange(event) {
        const { value, name } = event.target;

        switch (name) {
            case "name":
                setContactName(value);
                break;
            case "address":
                setAddress(value);
                break;
            case "email":
                setEmail(value);
                break;
            default:
                breakl;
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (!contactName) {
            toast.error("Name cannot be empty");
            return;
        }
        if (!address) {
            toast.error("Address cannot be empty");
            return;
        }
        if (!phone || phone.length <= 2) {
            toast.error("Phone cannot be empty");
            return;
        }
        if (!email) {
            toast.error("Email cannot be empty");
            return;
        }
        setSubmitLoading(true);

        try {
            await fetch(`api/createReminderPayment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    [X_API_HEADER]: process.env.NEXT_PUBLIC_HEADER_VALUE,
                },
                body: JSON.stringify({
                    invoicesList: reminder.invoice_details.map(
                        (invoice) => invoice.invoice_id
                    ),
                    selectedBank: selectedBank.id,
                    customerData: {
                        name: contactName,
                        city: address,
                        phone,
                        email,
                    },
                }),
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log("====================================");
                    console.log(res);
                    console.log("====================================");
                });
        } catch (err) {
            console.log(err);
            toast.error(INTERNAL_SERVER_ERROR);
        }
        setSubmitLoading(false);
    }

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
                                value={contactName}
                                onChange={handleChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Address
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="address"
                                value={address}
                                onChange={handleChange}
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
                        <PhoneNumber
                            className="mt-2 rounded-md shadow-sm"
                            value={phone}
                            onChange={(newVal) => setPhone(newVal)}
                        />
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
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={handleChange}
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
                        <Menu
                            as="div"
                            className="relative inline-block text-left w-full mb-4"
                        >
                            <div>
                                <MenuButton className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                    <div className="flex items-center">
                                        {selectedBank.name}
                                        <img
                                            src={selectedBank.image}
                                            alt={selectedBank.title}
                                            className={cn(
                                                "ml-1 h-[24px] rounded-md",
                                                {
                                                    "w-[38px]":
                                                        selectedBank.id !==
                                                        "bss",
                                                    "w-[74px]":
                                                        selectedBank.id ===
                                                        "bss",
                                                }
                                            )}
                                        />
                                    </div>
                                    <ChevronDownIcon
                                        className="-mr-1 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </MenuButton>
                            </div>

                            <Transition
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <MenuItems className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {bankTransfers.map((bank) => (
                                            <MenuItem
                                                key={bank.id}
                                                onClick={() =>
                                                    setSelectedBank(bank)
                                                }
                                            >
                                                {({ focus }) => (
                                                    <div
                                                        className={cn(
                                                            "flex items-center px-4 py-2 text-sm",
                                                            {
                                                                "bg-gray-100 text-gray-900":
                                                                    focus,
                                                                "text-gray-700":
                                                                    !focus,
                                                            }
                                                        )}
                                                    >
                                                        {bank.name}
                                                        <img
                                                            src={bank.image}
                                                            alt={bank.title}
                                                            className={cn(
                                                                "ml-1 h-[24px] rounded-md",
                                                                {
                                                                    "w-[38px]":
                                                                        bank.id !==
                                                                        "bss",
                                                                    "w-[74px]":
                                                                        bank.id ===
                                                                        "bss",
                                                                }
                                                            )}
                                                        />
                                                    </div>
                                                )}
                                            </MenuItem>
                                        ))}
                                    </div>
                                </MenuItems>
                            </Transition>
                        </Menu>
                    </fieldset>
                </div>
            </div>

            <OrderSummary
                invoiceDetails={reminder.invoice_details}
                totalAmount={reminder.total_remaining}
                submitLoading={submitLoading}
                onSubmit={handleSubmit}
            />
        </form>
    );
}
