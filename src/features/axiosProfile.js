import axios from "axios"

export const API_BASE_URL = "https://fastship.sontran.us"
//export const API_BASE_URL = "http://localhost:57679"

const axiosProfile = axios.create({
    baseURL: API_BASE_URL
})

export default axiosProfile