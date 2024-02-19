import axios from "axios";
import apiInstance from "./apiInstance.js";

export default {

    register: (payload) => apiInstance.post(`users/register/`, payload),
    login: (payload) => apiInstance.post(`users/login/`, payload),
}