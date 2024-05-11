import React from 'react'
import Upload from './pages/Upload'
import {Routes, Route, Navigate} from "react-router-dom"
import Homepage from './pages/Homepage'
import UpdateOrder from './pages/UpdateOrder'
import Orders from './pages/Orders'
import UpdateProduct from './pages/UpdateProduct'
import Products from './pages/Products'
import Navbar from './componenets/Navbar'
import Login from './pages/Login'
import { useSelector } from 'react-redux'

const App = () => {
  const user = useSelector((state)=>state.user.currentUser)
  return (
    <>
    {user && <Navbar /> }
    <Routes>
      <Route path='/' element={user ? <Homepage /> : <Navigate to={`/login`} />} />
      <Route path='/product' element={user ? <Upload /> : <Navigate to={`/login`} />} />
      <Route path='/order/:id' element={user ? <UpdateOrder /> : <Navigate to={`/login`} />} />
      <Route path='/products' element={user ? <Products /> : <Navigate to={`/login`} />} />
      <Route path='/orders' element={user ? <Orders /> : <Navigate to={`/login`} />} />
      <Route path='/login' element={!user ? <Login /> : <Navigate to={`/`} />} />
      <Route path='/product/:id' element={user ?<UpdateProduct /> : <Navigate to={`/login`} />} />
    </Routes>
    </>
  )
}

export default App
