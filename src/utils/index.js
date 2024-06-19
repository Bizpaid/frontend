export function convertCurrency(value) {
    return value.toLocaleString("in-ID", {
        style: "currency",
        currency: "IDR",
    });
}
