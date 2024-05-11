import axios from "axios"

export const uploadProductImage = async (image) => {
    if(image !== null){
        const data = new FormData()
        data.append("image", image)
    
        try {
            const response = await axios.post("http://localhost:8000/productImage", data)
            return response
        } catch (err) {
            console.log(err)
        }
    }else{
        const message = "please select the image to proceed !"

        return message;
    }
}

export const UploadMultipleImages = async (images) => {
    if(images.length !== 0){
        const data = new FormData();
        images.forEach((img) => {
            data.append('images', img)
        })
        try {
            const response = await axios.post('http://localhost:8000/upload', data)
            return response
        } catch (err) {
            console.log(err)
        }
    }
    else{
        const message = "please select images to upload"
        return message
    }
}
