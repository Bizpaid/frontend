"use client";

import { useState } from "react";
import cn from "classnames";

const INSTRUCTION_TAB = {
    tab: 1,
    ibanking: 2,
    mbanking: 3,
};

export default function VaBankInstruction() {
    const [currentTab, setCurrentTab] = useState(INSTRUCTION_TAB.tab);

    function handleTabClick(newTab) {
        setCurrentTab(newTab);
    }

    return (
        <div>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b">
                <li className="me-2">
                    <button
                        aria-current="page"
                        className={cn("inline-block p-4 rounded-t-lg", {
                            "text-blue-600 bg-gray-100":
                                currentTab === INSTRUCTION_TAB.tab,
                            "hover:text-gray-600 hover:bg-gray-50":
                                currentTab !== INSTRUCTION_TAB.tab,
                        })}
                        onClick={() => handleTabClick(INSTRUCTION_TAB.tab)}
                    >
                        ATM
                    </button>
                </li>
                <li className="me-2">
                    <button
                        className={cn("inline-block p-4 rounded-t-lg", {
                            "text-blue-600 bg-gray-100":
                                currentTab === INSTRUCTION_TAB.ibanking,
                            "hover:text-gray-600 hover:bg-gray-50":
                                currentTab !== INSTRUCTION_TAB.ibanking,
                        })}
                        onClick={() => handleTabClick(INSTRUCTION_TAB.ibanking)}
                    >
                        IBANKING
                    </button>
                </li>
                <li className="me-2">
                    <button
                        className={cn("inline-block p-4 rounded-t-lg", {
                            "text-blue-600 bg-gray-100":
                                currentTab === INSTRUCTION_TAB.mbanking,
                            "hover:text-gray-600 hover:bg-gray-50":
                                currentTab !== INSTRUCTION_TAB.mbanking,
                        })}
                        onClick={() => handleTabClick(INSTRUCTION_TAB.mbanking)}
                    >
                        MBANKING
                    </button>
                </li>
            </ul>
        </div>
    );
}
