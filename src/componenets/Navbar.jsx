import React from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import {Link} from "react-router-dom"

const Navbar = () => {
  const handleLogOut = () =>{
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div className='flex sticky top-0 border bg-[rgba(0,0,0,0.8)] py-4 items-center justify-between px-20 z-[100]'>
      <Link to={'/'} className='flex items-center text-2xl text-[white] font-semibold cursor-pointer'>
        VISTHAR
      </Link>
      <div className='flex items-center gap-7 text-[white]'>
        <Link to={'/product'}>UPLOAD NEW PRODUCT</Link>
        <Link to={'/products'}>VIEW PRODUCTS</Link>
        <Link to={'/orders'}>VIEW ORDERS</Link>
      </div>
      <div className='flex items-center gap-6'>
        <span className='text-[white] font-semibold'>Admin</span>
        <button className='py-2 px-3 flex items-center bg-[white] rounded-lg' onClick={handleLogOut}>Logout <AiOutlineLogout /></button>
      </div>
    </div>
  )
}

export default Navbar
