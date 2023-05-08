
export class Utils {
    static formatToVNDCurrency(currency){
        
        console.log(currency)

        let vndFormat = Intl.NumberFormat('vi', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 3,
        })

        return vndFormat.format(currency)
    }
}