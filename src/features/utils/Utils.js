
export class Utils {
    static dateFormat = 'DD/MM/YYYY'
    static apiDateFormat = 'YYYY/MM/DD'

    static showErrorNoti(messageApi, content){
        messageApi.open({
            type: 'error',
            content
        })
    }

    static showSuccessNoti(messageApi, content) {
        messageApi.open({
            type: 'success',
            content
        })
    }

    static showInfoNoti(messageApi, description) {
        messageApi.info(description)
    }

    static formatToVNDCurrency(currency){

        let vndFormat = Intl.NumberFormat('vi', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 3,
        })

        return vndFormat.format(currency)
    }
}