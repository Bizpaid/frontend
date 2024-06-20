"use client";

import moment from "moment-timezone";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import { convertCurrency, getInvoiceSum } from "@/utils";

export default function MobileVaOrderSummary({ paymentDetail }) {
    return (
        <div className="lg:hidden">
            <div className="relative" data-test-id="order-summary-section">
                <div>
                    <button
                        type="button"
                        data-ripple-light="true"
                        data-collapse-target="collapse"
                        className="flex lg:hidden px-4 h-16 items-center w-full text-left border-b border-gray-200 outline-none bg-gray-100 transition-colors [&[data-state=open]>svg]:rotate-180"
                    >
                        <div className="flex-1 flex items-center">
                            <ShoppingCartIcon className="w-6 h-6 mr-2" />
                            <span className="font-bold uppercase text-lg">
                                Order Summary
                            </span>
                        </div>
                    </button>
                    <div className="bg-gray-100">
                        <div className="px-4 lg:px-0 py-2">
                            <ul className="flex flex-col space-y-4 py-2">
                                <li>
                                    <div className="mb-1 flex items-center">
                                        <h3
                                            className="text-lg"
                                            data-testid="expiry-date-summary"
                                        >
                                            Pay before{" "}
                                            <strong>
                                                {moment(
                                                    paymentDetail.info
                                                        .paymentExpiry * 1000
                                                ).format(
                                                    "MMMM DD, YYYY [at] h:mma"
                                                )}
                                            </strong>
                                        </h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:px-0">
                            <hr className="border-gray-500 opacity-20 w-full" />
                        </div>
                        <div className="px-4 lg:px-0 py-4">
                            <table className="w-full">
                                <tbody>
                                    {paymentDetail.info.paymentItems.map(
                                        (payment) => (
                                            <tr key={payment.invoiceId}>
                                                <td
                                                    className="py-3 pr-4 w-full"
                                                    valign="top"
                                                >
                                                    <div className="font-semibold mb-1">
                                                        {payment.title}
                                                    </div>
                                                </td>
                                                <td
                                                    className="py-3 text-right font-semibold whitespace-nowrap"
                                                    valign="top"
                                                >
                                                    {convertCurrency(
                                                        payment.amount
                                                    )}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                    <tr>
                                        <td colSpan="2" className="py-4">
                                            <hr className="border-gray-500 opacity-20" />
                                        </td>
                                    </tr>
                                    <tr data-testid="subtotal">
                                        <td className="lg:text-right font-semibold py-3 pr-4 w-full text-gray-700 lg:text-gray-900">
                                            Subtotal
                                        </td>
                                        <td className="text-right font-semibold py-3 whitespace-nowrap">
                                            {convertCurrency(
                                                getInvoiceSum(
                                                    paymentDetail.info
                                                        .paymentItems
                                                )
                                            )}
                                        </td>
                                    </tr>
                                    <tr className="hidden lg:table-row">
                                        <td colSpan="2" className="py-3">
                                            <hr className="border-gray-500 opacity-20" />
                                        </td>
                                    </tr>
                                    <tr data-testid="total-due">
                                        <td
                                            className="py-3"
                                            valign="middle"
                                            colSpan="2"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="font-semibold hidden lg:block">
                                                    Total Amount Due
                                                </div>
                                                <div className="font-semibold text-xl lg:hidden">
                                                    Total
                                                </div>
                                                <div className="text-right text-xl lg:text-2xl font-semibold">
                                                    {convertCurrency(
                                                        getInvoiceSum(
                                                            paymentDetail.info
                                                                .paymentItems
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
