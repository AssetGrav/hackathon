import axios from "axios";
import { toast } from "react-toastify";

const http = axios.create();

http.interceptors.request.use(
    function (config) {
        console.log("config", config);
        return config;
    }, function (error) {
        console.log(error.message);
        return PromiseRejectionEvent.reject(error);
    });
http.interceptors.response.use(
    (res) => {
        return res;
    },
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!expectedErrors) {
            toast.error("Something was wrong. Try it later");
        }
        return Promise.reject(error);
    }
);

const httpService = {
    get: http.get
};

export default httpService;


