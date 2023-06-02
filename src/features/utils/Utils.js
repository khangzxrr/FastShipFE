import { API_BASE_URL } from "../axiosProfile"


export class Utils {
    static dateFormat = 'DD/MM/YYYY'
    static apiDateFormat = 'YYYY/MM/DD'


    static translateOrderStatus(status) {
        const translate = {
            'noPriceQuotation': 'Đang báo giá',
            'noPayYet': 'Chưa thanh toán',
            'waitingToOrderFromSeller': 'Đang đợi order hàng',
            'orderingFromSeller': 'Đang mua hàng',
            'deliverFromUsToVN': 'Đang giao US sang VN',
            'inVNwarehouse': 'Đang ở kho VN',
            'deliverToCustomer': 'Đang giao đến khách hàng',
            'finished': 'Thành công',
            'reselling': 'Bán lại',
            'denied': 'Từ chối'
        }

        return translate[status]
    }

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

    static displayUploadImage(imageUrl) {
        return `${API_BASE_URL}/medias?url=${imageUrl}`
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