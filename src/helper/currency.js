export default {
    methods: {
        convertCurrency: function (number) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number)
        }
    }
};