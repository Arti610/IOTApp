import axios from "axios";
import apiInstance from "./apiInstance.js";

export default {

    getAllUsers: async () => { return await apiInstance.get(`users`) },
    getAllUsersById: (id) => axios.get(`http://localhost:3000/users/1`,{
       headers:{ Accept : 'application/json'}
    }),

   
   


}