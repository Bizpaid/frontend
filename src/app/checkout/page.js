import { CheckoutForm } from "@/components";

export default function CheckoutPage() {
    return (
        <div className="bg-gray-50 overflow-auto h-full">
            <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Checkout</h2>
                <CheckoutForm />
            </div>
        </div>
    );
}
