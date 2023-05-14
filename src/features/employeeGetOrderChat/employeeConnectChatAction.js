import { HttpTransportType, HubConnectionBuilder } from '@microsoft/signalr';
import { API_BASE_URL } from '../../features/axiosProfile';

export const employeeConnectChatAction = (token) => {
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