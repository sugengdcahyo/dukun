function convertCurrency(number) {
    console.log("currency")
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number)
}
export default {
    convertCurrency
};