import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import SignTab from '../pages/SignTab'
import CreatePost from './../components/CreatePost';
import AllUser from './../components/AllUser';


const AllRoutes = () => {


  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign' element={<SignTab/>} />
        <Route path='/Createpost' element={<CreatePost/>} />
        <Route path='/user' element={<AllUser/>} />

     </Routes>
    
    </>
  )
}

export default AllRoutes