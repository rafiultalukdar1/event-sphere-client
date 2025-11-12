import axios from "axios";

const axiosInstance = axios.create({
	baseURL: 'https://tenth-assignment-server-tan.vercel.app',
});

const useAxios = () => {
	return axiosInstance;
};

export default useAxios;