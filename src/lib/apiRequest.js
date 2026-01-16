import axios from "axios";

const apiRequest = axios.create({
    baseURL: 'https://peaknestapi.onrender.com',
    withCredentials: true
})


export default apiRequest;

// http://localhost:5500/api/v1