import axios from "axios"

export const API_BASE_URL = "https://fastship.sontran.us"

const instance = axios.create({
    baseURL: API_BASE_URL
})

export default instance