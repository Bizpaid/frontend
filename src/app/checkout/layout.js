import { Suspense } from "react";

import { Spinner } from "@/common";

export default function TrialsLayout({ children }) {
    return <Suspense fallback={<Spinner lg />}>{children}</Suspense>;
}
