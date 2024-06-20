"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSearchParams, notFound } from "next/navigation";

import { Spinner } from "@/common";
import { VaDetail, VaOrderSummary } from "@/components";
import { INTERNAL_SERVER_ERROR, X_API_HEADER } from "@/utils/const";

export default function VAPage() {
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [paymentDetail, setPaymentDetail] = useState(null);

    if (!searchParams.get("paymentId")) {
        notFound();
    }

    useEffect(() => {
        getPaymentStatus();
    }, []);

    async function getPaymentStatus() {
        try {
            await fetch(
                `api/getPaymentStatus/${searchParams.get("paymentId")}`,
                {
                    headers: {
                        [X_API_HEADER]: process.env.NEXT_PUBLIC_HEADER_VALUE,
                    },
                }
            )
                .then((res) => res.json())
                .then((res) => {
                    const { status, data } = res;
                    setLoading(false);

                    if (status) {
                        setPaymentDetail(data);
                    }
                });
        } catch (err) {
            toast.error(INTERNAL_SERVER_ERROR);
        }
    }

    if (!loading && paymentDetail) {
        return (
            <main className="min-h-screen flex items-stretch text-base text-gray-900 bg-white">
                <VaDetail paymentDetail={paymentDetail} />
                <VaOrderSummary paymentDetail={paymentDetail} />
            </main>
        );
    }

    return <Spinner lg />;
}
