import React from 'react';
import { useNavigate } from "react-router-dom";

const UserNav = () => {
  const Navigate = useNavigate();
  return (
    <div className="flex justify-center ">
      <div>
        <button className=" border border-gray-200 p-2" onClick={()=>Navigate("/userhome")}>Home</button>
      </div>
      <div>
        <button className=" border border-gray-200 p-2" onClick={()=>Navigate("/userpastevents")}>Past events</button>
      </div>
      <div>
        <button className=" border border-gray-200 p-2" onClick={()=>Navigate("/userprofile")}>Profile</button>
      </div>
    </div>
  );
}

export default UserNav