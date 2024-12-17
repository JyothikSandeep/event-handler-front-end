import React from 'react'
import {useSelector} from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
const UserProfile = () => {
  const data=useSelector((state)=>state.loginSlice);
  useEffect(()=>{

    const getData=async()=>{
      setD(await axios.post("http://localhost:5000/user/userprofiledata",data));
      
    }
    getData()

  },[data]);
  const [d,setD]=useState({data:{user_id:"",first_name:"",last_name:"",phonenumber:"",gender:""}})

  return (
    <div className="flex justify-center">
      {console.log}
      <div className="w-3/6 m-10 border border-gray-200 p-10">
        <p className="text-2xl font-bold text-center">Profile</p>
        <div>
          <div className="flex  justify-between mt-5 mb-3">
            <p className="ml-10 w-1/2 text-center text-xl font-xl">UserId</p>
            <p className="mr-10 w-1/2 text-center text-xl font-xl">
              First name
            </p>
          </div>
          <div className="flex justify-between">
            <p className="ml-10 border border-gray-200 p-2 w-1/2 text-center mr-10">
              {d.data.user_id}
            </p>
            <p className="mr-10  border border-gray-200 p-2 w-1/2 text-center">
              {d.data.first_name}
            </p>
          </div>
          <div className="flex  justify-between mt-5 mb-3">
            <p className="ml-10 w-1/2 text-center text-xl font-xl">Lastname</p>
            <p className="mr-10 w-1/2 text-center text-xl font-xl">
              Phone number
            </p>
          </div>
          <div className="flex justify-between">
            <p className="ml-10 border border-gray-200 p-2 w-1/2 text-center mr-10">
              {d.data.last_name}
            </p>
            <p className="mr-10  border border-gray-200 p-2 w-1/2 text-center">
              {d.data.phonenumber}
            </p>
          </div>
          <div className="ml-[150px]  mt-5 mb-3">
            <p className='text-xl'>Gender</p>
          </div>
          <p className="mr-10  border border-gray-200 p-2 w-1/2 text-center">
            {d.data.gender}
          </p>
        </div>
      </div>

      {/* {console.log(d)} */}
    </div>
  );
}

export default UserProfile