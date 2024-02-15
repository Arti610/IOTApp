import apiInstance from "./apiInstance.js";

export default {

    getAllUsers: async () => { return await apiInstance.get(`users`) },
    getAllUsersById: async (id) => { return await apiInstance.get(`users${id}`) },
    getAllUsersById: async (id) => { return await apiInstance.get(`users${id}`) },
   
   


}