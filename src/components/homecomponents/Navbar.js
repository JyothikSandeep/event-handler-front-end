import React from 'react'
import { MdLogin } from "react-icons/md";
import {Link,useNavigate} from 'react-router-dom'

const Navbar = () => {
    const Navigate=useNavigate()
  return (
    <div className="bg-gray-400 pt-4 pb-4 pl-7 pr-10 flex justify-between">
      <div className="logo text-4xl ">BMX</div>
      <div className="login ">
        <button className="text-lg p-2 border-2 border-green-700 m-2 hover:border-red-200  rounded flex" onClick={()=>{
            Navigate("/login") 
        }}>
          Login <MdLogin size={25}/>
        </button>
      </div>
    </div>
  );
}

export default Navbar