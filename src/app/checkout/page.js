"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSearchParams, notFound } from "next/navigation";

import { CheckoutForm } from "@/components";
import { Spinner } from "@/common";
import { INTERNAL_SERVER_ERROR, X_API_HEADER } from "@/utils/const";

export default function CheckoutPage() {
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [reminder, setReminder] = useState(null);
    const invoiceList = searchParams.get("invoiceList")
        ? searchParams.get("invoiceList").split(",")
        : [];

    if (!searchParams.get("reminderId") || !invoiceList.length) {
        notFound();
    }

    useEffect(() => {
        getReminder();
    }, []);

    async function getReminder() {
        try {
            await fetch(
                `api/getReminderDetails/${searchParams.get("reminderId")}`,
                {
                    headers: {
                        [X_API_HEADER]: process.env.NEXT_PUBLIC_HEADER_VALUE,
                    },
                }
            )
                .then((res) => res.json())
                .then((res) => {
                    setLoading(false);

                    if (res.status) {
                        setReminder(res.data);
                    }
                });
        } catch (err) {
            toast.error(INTERNAL_SERVER_ERROR);
        }
    }

    let content = <Spinner lg />;

    if (!loading && reminder) {
        content = (
            <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Checkout</h2>
                <CheckoutForm reminder={reminder} invoiceList={invoiceList} />
            </div>
        );
    }

    return <div className="bg-gray-50 overflow-auto h-full">{content}</div>;
}
