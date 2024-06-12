export default function AtmInstruction() {
    return (
        <>
            <div>
                <h3>Find Nearest ATM</h3>
                <ol>
                    <li>Insert your Permata ATM card and PIN</li>
                    <li>Enter your ATM PIN</li>
                </ol>
            </div>
            <div>
                <h3>Payment Details</h3>
                <ol>
                    <li>Select Menu &quot;Transaksi Lainnya&quot;</li>
                    <li>Select &quot;Pembayaran&quot;</li>
                    <li>Select &quot;Pembayaran Lainnya&quot;</li>
                    <li>Select menu &quot;Virtual Account&quot;</li>
                    <li>
                        Enter Virtual Account Number <em>7293027173814023</em>
                    </li>
                    <li>
                        Select the type of account you are using to transfer
                        (i.e. from Savings account)
                    </li>
                    <li>Confirm your transaction details displayed</li>
                </ol>
            </div>
            <div>
                <h3>Transaction Completed</h3>
                <ol>
                    <li>Your transaction is completed</li>
                    <li>
                        Once the payment transaction is completed, this invoice
                        will be updated automatically. This may take up to 5
                        minute
                    </li>
                </ol>
            </div>
        </>
    );
}
