import React from "react";
import TrashBtn from "../images/trash.svg";
import { useDispatch, useSelector } from "react-redux";

function Userinfo({ index }) {
  const userlist = useSelector((state) => state.userdata);
  const { avatar, first_name, last_name, email } = userlist[index] || {};
  return (
    <>
      <div className="flex gap-4">
        <img src={avatar} alt="avatar" className="h-10 rounded-full " />
        <div className="flex flex-col">
          <span className="text-sm">{first_name + ` ` + last_name}</span>
          <span className="text-sm">{email}</span>
        </div>
      </div>
      <div>
        <select className="py-2 px-5 bg-blue-50 w-fit rounded ring-1 font-normal outline-none focus:ring-offset-2">
          <option value="Inactive">Inactive</option>
          <option value="Active">Active</option>
        </select>
      </div>
      <div>
        <select className="py-2 px-5 bg-blue-50 w-fit rounded ring-1 font-normal outline-none focus:ring-offset-2">
          <option value="Manager">Manage</option>
          <option value="Employee">Employee</option>
        </select>
      </div>
      <div>
        <button className="p-1 rounded ring hover:ring-offset-1">
          <img
            src={TrashBtn}
            alt="Delete User"
            className="h-6"
          />
        </button>
      </div>
    </>
  );
}

export default Userinfo;
