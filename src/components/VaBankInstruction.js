"use client";

import { useState } from "react";
import cn from "classnames";

import {
    AtmInstruction,
    IbankInstruction,
    MbankInstruction,
} from "@/components";

const INSTRUCTION_TAB = {
    atm: 1,
    ibanking: 2,
    mbanking: 3,
};

export default function VaBankInstruction() {
    const [currentTab, setCurrentTab] = useState(INSTRUCTION_TAB.atm);

    function handleTabClick(newTab) {
        setCurrentTab(newTab);
    }

    function renderInstruction() {
        switch (currentTab) {
            case INSTRUCTION_TAB.atm:
                return <AtmInstruction />;
            case INSTRUCTION_TAB.ibanking:
                return <IbankInstruction />;
            case INSTRUCTION_TAB.mbanking:
                return <MbankInstruction />;
            default:
                return null;
        }
    }

    return (
        <div>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b">
                <li className="me-2">
                    <button
                        aria-current="page"
                        className={cn("inline-block p-4 rounded-t-lg", {
                            "text-blue-600 bg-gray-100":
                                currentTab === INSTRUCTION_TAB.atm,
                            "hover:text-gray-600 hover:bg-gray-50":
                                currentTab !== INSTRUCTION_TAB.atm,
                        })}
                        onClick={() => handleTabClick(INSTRUCTION_TAB.atm)}
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
            <div className="prose prose-sm max-w-full prose-a:font-semibold prose-a:text-blue-500 prose-h3:font-semibold prose-h3:text-lg prose-h3:text-gray-500 prose-h3:mb-4 prose-ol:space-y-2 prose-ul:list-disc prose-em:font-bold prose-em:text-blue-500 prose-em:not-italic">
                {renderInstruction()}
            </div>
        </div>
    );
}
