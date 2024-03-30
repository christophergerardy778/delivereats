import {Axios} from "axios";

export const authAxiosInstance = new Axios({
	baseURL: process.env.HOST,
});