import axios from "axios";

const makeApiRequest = (token) =>{
    const instance = axios.create({
        baseURL : `${import.meta.env.VITE_REACT_APP_DBURI}`,
        headers :{
            "Authorization" : `bearer ${token}`
        }
    })
    return instance;
}

export default makeApiRequest;