import React from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../utils/products'

const Product = ({p}) => {
  const pf = import.meta.env.VITE_REACT_APP_PF
  const token = useSelector((state)=>state.user.currentUser.token)


  const handleDelete = async () =>{
    console.log(p._id)
    const response = await deleteProduct(token, p._id)
    console.log("deleted resposne is ",response);
    window.location.reload();
  }


  return (
    <div className='flex items-center justify-between w-[70%] border px-5 py-3 rounded-lg'>
      <img src={pf + "/" + p?.productImage} className='w-[80px] h-[80px]'/>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center gap-3'>
            <span className='font-semibold'>ProductName:</span>
            <span className='text-[grey] font-semibold'>{p?.productName}</span>
        </div>
        <div className='flex justify-between items-center'>
            <span className='font-semibold'>Price:</span>
            <span className='text-[grey] font-semibold'>{p?.price}</span>
        </div>
        <div className='flex justify-between items-center'>
            <span className='font-semibold'>Instocks:</span>
            <span className='text-[grey] font-semibold'>{p?.instocks}</span>
        </div>
      </div>
      <div className='flex items-center gap-3'>
      <Link to={`/product/${p?._id}`} className='flex py-2 px-4 bg-[rgba(0,0,0,0.8)] text-[lightgreen] items-center gap-1 rounded-lg'>
        Edit <AiFillEdit />
      </Link>
      <button className='flex py-2 px-4 bg-[rgba(0,0,0,0.8)] text-[red] items-center gap-1 rounded-lg' onClick={handleDelete}>delete<AiFillDelete />
      </button>
      </div>
    </div>
  )
}

export default Product
