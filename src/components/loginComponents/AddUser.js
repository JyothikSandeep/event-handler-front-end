import React from 'react'
import { useState } from 'react';
import axios from 'axios'
const AddUser = () => {
  const [data,setData]=useState({});
  const onsubmit=async()=>{
    console.log(data)
    await axios.post("http://localhost:5000/admin/adduser", data);

  }
  return (
    <div className=" flex justify-center mt-10">
      <div className="w-1/4  border-2 ">
        <div className="add-user  mt-5">
          <p className="text-center text-3xl mb-4 color-bg-800">ADD USER</p>
          <input
            type="number"
            name="user_id"
            id=""
            placeholder="Enter user_id"
            className="border-2 w-3/4 text-center p-2 text-center mb-2 ml-10 "
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
          <input
            type="text"
            name="first_name"
            id=""
            placeholder="Enter first name"
            className="border-2 w-3/4 text-center p-2 text-center mb-2 ml-10 "
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
          <input
            type="text"
            name="last_name"
            id=""
            placeholder="Enter last name"
            className="border-2 w-3/4 text-center p-2 text-center mb-2 ml-10 "
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
          <br />
          <input
            type="number"
            name="phonenumber"
            placeholder="Enter phone number"
            className="border-2 text-center p-2 text-center mb-3 ml-10 w-3/4"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
          <input
            type="date"
            name="date_of_birth"
            // placeholder="Enter phone number"
            className="border-2 text-center p-2 text-center mb-3 ml-10 w-3/4"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
          <br />

          <p className="ml-10 text-lg">Select Gender</p>
          <label htmlFor="gender">
            <div className="ml-12">
              <div className="flex ">
                <input
                  type="radio"
                  name="gender"
                  className="mr-2"
                  value="male"
                  onChange={(e) => {
                    setData({ ...data, [e.target.name]: e.target.value });
                  }}
                />
                <p>Male</p>
              </div>
              <div className="flex ">
                <input
                  type="radio"
                  name="gender"
                  className="mr-2"
                  value="female"
                  onChange={(e) => {
                    setData({ ...data, [e.target.name]: e.target.value });
                  }}
                />
                <p>Female</p>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="gender"
                  className="mr-2"
                  value="others"
                  onChange={(e) => {
                    setData({ ...data, [e.target.name]: e.target.value });
                  }}
                />
                <p>Others</p>
              </div>
            </div>
          </label>

          <button
            className="ml-[100px] border-2 p-2 rounded mb-5 mt-3 bg-blue-200 w-1/2 hover:bg-blue-500"
            onClick={onsubmit}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUser