import React from 'react'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { IoMan } from "react-icons/io5";
const UserDisplayEvent = () => {
  const location = useLocation();
  useEffect(() => {
    // setData(location.state) ;
    const { state } = location;
    setData(state);
  }, []);

  const [d, setData] = useState({});

  return (
    <div className="flex justify-center">
      <div className="card w-3/4 border-2 border-gray-200 p-10 mt-10 rounded hover:shadow-xl">
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">{d.event_name}</p>
          <div className="flex">
            <p className="text-xl text-end text-gray-500 font-semibold mr-3">
              {d.type_of_event}
            </p>
            <p className="flex ">
              <IoMan size={25} className="" />
              {d.headcount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDisplayEvent