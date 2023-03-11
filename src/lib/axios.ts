import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

instance.interceptors.request.use(function (config) {
    const token = typeof window !== 'undefined' ? "bearer " + localStorage.getItem('token') : '';

    (config.headers as any)['Authorization'] = token;

    return config
})

export default instance;