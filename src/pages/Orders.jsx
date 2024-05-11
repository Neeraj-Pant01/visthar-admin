import React from 'react'
import Order from '../componenets/Order'

const Orders = () => {
  return (
    <div className='min-h-screen py-5 px-20 gap-5'>
      <p className='text-[grey] md:text-2xl font-semibold text-center my-4'>ORDERS</p>
      <div className='flex items-center justify-around'>
        <div className='flex items-center gap-2 text-xl'>
            Sort Orders :
        </div>
        <div className='flex items-center gap-4'>
            <span className='text-xl text-[grey]'>By Months</span>
            <select className='text-xl text-[grey] cursor-pointer outline-none border rounded-lg'>
                <option value="this month">This Month</option>
                <option value="last month">Last Month</option>
                <option value="2 month ago">2 Month Ago</option>
                <option value="3 month ago">3 Month Ago</option>
            </select>
        </div>
        <div className='flex items-center gap-4'>
            <span className='text-xl text-[grey]'>By Week</span>
            <select className='text-xl text-[grey] cursor-pointer outline-none border rounded-lg'>
                <option value="this month">This week</option>
                <option value="last month">Last week</option>
                <option value="2 month ago">2 week Ago</option>
                <option value="3 month ago">3 week Ago</option>
            </select>
        </div>
      </div>
      <div className='flex flex-col mt-10 items-center gap-2'>
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </div>
  )
}

export default Orders
