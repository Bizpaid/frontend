import cn from "classnames";
import { ImSpinner3 } from "react-icons/im";

export default function Spinner({ sm, md, lg }) {
    const className = cn("animate-spin text-white-300 fill-white-300 mr-2", {
        "w-4 h-4": sm,
        "w-6 h-6": md,
        "w-12 h-12": lg,
    });

    return (
        <div className="flex items-center justify-center h-full">
            <div role="status">
                <ImSpinner3 className={className} />
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}
