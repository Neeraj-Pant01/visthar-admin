import React from 'react'
import { AiFillEdit } from "react-icons/ai"
import {Link} from "react-router-dom"

const Order = () => {
  return (
    <div className='flex items-center justify-between py-3 px-10 w-[70%] border rounded-lg gap-10'>
      <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049' alt='order-image' className='w-[150px] h-[150px] rounded-lg' />
      
      <div className='flex flex-col text-[grey] font-semibold gap-2'>
        <div className='flex items-center justify-between w-[250px]'>
        <span>ProductName : </span>
        <span>Item Name</span>
        </div>
        <div className='flex items-center justify-between w-[250px]'>
        <span>Order Placed On : </span>
        <span>Item Name</span>
        </div>
        <div className='flex items-center justify-between w-[250px]'>
        <span>Order Status : </span>
        <span>Item Name</span>
        </div>
        <div className='flex items-center justify-between w-[250px]'>
        <span>Total Amount : </span>
        <span>Item Name</span>
        </div>
        {/* <span>Quantity</span>
        <span>size</span>
        <span>color</span>
        <span>is completed</span>
        <span>Payment Made</span> */}
      </div>
      <Link to={`/order/123`} className='flex items-center bg-[rgba(0,0,0,0.8)] cursor-pointer text-[white] py-2 px-4 h-max rounded-lg self-end'>
        <span>edit order</span>
        <AiFillEdit className='text-xl'/>
      </Link>
    </div>
  )
}

export default Order
