import axios from "axios";

// tener en cuenta la API segun el proyecto
const URL = 'https://67036a39bd7c8c1ccd41546b.mockapi.io/api/stockRivera';

export const axiosInstance = axios.create({
    baseURL: URL
})