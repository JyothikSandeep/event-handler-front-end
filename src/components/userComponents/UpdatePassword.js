import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
const UpdatePassword = () => {
    const [data, setData] = useState({});
    const d=useSelector((state)=>state.loginSlice.user_id);

    const onsubmit=async()=>{
      const value=await axios.post("http://localhost:5000/user/updatepassword",{user_id:d,data});
      console.log(value)

      


    }
  return (
    <div className="flex justify-center items-center mt-10">
      {console.log(d)}
      <div className="border border-gray-400 w-1/4 ">
        <h1 className="p-4 text-center text-2xl font-bold">Update password</h1>
        <div className="text-center p-3">
          <input
            type="text"
            placeholder="Enter current password"
            className="border-2 border-black text-center p-2 mb-4"
            name="current_password"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Enter new password"
            className="border-2 border-black text-center p-2"
            name="new_password"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
          <button
            className="border-2 p-2 rounded mb-5 mt-3 bg-blue-200 w-1/2 hover:bg-blue-500"
            onClick={onsubmit}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdatePassword