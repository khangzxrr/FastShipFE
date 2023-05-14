import { HttpTransportType, HubConnectionBuilder } from "@microsoft/signalr"
import { API_BASE_URL } from "../axiosProfile"

export const getOrderChatHubAction= (token) => {

    const connectionBuilder = new HubConnectionBuilder()
    .withUrl(API_BASE_URL + "/chat", {
        skipNegotiation: false,
        transport: HttpTransportType.WebSockets,
        accessTokenFactory: () => token
    })
    .withAutomaticReconnect()
    .build()

return connectionBuilder
}