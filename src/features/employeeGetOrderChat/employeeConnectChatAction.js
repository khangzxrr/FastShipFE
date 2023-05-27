import { HttpTransportType, HubConnectionBuilder } from '@microsoft/signalr';
import { API_BASE_URL } from '../../features/axiosProfile';
import { employeeGetOrderChatAction } from './employeeGetOrderChatAction';

export const employeeConnectChatAction = (orderId) => async (dispatch, getState) => {

    const states = getState()

    const { token } = states.login


    const connectionBuilder = new HubConnectionBuilder()
        .withUrl(API_BASE_URL + "/chat", {
            skipNegotiation: false,
            transport: HttpTransportType.WebSockets,
            accessTokenFactory: () => token
        })
        .withAutomaticReconnect()
        .build()

    await connectionBuilder.start()

    console.log('connected ' + orderId)

    await connectionBuilder.invoke('ConnectToChatRoom', {
        orderId: parseInt(orderId)
    })

    connectionBuilder.on('boardcast', () => {
        dispatch(employeeGetOrderChatAction(orderId))    
    })

    dispatch(employeeGetOrderChatAction(orderId))

    return Promise.resolve(connectionBuilder)
}
