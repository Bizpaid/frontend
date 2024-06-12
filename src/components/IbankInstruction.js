export default function IbankInstruction() {
    return (
        <>
            <div>
                <h3>Log In To Your Account</h3>
                <ol>
                    <li>
                        Open{" "}
                        <a
                            href="https://www.permatanet.com"
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-primary"
                        >
                            https://www.permatanet.com
                        </a>{" "}
                        and login
                    </li>
                </ol>
            </div>
            <div>
                <h3>Payment Details</h3>
                <ol>
                    <li>Choose &quot;Pembayaran Tagihan&quot;</li>
                    <li>Choose &quot;Virtual Account&quot;</li>
                    <li>
                        Enter your Virtual Account Number{" "}
                        <em>7293020876040284</em>
                    </li>
                    <li>Check your detail information and proceed</li>
                    <li>Enter SMS token response code</li>
                </ol>
            </div>
            <div>
                <h3>Transaction Completed</h3>
                <ol>
                    <li>Your transaction is completed</li>
                    <li>
                        Once the payment transaction is completed, this invoice
                        will be updated automatically. This may take up to 5
                        minutes
                    </li>
                </ol>
            </div>
        </>
    );
}
