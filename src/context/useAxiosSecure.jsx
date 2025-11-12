import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
    baseURL: 'https://tenth-assignment-server-tan.vercel.app'
});

const useAxiosSecure = () => {
    const { user } = useAuth();

    instance.interceptors.request.use(config => {
        if (user?.accessToken) {
            config.headers.authorization = `Bearer ${user.accessToken}`;
        }
        return config;
    });

    return instance;
}

export default useAxiosSecure;