import React from 'react'
import { IoPersonAdd } from "react-icons/io5";
import { FaRegAddressBook } from "react-icons/fa";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { TbCalendarEventFilled } from "react-icons/tb";

import {Link} from 'react-router-dom'
const LoginNav = () => {
  return (
    <div className="flex justify-center">
      <Link className="flex border-4 p-2 border-gray-200 " to="/admin/adduser">
        add user <IoPersonAdd size={25} />
      </Link>
      <Link
        className="flex border-4 p-2 border-gray-200"
        to="/admin/displayallusers"
      >
        Display All Users <FaRegAddressBook size={25} />
      </Link>
      <Link
        className="flex border-4 p-2 border-gray-200"
        to="/admin/createevent"
      >
        Create event <TbCalendarEventFilled size={25} />
      </Link>
      <Link
        className="flex border-4 p-2 border-gray-200"
        to="/admin/displaypastevents"
      >
        Display past events <MdOutlineContentPasteSearch size={25} />
      </Link>
      <Link
        className="flex border-4 p-2 border-gray-200"
        to="/admin/displayupcomingevents"
      >
        Display upcoming events <MdOutlineContentPasteSearch size={25} />
      </Link>
      <Link
        className="flex border-4 p-2 border-gray-200"
        to="/admin/displayongoingevents"
      >
        Display ongoing events <MdOutlineContentPasteSearch size={25} />
      </Link>
    </div>
  );
}

export default LoginNav