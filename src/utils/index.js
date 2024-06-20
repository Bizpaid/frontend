export function convertCurrency(value) {
    return value.toLocaleString("in-ID", {
        style: "currency",
        currency: "IDR",
    });
}

export function getInvoiceSum(invoices) {
    return invoices.reduce((acc, curr) => {
        return acc + curr.amount;
    }, 0);
}
