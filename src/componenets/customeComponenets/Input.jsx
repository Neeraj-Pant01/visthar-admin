import React from 'react'

const Input = ({type, placeholder,handleInputChange,name}) => {
  return (
    <>
    <input type={`${type}`} name={name} onChange={handleInputChange} placeholder={`${placeholder}`}  className='w-[60%] outline-none border border-[black] py-3 px-8 rounded-lg'/>
    </>
  )
}

export default Input
