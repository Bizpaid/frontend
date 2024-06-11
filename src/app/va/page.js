import { VaDetail, VaOrderSummary } from "@/components";

export default function VAPage() {
    return (
        <main className="min-h-screen flex items-stretch text-base text-gray-900 bg-white">
            <VaDetail />
            <VaOrderSummary />
        </main>
    );
}
