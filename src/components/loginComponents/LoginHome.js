import React from 'react'
import AddUser from './AddUser';
import { IoPersonAdd } from "react-icons/io5";
import LoginNav from './LoginNav';
import DisplayAllUsers from './DisplayAllUsers';
import DisplayPastEvents from './DisplayPastEvents';
// import AddUser from './AddUser';
const LoginHome = () => {

  return (

    <div>
      {/* <LoginNav></LoginNav> */}
      <DisplayAllUsers></DisplayAllUsers>
      <DisplayPastEvents></DisplayPastEvents>
      <AddUser></AddUser>
      
      
        

    </div>
  )
}

export default LoginHome