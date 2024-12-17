import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { IoMan } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const DisplayUpcomingEvents = () => {
   const navigate = useNavigate();
  useEffect(()=>{
    async function getData(){
      const d = await axios.get("http://localhost:5000/admin/upcomingevents");
      console.log(d);
      setData(d.data);
    }
    getData()

  },[]);
  const [data,setData]=useState([])
  return (
    <>
      <h1 className="text-2xl text-center mt-8">Display upcoming Events need to be planned</h1>
      <div className="grid grid-cols-3 gap-10 ml-[200px] mr-[200px] mt-10">
        {data.map((d) => {
          return (
            <div className="border border-gray-300 p-4 rounded-md shadow-md bg-white hover:shadow-xl">
              <div className="flex justify-end">
                <p className="text-xs text-end text-gray-500 font-semibold mr-3">
                  {d.type_of_event}
                </p>
                <p className="flex ">
                  <IoMan size={20} className="" />
                  {d.headcount}
                </p>
              </div>
              <p className="text-lg text-center mt-2">{d.event_name}</p>
              <div className="flex justify-around font-semibold">
                <p>Event date</p>
                <p>Event time</p>
              </div>
              <div className="flex justify-around">
                <p>
                  {new Date(d.date_of_birth).getDate() +
                    "- " +
                    new Date(d.date_of_birth).getMonth() +
                    "- " +
                    new Date(d.date_of_birth).getFullYear()}
                </p>
                <p>{d.event_time}</p>
              </div>

              <div className="flex ml-10 font-semibold mt-2">
                <p>Organizer Details</p>
                {/* <p>Organizer phone number</p> */}
              </div>

              <div className="flex justify-around">
                <p>{d.event_organiser}</p>
                <p>{d.event_organiser_phonenumber}</p>
              </div>
              <div className="flex ml-10 mt-3 font-semibold">
                <p>Amount required</p>
              </div>
              <div className="flex ml-10">
                <p>{d.event_amount}</p>
              </div>

              <div className="text-center mt-3">
                <button
                  className="p-2 rounded bg-gray-200 hover:bg-gray-400 shadow-xl "
                  onClick={() =>
                    navigate("/admin/displayeventdetails", { state: d })
                  }
                >
                  View details
                </button>
              </div>
              {/* {d.event_name} */}
            </div>
          );
        })}
      </div>
    </>
  );
}


export default DisplayUpcomingEvents