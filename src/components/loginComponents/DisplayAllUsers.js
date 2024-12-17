import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
const DisplayAllUsers = () => {
  useEffect(()=>{

    async function dataCollect(){

      const d=( await axios.get("http://localhost:5000/admin/getusersdata"))
      setData(d.data);
    } 
    dataCollect()

  },[])
  const [data,setData]=useState([])
  return (
    <div>
      {console.log(data)}
      {data == [] ? (
        <p>Currently there are no users to display</p>
      ) : (
        <div className="flex justify-center">
          <table className=" mt-8 border border-gray-300 w-1/2">
            <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th>phone number</th>
              <th>Gender</th>
            </tr>
            {data.map((d) => (
              // <div>

              <tr>
                <td className="text-center">{1}</td>
                <td className="text-center">{d.name}</td>
                <td className="text-center">{d.phonenumber}</td>
                <td className="text-center">{d.gender}</td>
              </tr>
              // </div>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default DisplayAllUsers