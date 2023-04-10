import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import SignTab from '../pages/SignTab'
import CreatePost from './../components/CreatePost';
import AllUser from './../components/AllUser';
import SinglePost from '../components/SinglePost';
import AuthenticateUser from '../pages/Userprofile/AuthenticateUser';
import Edit from '../components/Edit';
import UserEdit from '../pages/UserEdit';
import PrivateRoute from '../components/privateRoute/PrivateRoute';


const AllRoutes = () => {


  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/Allpost/:id" element={<SinglePost/>} />

        <Route path="/Edit/:id" element={
          <PrivateRoute>
        <Edit/>
          </PrivateRoute>
        } />

        <Route path="/UserEdit/:id" element={<UserEdit/>} />

        <Route path='/sign' element={<SignTab/>} />
        <Route path='/Createpost' element={
          <PrivateRoute>    
        <CreatePost/>
          </PrivateRoute>
        } />
         <Route path="/profile" element={
          <PrivateRoute>
         <AuthenticateUser/>
          </PrivateRoute>
         } />
        <Route path='/user' element={<AllUser/>} />

     </Routes>
    
    </>
  )
}

export default AllRoutes