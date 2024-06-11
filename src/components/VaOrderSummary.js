import { DocumentTextIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function VaOrderSummary() {
    return (
        <aside className="hidden lg:flex flex-col w-2/5 xl:w-1/3 bg-gray-100 px-4 xl:px-8 py-8">
            <div className="w-full mx-auto max-w-sm">
                <div className="relative">
                    <div className="pb-4 hidden lg:block">
                        <h2 className="text-3xl font-semibold mb-1 pt-3">
                            Order Summary
                        </h2>
                        <p className="line-clamp-1">
                            <strong className="mr-1">Invoice #:</strong>
                            temanproduk-xen-1235
                        </p>
                    </div>
                    <div className="px-4 lg:px-0 py-2">
                        <ul className="flex flex-col space-y-4 py-2">
                            <li>
                                <div className="mb-1 flex items-center">
                                    <div className="w-6 h-4 hidden lg:block">
                                        <DocumentTextIcon className="w-4 h-4" />
                                    </div>
                                    <h3 className="text-lg font-semibold">
                                        Description
                                    </h3>
                                </div>
                                <p className="lg:pl-6">
                                    Payment for Order #1237 at Teman Produk
                                </p>
                            </li>
                            <li>
                                <div className="mb-1 flex items-center">
                                    <div className="hidden lg:block w-6 h-4">
                                        <ClockIcon className="w-4 h-4" />
                                    </div>
                                    <h3 className="text-lg">
                                        Pay before
                                        <strong className="ml-1">
                                            June 12, 2024 at 6:11 PM
                                        </strong>
                                    </h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 lg:px-0">
                        <hr className="border-gray-500 opacity-20" />
                    </div>
                    <div className="px-4 lg:px-0 py-4">
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td className="py-3 pr-4 w-full">
                                        <div className="font-semibold mb-1">
                                            Konsultasi Private: Membangun Apps &
                                            Chatbot Whatsapp Berbasis AI Tanpa
                                            Koding dengan Platform No-Code
                                        </div>
                                        <p>1 × IDR 4.999.999</p>
                                    </td>
                                    <td className="py-3 text-right font-semibold whitespace-nowrap align-text-top">
                                        IDR 4.999.999
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="py-4">
                                        <hr className="border-gray-500 opacity-20" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="lg:text-right font-semibold py-3 pr-4 w-full text-gray-700 lg:text-gray-900">
                                        Subtotal
                                    </td>
                                    <td className="text-right font-semibold py-3 whitespace-nowrap">
                                        IDR 4.999.999
                                    </td>
                                </tr>
                                <tr className="hidden lg:table-row">
                                    <td colspan="2" className="py-3">
                                        <hr className="border-gray-500 opacity-20" />
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className="py-3"
                                        valign="middle"
                                        colspan="2"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="font-semibold hidden lg:block">
                                                Total Amount Due
                                            </div>
                                            <div className="font-semibold text-xl lg:hidden">
                                                Total
                                            </div>
                                            <div className="text-right text-xl lg:text-2xl font-semibold">
                                                IDR 4.999.999
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </aside>
    );
}
