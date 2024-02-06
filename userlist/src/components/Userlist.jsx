import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ADD_DATA } from "../actions/index";
import Userinfo from "./Userinfo";

function Userlist() {
  const [pageNo, setPageNo] = useState(1);
  const userlist = useSelector((state) => state.userdata);
  const dispatch = useDispatch();
  console.log(userlist);

  const changePage = (pageNo) => {
    setPageNo(pageNo);
  }

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(
        `https://reqres.in/api/users?page=${pageNo}`
      );
      dispatch(ADD_DATA(data.data));
    };
    getdata();
  }, [pageNo]);

  return (
    <div className="text-center m-10 w-full">
      <div className="font-mono p-5 bg-slate-50">
        UserList Using React and Redux
      </div>

      <div className="w-fit m-auto p-5 mt-3 bg-slate-100 grid grid-cols-[300px_150px_150px_40px] items-center gap-4">
        <div className="font-extrabold font-serif text-xl">Name</div>
        <div>Status</div>
        <div>Access</div>
        <div></div>
      </div>

      <div className="w-fit m-auto mt-1 p-5 bg-slate-100 grid grid-cols-[300px_150px_150px_40px] items-center gap-4">
        {userlist.length > 0
          ? userlist.map((user, index) => {
              return <Userinfo key={index} index={index} />;
            })
          : null}
      </div>

      <div className="m-3">
        <button className="p-2 border-2 border-blue-200 border-r-0 rounded-s-md hover:bg-blue-100" onClick={()=>changePage(1)}>1</button>
        <button className="p-2 border-2 border-blue-200 border-l-1 rounded-e-md hover:bg-blue-100" onClick={()=>changePage(2)}>2</button>
      </div>
    </div>
  );
}

export default Userlist;
