import { useEffect, useState } from "react";
import EmployeeRequestChat from "../../component/request-employee/EmployeeRequestChat";
import EmployeeRequestInfo from "../../component/request-employee/EmployeeRequestInfo";
import EmployeeRequestProducts from "../../component/request-employee/EmployeeRequestProducts";
import { Button, Popconfirm, message, Input, Modal } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { employeeGetOrderByIdAction } from "../../features/employeeGetOrderById/employeeGetOrderByIdAction";
import { Utils } from "../../features/utils/Utils";
import { employeeUpdateOrderStatusAction } from "../../features/employeeUpdateOrderStatus/employeeUpdateOrderStatusAction";
import { employeeConnectChatAction } from "../../features/employeeGetOrderChat/employeeConnectChatAction";
const EmployeeRequest = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [search, setSearch] = useSearchParams()

    const [cancelReason, setCancelReason] = useState('')

    const [messageApi, messageContextHolder] = message.useMessage()
    const [hubConnectionBuilder, setHubConnectionBuilder] = useState(null)

    const { order } = useSelector(state => state.employeeGetOrderById)
    const { chatMessages } = useSelector(state => state.employeeGetOrderChat)


    const dispatch = useDispatch()
    const navigate = useNavigate()

    function navigateBackToOrdersList() {
        setTimeout(() => {
            navigate('/employee-order')
        }, 2000)
    }

    function handleDenyOrder() {
        dispatch(employeeUpdateOrderStatusAction(order.orderId, 'denied', cancelReason))
            .then(() => {
                navigate('/employee-orderdetail?orderId=' + order.orderId)
            })
            .catch(err => {
                Utils.showErrorNoti(messageApi, 'Có lỗi xảy ra, vui lòng tải lại & thử lại')
            })
    }

    function handleConfirmPriceQuotation() {
        dispatch(employeeUpdateOrderStatusAction(order.orderId, 'noPayYet'))
            .then(() => {
                navigate('/employee-orderdetail?orderId=' + order.orderId)
            })
            .catch(err => {
                Utils.showErrorNoti(messageApi, 'Có lỗi xảy ra, vui lòng tải lại & thử lại')
            })
    }

    function handleOnSendMessage(message) {
        hubConnectionBuilder.invoke('SendMessage', {
            message
        }).then(() => {
            dispatch(employeeGetOrderByIdAction(order.orderId))
        })

    }

    useEffect(() => {
        const orderId = search.get('orderId')

        if (orderId == null) {
            Utils.showErrorNoti(messageApi, 'Không tìm thấy orderId')
            navigateBackToOrdersList()

        }

        dispatch(employeeGetOrderByIdAction(orderId)).then((response) => {
            Utils.showSuccessNoti(messageApi, 'Lấy thông tin order thành công')

            if (response.order.status !== 'noPriceQuotation') {
                navigate('/employee-orderdetail?orderId=' + order.orderId)
            }
        })
            .catch(() => {
                Utils.showErrorNoti(messageApi, 'Lấy thông tin order thất bại, vui lòng thử lại')
                navigateBackToOrdersList()
            })



        dispatch(employeeConnectChatAction(orderId))
            .then(hubConnectionBuilder => {
                setHubConnectionBuilder(hubConnectionBuilder)
            })

    }, [])

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancelOk = () => {

        handleDenyOrder()

        setIsModalOpen(false);
    };


    function handleCancelReasonOnChange(event) {
        setCancelReason(event.target.value)
    }


    return (
        <div className="container" style={{ display: 'flex', marginTop: '20px', marginBottom: '20px' }}>
            {messageContextHolder}
            <div style={{ width: '60%', marginRight: '2%', padding: '0px 20px 30px 20px' }}>
                <h2>BÁO GIÁ SẢN PHẨM</h2>

                {
                    order.orderDetails.map((orderDetail) => {
                        return (<EmployeeRequestProducts orderDetail={orderDetail} orderId={order.orderId} messageApi={messageApi} />)
                    })
                }

                <h2 style={{ textAlign: 'right', marginRight: '20px' }}>TOTAL: {Utils.formatToVNDCurrency(order.price)} </h2>

                <Popconfirm
                    title="Xác nhận báo giá"
                    description="Bạn có chắc chắn muốn báo giá cho người dùng? (hành động này không thể quay lại)"
                    onConfirm={() => handleConfirmPriceQuotation()}
                >
                    <Button type="primary" style={{ color: 'black', float: 'right', fontWeight: 'bold' }}>XÁC NHẬN YÊU CẦU BÁO GIÁ</Button>
                </Popconfirm>
                <Button type="primary" onClick={showModal} style={{ color: 'black', backgroundColor: 'red', marginRight: '10px', float: 'right', fontWeight: 'bold' }}>CANCEL</Button>
            </div>
            <div style={{ width: '38%', padding: '0px 10px 10px 10px' }}>
                <h2>THÔNG TIN ĐƠN HÀNG</h2>
                <EmployeeRequestInfo order={order} />
                <h2>NỘI DUNG TRAO ĐỔI</h2>
                <EmployeeRequestChat order={order} chatMessages={chatMessages} handleOnSendMessage={handleOnSendMessage} />
            </div>
            <Modal title="Lí do hủy" open={isModalOpen} onOk={() => handleCancelOk()} >
                <Input onChange={handleCancelReasonOnChange} />
            </Modal>
        </div>
    );
};

export default EmployeeRequest