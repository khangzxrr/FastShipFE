import axios from "axios"

//export const API_BASE_URL = "https://fastship.sontran.us"
export const API_BASE_URL = "http://localhost:57679"

const instance = axios.create({
    baseURL: API_BASE_URL
})

export default instance