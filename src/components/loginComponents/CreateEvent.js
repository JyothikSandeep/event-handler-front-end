import React, { useState } from 'react'
import axios from 'axios'
const CreateEvent = () => {
    const [data,setData]=useState({})
    const onsubmit=async()=>{
        console.log(data);
        await axios.post("http://localhost:5000/admin/addevent",data);
    }
  return (
    <div className=" flex justify-center mt-10 ">
      <div className="w-2/4  border-2 pl-8 pr-8">
        <div className="add-user  mt-5">
          <p className="text-center text-3xl mb-4 color-bg-800">Create Event</p>
          <div className="flex ">
            <select
              name="type_of_event"
              id="event"
              className="border-2 w-3/4 text-center p-2 text-center   "
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
            >
              <option value=" ">Select type of event</option>
              <option value="Birthday">Birthday</option>
              <option value="sendoff">Send off party</option>
              <option value="gift">Gift </option>
              <option value="others">Others</option>
            </select>
            <input
              type="text"
              name="event_name"
              id=""
              placeholder="Enter event name"
              className="border-2 w-3/4 text-center p-2 text-center  ml-10 "
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
            />
          </div>
          <br />
          <div className="flex ">
            <input
              type="text"
              name="event_organiser_phonenumber"
              placeholder="Event organizer phone number"
              className="border-2 text-center p-2 text-center mb-3 w-3/4"
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
            />

            <input
              type="text"
              placeholder="Enter event organizer name"
              name="event_organiser"
              className="border-2 text-center p-2 text-center mb-3 ml-10 w-3/4"
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
            />
          </div>

          <div className="flex">
            <input
              type="number"
              placeholder="Enter Amount needed"
              name="event_amount"
              className="border-2 text-center p-2 text-center mb-3  w-3/4"
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
            />
            <input
              type="number"
              name="headcount"
              className="border-2 text-center p-2 text-center mb-3 ml-10 w-3/4"
              placeholder="Head count involved"
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-center ">
            <p className="mr-[300px] text-lg">Enter event date</p>
            <p className="text-lg">Enter Event Day</p>
          </div>
          <div className="flex">
            <input
              type="date"
              name="event_date"
              id=""
              className="border-2 text-center p-2 text-center mb-3 w-3/4"
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
            />
            <input
              type="time"
              name="event_time"
              id=""
              className="border-2 text-center p-2 text-center mb-3 ml-10 w-3/4"
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
            />
          </div>
          <br />
          <div className="flex justify-center">
            <button
              className="flex justify-center border-2 p-2 rounded mb-5 mt-1 bg-blue-200 w-1/2 hover:bg-blue-500"
              onClick={onsubmit}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent