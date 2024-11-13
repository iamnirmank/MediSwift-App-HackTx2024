import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: "https://mediswiftserver.azurewebsites.net/api/",
    baseURL: "https://mediswiftbackend-production.up.railway.app/api/",
});

export default axiosInstance;