import React, { useState } from 'react'
import { AiOutlineCloudUpload, AiOutlineUpload } from "react-icons/ai"
import Input from '../componenets/customeComponenets/Input'
import { UploadMultipleImages, uploadProductImage } from '../utils/handlers'
import {useSelector} from "react-redux"
import makeApiRequest from '../utils/makeApirequest'
import {useNavigate} from "react-router-dom"

const Upload = () => {
    const [image, setImage] = useState(null)
    const [images, setImages] = useState([])
    const [allImages, setAllImages] = useState([])
    const [colors, setColors] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const [productInfo, setProductInfo] = useState({
      productName:"",
      productDesc:"",
      price:"",
      instocks:null,
      MRP:null,
      offPercentage:null,
      category:""
    })

    const navigate = useNavigate();

    const handleChange = (e) =>{
      const files = e.target.files
      if(files){
      const filesArray = Array.from(files)
      setImages(filesArray)
      }
    }

    const token = useSelector((state)=>state.user.currentUser.token)
    const api = makeApiRequest(token)

    const handleUpload = async () =>{
      setLoading(true)
      // console.log(colors)
      let productProfileImage = await uploadProductImage(image)
      let productImages = await UploadMultipleImages(images)

      if(productProfileImage.status === 200 && productImages.status === 200){
        const productImage = productProfileImage.data.message
        const paths = productImages.data.message.map((p,i)=>p.path);
        // setAllImages((pre)=>{
        //   const paths = productImages.data.message.map((p,i)=>p.path);
        //   return [...pre, ...paths]
        // })
      try{
        console.log("productImage is ",productImage)
        console.log("images are",allImages)
        console.log("colors are ", colors)
        const response = await api.post(`${import.meta.env.VITE_REACT_APP_DBURI}/api/v1/products/`,{
          ...productInfo,colors,productImage,images:[...paths]
        })
        console.log(response)
        setLoading(false)
        navigate('/products')
      }catch(err){
        console.log(err)
        setLoading(false)
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 5000);
      }
    }else{
      setError(true)
      setLoading(false)
      console.log({message:"Images are not uploaded. Please ensure that you select images before uploading ."})
      setTimeout(()=>{
        setError(false)
      },5000)
    }
    }

    const handleInputChange = (e) =>{
      const {name, value} = e.target;
      setProductInfo((pre)=>{
        return {
          ...pre, [name]:value
        }
      })
    }

    const handleColors = (e) =>{
      const allColors = Array.from (e.target.value.split(","))
      setColors(allColors)
    }

  return (
    <div className='min-h-screen flex flex-col items-center py-10'>
      <p className='text-2xl font-semibold text-center mb-4'>UPLOAD A NEW PRODUCT</p>
     {
      loading ?
      <div className='flex items-center justify-center'>
        Loading...
        </div>
        :
        <div className='flex flex-col items-center justify-center w-[70%] gap-5'>
        <div className='flex w-[300px] h-[300px] items-center justify-center border flex-col relative rounded-lg'>
          {/* <span className='flex absolute top-0 text-lg font-semibold'>upload product image</span> */}
            <img src={image ? URL.createObjectURL(image) : ""} alt='' className='w-[90%] h-[90%] rounded-lg'/>
            <label htmlFor='pimage' className='absolute top-[50%] bottom-[50%] text-4xl cursor-pointer z-50 bg-[white] rounded-full w-[40px] h-[40px] flex items-center justify-center font-bold'>
              <AiOutlineUpload className='font-bold'/>
            </label>
        </div>
        <input style={{display:"none"}} type='file' id='pimage' onChange={(e)=>setImage(e.target.files[0])
        } />
        <Input type="text" placeholder="enter productName" name="productName" handleInputChange={handleInputChange}/>

        <Input type="text" placeholder="enter Product Desc" name="productDesc" handleInputChange={handleInputChange}/>

        <Input type="Number" placeholder="enter product quantity" name="instocks" handleInputChange={handleInputChange}/>

        <Input type="number" name="price" placeholder="enter Price" handleInputChange={handleInputChange} />

        <Input type="number" placeholder="enter MRP" name="MRP" handleInputChange={handleInputChange}/>

        <Input type="number" placeholder="enter the off percentage" name="offPercentage" handleInputChange={handleInputChange}/>

        <Input type="text" placeholder="enter product category eg:electronics, speakers etc" name="category" handleInputChange={handleInputChange}/>

        <input type="text" placeholder="enter available colors use comma to seperate between colors" className='w-[60%] outline-none border border-[black] py-3 px-8 rounded-lg' onChange={handleColors}/>

        <span>upload product images from all 4 sides</span>
        <div className='flex border w-[60%] flex-wrap relative items-center justify-center gap-3 min-h-[600px] rounded-lg border-[black]'>
          <input  type='file' id='multiple-img' style={{display:"none"}} multiple onChange={handleChange} />
          <label className='absolute w-[40px] h-[40px] cursor-pointer my-2 mx-2' htmlFor='multiple-img'>
          <AiOutlineCloudUpload className='text-3xl'/>
          </label>
          {
            images.length > 0 &&
            images.map((item,i)=>{
              return (
                <div className='flex w-[47%] items-center justify-center h-[300px] py-4' key={i}>
                <img src={URL.createObjectURL(item)} alt='' className='h-[98%] rounded-lg'/>
              </div>
              )
            })
          }
        </div>
        <button className='py-2 px-5 text-[white] bg-[black] rounded-lg' onClick={handleUpload}>Upload</button>
      </div>
     }
    </div>
  )
}

export default Upload
