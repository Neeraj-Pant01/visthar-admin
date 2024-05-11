import makeApiRequest from "./makeApirequest"



export const getProducts = async (token) => {
    const api = makeApiRequest(token)
    try {
        const response = api.get(`${import.meta.env.VITE_REACT_APP_DBURI}/api/v1/products`)
        return response
    } catch (err) {
        console.log(err)
    }
}

export const getProduct = async (token, id) => {
    console.log("products page", id)
    const api = makeApiRequest(token)
    try {
        const response = await api.get(`${import.meta.env.VITE_REACT_APP_DBURI}/api/v1/products/${id}`)
        return response
    } catch (err) {
        console.log(err)
    }
}


export const updateProduct = async (productDetail,token,id) => {
    const api = makeApiRequest(token)
    try {
        const response = await api.put(`${import.meta.env.VITE_REACT_APP_DBURI}/api/v1/products/${id}`,productDetail)
        return response
    } catch (err) {
        console.log(err)
    }
}


export const deleteProduct = async(token,id) =>{
    const api = makeApiRequest(token)
    try{
        const response = await api.delete(`${import.meta.env.VITE_REACT_APP_DBURI}/api/v1/products/${id}`)
        console.log(response)
    }catch(err){
        console.log(err)
    }
}