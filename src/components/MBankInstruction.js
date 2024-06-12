export default function MbankInstruction() {
    return (
        <>
            <div>
                <h3>Log In To Your Account</h3>
                <ol>
                    <li>Open Permata Application</li>
                    <li>Masukkan User ID dan Password</li>
                </ol>
            </div>
            <div>
                <h3>Payment Details</h3>
                <ol>
                    <li>Select &quot;Pembayaran Tagihan&quot;</li>
                    <li>Select &quot;Virtual Account&quot;</li>
                    <li>
                        Enter your Virtual Account Number{" "}
                        <em>7293020876040284</em>
                    </li>
                    <li>Enter the authentication token</li>
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
