import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import LoginHome from './LoginHome';
const LoginPage = () => {
    const [data,setData]=useState({});
    const Navigate=useNavigate()
    function onHandleChange(){
        Navigate("/admin")
        console.log(data);
    }
  return (
    <div className="flex items-center justify-center">
      <div className="border-2 border-gray-200 p-9 m-20">
        <div>
          <p className="text-center text-2xl mb-4">Login</p>
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter userID"
            className="border-2 border-black text-center p-1"
            name="user_id"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            className="border-2 border-black text-center p-1"
            name="password"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="text-center">
          <button className="text-lg border-2 border-green-700 hover:border-red-200 mt-6 p-1  rounded-xl" onClick={onHandleChange}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage