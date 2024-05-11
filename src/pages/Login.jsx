import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import { } from "react-icons/ai"

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    mobile: ""
  })
  const [mobile, setMobile] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [err, setErr] = useState(false)
  const [errMsg, setErrMsg] = useState()
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_DBURI}/api/v1/auth/login`, userDetails)
      console.log(response.data)
      dispatch(login(response.data))
      setLoading(false)
      navigate('/')
    } catch (err) {
      setLoading(false)
      console.log(err)
      setErr(true)
      setErrMsg(err.message)
      setTimeout(() => {
        setErr(false)
      }, 10000);

    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((pre) => {
      return {
        ...pre, [name]: value
      }
    })
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-[black]'>
      <form onSubmit={handleLogin} className='border flex flex-col bg-[white] px-6 py-6 gap-4 rounded-lg'>
        <h1 className='text-center text-lg font-semibold text-[teal]'>Admin Login</h1>
        {
          mobile ?
            <input type='text' className='border outline-none bg-[lightgrey] md:py-2 py-2 md:px-4 px-4 rounded-lg' name='mobile' onChange={handleChange} placeholder='enter mobile' autoComplete='off' />
            :
            <input type='email' className='border outline-none bg-[lightgrey] md:py-2 py-2 md:px-4 px-4 rounded-lg' onChange={handleChange} placeholder='enter email' autoComplete='off' />
        }
        {
          mobile ?
            <span className='text-lg text-[teal] cursor-pointer underline' onClick={() => setMobile(false)}>use email instead</span>
            :
            <span className='text-lg text-[teal] cursor-pointer underline' onClick={() => setMobile(true)}>use mobile instead</span>
        }
        <input type='password' className='border outline-none bg-[lightgrey] md:py-2 py-2 md:px-4 px-4 rounded-lg' name='password' onChange={handleChange} placeholder='enter password' />
        <button className='bg-[teal] py-2 rounded-lg text-[white]' >{loading ? "Loading.." : "Login"}</button>
        {
          err &&
          <div className='flex items-center justify-center text-center text-[red] text-lg'>
            {
              errMsg
            }
          </div>
        }
      </form>
    </div>
  )
}

export default Login
