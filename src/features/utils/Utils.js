
export class Utils {
    static dateFormat = 'DD/MM/YYYY'
    static apiDateFormat = 'YYYY/MM/DD'

    static translateProductIssueState(state) {
        const translate = {
            'request': 'Đang yêu cầu',
            'acceptEmployeeFault': 'chấp nhận, lỗi do nhân viên',
            'acceptCustomerFault': 'chấp nhận, lỗi do khách',
            'acceptSellerFault': 'chấp nhận, lỗi do người bán',
            'exchangeforNew': 'Đổi hàng mới',
            'sentToSeller': 'Đã gửi hàng đến người bán',
            'successExchangeReturnToVN': 'Đổi mới thành công',
            'failedExchangeSellerRejectReturnToVN': 'Đổi mới thất bại',
            'refund': 'Hoàn tiền',
            'shippingToCustomer': 'ship đến khách',
            'shipperReceived': 'shipper đã nhận đơn',
            'customerReceived': 'Người dùng đã nhận',
            'finish': 'Hoàn thành'
        }

        return translate[state]
    }

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