import axios from "axios"
import store from '../store';
//export const API_BASE_URL = "https://fastship.sontran.us"
export const API_BASE_URL = "http://localhost:57679"

const axiosProfile = axios.create({
    baseURL: API_BASE_URL
})

axiosProfile.interceptors.request.use((config) => {
    const { token } = store.getState().login
    config.headers.Authorization = `Bearer ${token}`

    console.log("set token!!! ", token)

    return config
})


export default axiosProfile