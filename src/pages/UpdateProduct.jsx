import React, { useEffect, useState } from 'react'
import { AiOutlineCloudUpload, AiOutlineUpload } from "react-icons/ai"
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { getProduct, updateProduct } from '../utils/products';

const UpdateProduct = () => {
    const [image, setImage] = useState(null)
    const [images, setImages] = useState([])
    const [product, setProduct] = useState(false)
    const [allPrevImages, setAllPrevImages] = useState([])
    const [productDetails, setProductDetails] = useState({
      productName: "",
      productDesc: "",
      price: "",
      instocks: "",
      MRP: "",
      offPercentage:""
    })

    const {id} = useParams();

    const pf = import.meta.env.VITE_REACT_APP_PF;

    const token = useSelector((state)=>state.user.currentUser.token)

    const handleChange = (e) =>{
      const files = Array.from(e.target.files);
      setImages(files)
    }

    useEffect(()=>{
      getSingleProduct();
    },[id])

    const getSingleProduct = async () =>{
      const response = await getProduct(token,id)
      setProduct(response.data)
      setAllPrevImages(response.data.images)
      setProductDetails({
        productName: response.data?.productName,
        productDesc: response.data?.productDesc,
        price: response.data?.price,
        instocks: response.data?.instocks,
        MRP: response.data?.MRP,
        offPercentage: response.data?.offPercentage
      })
    }

    const handleUpdateValues = (e) =>{
      const {name, value} = e.target;
      setProductDetails((pre)=>{
        return {
          ...pre, [name]:value
        }
      })
    }

    const updateProductDetails = async () =>{
      try{
        const response = await updateProduct(productDetails, token, id);
        console.log(response)
      }catch(err){
        console.log(err)
      }
    }

  return (
    <div className='min-h-screen flex flex-col items-center py-10'>
      <p className='text-2xl font-semibold text-center mb-4'>UPDATE THE PRODUCT</p>
      <div className='flex flex-col items-center justify-center w-[70%] gap-5'>
        <div className='flex w-[300px] h-[300px] items-center justify-center border flex-col relative rounded-lg'>
          {/* <span className='flex absolute top-0 text-lg font-semibold'>upload product image</span> */}
            <img src={image ? URL.createObjectURL(image) : pf + "/" + product?.productImage} alt='' className='w-[90%] h-[90%] rounded-lg'/>
            <label htmlFor='pimage' className='absolute top-[50%] bottom-[50%] text-4xl cursor-pointer z-50 bg-[white] rounded-full w-[40px] h-[40px] flex items-center justify-center font-bold'>
              <AiOutlineUpload className='font-bold'/>
            </label>
        </div>
        <input style={{display:"none"}} type='file' id='pimage' onChange={(e)=>setImage(e.target.files[0])
        } />
        <input type="text" placeholder="enter productName" value={productDetails?.productName} className='w-[60%] outline-none border border-[black] py-3 px-8 rounded-lg' name='productName' onChange={handleUpdateValues}/>

        <input type="text" placeholder="enter Product Desc" value={productDetails?.productDesc} className='w-[60%] outline-none border border-[black] py-3 px-8 rounded-lg' name='productDesc' onChange={handleUpdateValues}/>

        <input type="Number" placeholder="enter product quantity" value={productDetails?.instocks} className='w-[60%] outline-none border border-[black] py-3 px-8 rounded-lg' name='instocks' onChange={handleUpdateValues}/>

        <input type="number" placeholder="enter Price" value={productDetails?.price} className='w-[60%] outline-none border border-[black] py-3 px-8 rounded-lg' name='price' onChange={handleUpdateValues}/>

        <input type="number" placeholder="enter MRP" value={productDetails?.MRP} className='w-[60%] outline-none border border-[black] py-3 px-8 rounded-lg' name='MRP' onChange={handleUpdateValues}/>

        <input type="number" placeholder="enter the off percentage" value={productDetails?.offPercentage} className='w-[60%] outline-none border border-[black] py-3 px-8 rounded-lg' name='offPercentage' onChange={handleUpdateValues}/>

        <input type="text" placeholder="enter product category eg:electronics, speakers etc" value={product?.category} className='w-[60%] outline-none border border-[black] py-3 px-8 rounded-lg' name='category' onChange={handleUpdateValues}/>

        <input type="text" placeholder="enter available colors use comma to seperate between colors" className='w-[60%] outline-none border border-[black] py-3 px-8 rounded-lg'/>

        <span>update product images from all 4 sides</span>
        <div className='flex border w-[60%] flex-wrap relative items-center justify-center gap-3 min-h-[600px] rounded-lg border-[black]'>
          <input  type='file' id='multiple-img' style={{display:"none"}} multiple onChange={handleChange} />
          <label className='absolute w-[40px] h-[40px] cursor-pointer my-2 mx-2' htmlFor='multiple-img'>
          <AiOutlineCloudUpload className='text-3xl'/>
          </label>
          {
            images.length > 0 ?
            images.map((item,i)=>{
              return (
                <div className='flex w-[47%] items-center justify-center h-[300px] py-4'>
                <img src={URL.createObjectURL(item)} alt='' className='h-[98%] rounded-lg'/>
              </div>
              )
            })
            :
            allPrevImages && allPrevImages.map((item,i)=>{
              return (
                <div className='flex w-[47%] items-center justify-center h-[300px] py-4' key={i}>
                <img src={pf + "/" + item} alt='' className='h-[98%] rounded-lg'/>
              </div>
              )
            })
          }
        </div>
        <button className='py-2 px-5 bg-[rgba(0,0,0,0.8)] cursor-pointer rounded-lg text-[white]' onClick={updateProductDetails}>COFIRM UPDATE</button>
      </div>
    </div>
  )
}

export default UpdateProduct
