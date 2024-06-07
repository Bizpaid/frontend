const products = [
    {
        id: 1,
        title: "Private Consultation: Building Apps & Chatbot Whatsapp Based AI Without Koding with the No-Code Platform",
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

export default function OrderSummary() {
    return (
        <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

            <div className="mt-4 rounded-lg border border-gray-200 flex flex-col justify-evenly bg-white shadow-sm min-h-[calc(100%-44px)]">
                <h3 className="sr-only">Items in your cart</h3>
                <ul role="list" className="divide-y divide-gray-200">
                    {products.map((product) => (
                        <li key={product.id} className="flex px-4 py-6 sm:px-6">
                            <div className="flex items-center justify-between w-full">
                                <dt className="text-sm">{product.title}</dt>
                                <dd className="text-sm font-medium text-gray-900">
                                    {product.price}
                                </dd>
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
    );
}
