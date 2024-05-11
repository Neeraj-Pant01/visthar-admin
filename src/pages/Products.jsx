import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Product from '../componenets/Product'
import { getProducts } from '../utils/products'
import { useSelector } from 'react-redux'

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    getAllProducts()
  },[])

  const token = useSelector((state)=>state.user.currentUser.token)

  const getAllProducts = async () =>{
    const allproduct = await getProducts(token);
    console.log("all products are", allproduct)
    setProducts(allproduct.data)
  }

  return (
    <div className='min-h-screen flex flex-col px-16 py-8'>
      <div className='flex items-center justify-center'>
        <div className='flex items-center gap-5 border bg-[#f7f4f4] px-3 rounded-lg'>
            <input type='text' className='outline-none bg-[transparent] py-2 px-5' placeholder='seach product' />
            <AiOutlineSearch className='text-2xl font-semibold text-[grey] cursor-pointer' />
        </div>
      </div>
      <div className='flex flex-col items-center gap-4 mt-5'>
        {
          products.length >0 && products.map((p,i)=>{
            return (
              <Product p={p} key={i} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Products
