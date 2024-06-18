"use client";

import cn from "classnames";

function getNumber(number) {
    const countryCode = number.slice(0, 2);
    const phone = number.slice(2);

    return { countryCode, phone };
}

export default function PhoneNumber({ className, value, onChange }) {
    const { countryCode, phone } = getNumber(value);

    return (
        <div className={cn("relative", { [className]: !!className })}>
            <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                    Country
                </label>
                <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    defaultValue={countryCode}
                    className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                    <option value="62">ID</option>
                </select>
            </div>
            <input
                type="text"
                name="phone-number"
                id="phone-number"
                value={phone}
                onChange={(event) => onChange(countryCode + event.target.value)}
                className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="555-5555-555"
            />
        </div>
    );
}
