import React from 'react'
import Navbar from '../homecomponents/Navbar'
import LoginNav from './LoginNav';
import UserNav from '../userComponents/UserNav';
import { useSelector } from 'react-redux';
const Layout = ({children}) => {
  const data=useSelector((state)=>state.loginSlice.account_type)
  return (
    <div>
      {console.log(data)}

      {data=="user"&&(<UserNav></UserNav>)}
      {data=="admin"&&(<LoginNav></LoginNav>)}
      
      
      {children}</div>
  )
}

export default Layout