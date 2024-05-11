import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'

const UpdateOrder = () => {
  const [editStatus, setEditStatus] = useState(false)
  const [edit, setEdit] = useState(false)
  return (
    <div className='px-16 flex mt-6'>
      <div className="flex flex-1 items-center justify-center">
      <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049' className='h-[500px] rounded-lg'/>
      </div>
      <div className="flex flex-1 flex-col gap-5">
      <div className='flex items-center justify-between w-[250px] text-lg text-[grey] font-semibold'>
        <span>ProductName : </span>
        <span>Item Name</span>
        </div>
        <div className='flex items-center justify-between w-[250px] text-lg text-[grey] font-semibold'>
        <span>Order Placed On : </span>
        <span>Item Name</span>
        </div>
        <div className='flex items-center justify-between w-[250px] text-lg text-[grey] font-semibold'>
        <span>Order Status : </span>
        {
          editStatus ?
          <select className='border outline-none cursor-pointer' onChange={()=>setEditStatus(false)}>
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
        :
        <span>Pending</span>
        }
        {
          !editStatus &&
        <AiFillEdit onClick={()=>setEditStatus(true)}/>
        }
        </div>
        <div className='flex items-center justify-between w-[250px] text-lg text-[grey] font-semibold'>
        <span>Total Amount : </span>
        <span>Item Name</span>
        </div>
        <div className='flex items-center justify-between w-[250px] text-lg text-[grey] font-semibold'>
        <span>Quantity : </span>
        <span>Item Name</span>
        </div>
        <div className='flex items-center justify-between w-[250px] text-lg text-[grey] font-semibold'>
        <span>Size : </span>
        <span>Item Name</span>
        </div>
        <div className='flex items-center justify-between w-[250px] text-lg text-[grey] font-semibold'>
        <span>Color : </span>
        <span>Item Name</span>
        </div>
        <div className='flex items-center justify-between w-[250px] text-lg text-[grey] font-semibold'>
        <span>Total Amount : </span>
        <span>Item Name</span>
        </div>
        <div className='flex items-center justify-between w-[250px] text-lg text-[grey] font-semibold'>
        <span>Is Completed : </span>
        {
          edit ?
          <select className='border outline-none cursor-pointer' onChange={()=>setEdit(false)}>
          <option value="pending">Yes</option>
          <option value="shipped">No</option>
        </select>
        :
        <span>No</span>
        }
        {
          !edit &&
          <AiFillEdit onClick={()=>setEdit(true)}/>
        }
        </div>
        <div className='flex items-center justify-between w-[250px] text-lg text-[grey] font-semibold'>
        <span>Payment Made : </span>
        <span>Item Name</span>
        </div>
        <div className='flex flex-col'>
        <span className='text-lg font-semibold'>Shipping Address :</span>
        <p className='text-[grey]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ad itaque natus, minima consectetur inventore exercitationem fugiat laboriosam, doloribus velit aperiam quam repellat harum explicabo omnis, deleniti sit nostrum laborum?</p>
      </div>
      <div className='flex flex-col'>
        <span className='text-lg font-semibold'>Shipped TO :</span>
        <p className='text-[grey]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, recusandae.</p>
      </div>
      </div>
    </div>
  )
}

export default UpdateOrder
