"use client";

import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";

import { MobileVaOrderSummary, VaBankInstruction } from "@/components";

export default function VaDetail() {
    function handleCopyVaNumber() {
        navigator.clipboard.writeText("8930026662350810");
        toast.success("Copied!");
    }

    return (
        <div className="flex-1 lg:px-8 xl:px-8 lg:py-8 min-h-screen">
            <div className="w-full h-full mx-auto lg:max-w-2xl flex flex-col">
                <header>
                    <div className="relative flex items-center justify-between h-12 md:h-16 lg:h-auto lg:max-w-screen-sm mx-auto bg-blue-900 lg:bg-transparent px-4 lg:px-0">
                        <div className="flex items-center">
                            <div className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 rounded-lg overflow-hidden flex-shrink-0">
                                <img
                                    className="h-full w-full object-contain"
                                    src="https://xnd-merchant-logos.s3.amazonaws.com/business/production/64df5a16406b4cebeacd4d8f-1714192084615.png"
                                    alt="logo"
                                />
                            </div>
                            <h3 className="text-xl md:text-2xl lg:text-3xl text-white lg:text-blue-900 line-clamp-1 ml-2 lg:ml-4">
                                PT Teman Produk Berkarya
                            </h3>
                        </div>
                    </div>
                </header>

                <MobileVaOrderSummary />

                <div className="flex-1 pb-0">
                    <div>
                        <section className="pt-8 pb-12 px-4 lg:px-0 max-w-screen-sm mx-auto">
                            <div className="lg:mt-6">
                                <div className="flex flex-col-reverse sm:flex-row sm:items-center space-y-6 space-y-reverse p-6 sm:p-8 border-[.5px] border-gray-400 rounded-sm">
                                    <div className="basis-1/2 space-y-6">
                                        <div className="space-y-1">
                                            <div className="font-semibold text-gray-700 text-base leading-tight">
                                                Virtual Account Number
                                            </div>
                                            <div className="text-3xl">
                                                <span className="flex items-center">
                                                    8930026662350810
                                                    <span className="pl-2">
                                                        <button
                                                            onClick={
                                                                handleCopyVaNumber
                                                            }
                                                        >
                                                            <DocumentDuplicateIcon className="w-[18px] h-[19px]" />
                                                        </button>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="font-semibold text-gray-700 text-base leading-tight">
                                                Virtual Account Name
                                            </div>
                                            <div className="text-3xl">
                                                PT Teman Produk Berkarya
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="font-semibold text-gray-700 text-base leading-tight">
                                                Amount to Pay
                                            </div>
                                            <div className="text-3xl">
                                                IDR 4.999.999
                                            </div>
                                        </div>
                                    </div>

                                    <div className="basis-1/2 self-center flex flex-col items-center">
                                        <img
                                            className="w-20 sm:w-40 md:w-80"
                                            src="https://assets.xendit.co/payment-channels/logos/bni-logo.svg"
                                            alt="BNI"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="my-4 bg-red-100 border border-red-300 p-4 rounded-md">
                                <p className="font-bold">
                                    Beware of fraudulent payment requests
                                </p>
                                <p className="mt-2">
                                    Make sure the merchant’s name, payment
                                    amount, and payment details are correct.
                                    <br />
                                    BizPaid is not responsible for any loss
                                    caused by this transaction.
                                </p>
                            </div>

                            <VaBankInstruction />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
