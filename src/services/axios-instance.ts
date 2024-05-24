import axios, { AxiosError } from "axios";
const backendApiUrl = process.env.REACT_APP_SHADI_BACKEND_API_URL

const axiosInstance = axios.create({
    baseURL: backendApiUrl
});

// Request interceptor
axiosInstance.interceptors.request.use(function (config) {

    // Add token before request is sent
    let token;
    const tokenString = localStorage.getItem('user');
    if (tokenString && tokenString !== "null") {
        token = JSON.parse(tokenString).token;
        if (token) {
            config.headers.Authorization = token ? `Bearer ${token}` : '';
        }
    }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error: AxiosError) => {
    // Handle HTTP request errors globally

    return Promise.reject(error);
});

export default axiosInstance;