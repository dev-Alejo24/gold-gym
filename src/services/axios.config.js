import axios from "axios";

const URL = 'https://670004004da5bd237552e6d9.mockapi.io/api/stockProduct';

export const axiosInstance = axios.create({
    baseURL: URL
})