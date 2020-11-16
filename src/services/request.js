import axios from "axios";
import { TIMEOUT, baseURL } from "./config";
const instance = axios.create({
	timeout: TIMEOUT,
	baseURL: baseURL,
});
instance.interceptors.request.use(
	(config) => {
		return config;
	},
	(err) => {}
);
instance.interceptors.response.use(
	(res) => res.data,
	(err) => {
		if (err && err.response) {
			switch (err.response.status) {
				case 400:
					console.log("请求错误");
					break;
				case 401:
					console.log("未授权访问");
					break;
				default:
					console.log("其他错误信息");
			}
		}
		return err;
	}
);

export default instance;
