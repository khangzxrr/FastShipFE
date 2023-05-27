import { HttpTransportType, HubConnectionBuilder } from "@microsoft/signalr"
import { API_BASE_URL } from "../axiosProfile"
import { getOrderChatAction } from "./getOrderChatAction"

export const getOrderChatHubAction= (orderId) => async (dispatch, getState) => {

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

    dispatch(getOrderChatAction(orderId))

    connectionBuilder.on('boardcast', () => {
        dispatch(getOrderChatAction(orderId))
    })

    await connectionBuilder.start()

    console.log('orderId: ', orderId)

    await connectionBuilder.invoke('ConnectToChatRoom', {
        orderId: parseInt(orderId)
    })

    return Promise.resolve(connectionBuilder)
}