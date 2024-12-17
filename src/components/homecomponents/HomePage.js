import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import { login_user,change_account } from '../../Slices/LoginSlice';
const HomePage = () => {
  const [data, setData] = useState({});
 
  const dispatch=useDispatch()
  // const count = useSelector((state) => state.loginSlice.user_id); // Access state
  
  const Navigate = useNavigate();
  const onsubmit = async () => {
    const result = await axios.post("http://localhost:5000/login", data);
    console.log(result.data);
    if(result.data.user_id=="admin"){
      dispatch(change_account("admin"))
      Navigate("/admin")
    }
    else if (result.data.initial_password) {
      dispatch(login_user(result.data.user_id));
      dispatch(change_account("user"));

      Navigate("/updatepassword");
    } else {
      dispatch(login_user(result.data.user_id));
      dispatch(change_account("user"));
      Navigate("/userhome");
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      {/* {console.log(count)} */}
      <div className="flex justify-center mt-10">
        <div className="w-1/4 border border-gray-200 p-4 ">
          <p className="text-center text-2xl font-semibold">Login</p>
          <div className="text-center mt-5">
            <input
              type="text"
              className="border-2 w-3/4 text-center p-2 text-center mb-5  "
              placeholder="Enter User Id"
              name="username"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
            <input
              type="password"
              className="border-2 w-3/4 text-center p-2 text-center   "
              placeholder="Enter password"
              name="password"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="text-center mt-5 ">
            <button
              className=" border-2 p-2 rounded mb-5 mt-1 bg-blue-200 w-3/4  hover:bg-blue-500"
              onClick={onsubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage