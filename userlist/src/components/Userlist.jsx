import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ADD_DATA } from "../actions/index";
import Userinfo from "./Userinfo";
import Usercard from "./Usercard";

function Userlist() {
  const [pageNo, setPageNo] = useState(1);
  const userlist = useSelector((state) => state.userdata);
  const [cardvisiblestatus, setCardvisiblestatus] = useState(false);
  const cardRef = useRef();
  const dispatch = useDispatch();

  const changePage = (pageNo) => {
    setPageNo(pageNo);
  };

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
    <div className="w-full h-full flex relative bg-orange-200 overflow-hidden">
      <div className="w-full flex flex-col">
        <div className="w-full text-center font-mono p-5 bg-slate-50">
          UserList Using React and Redux
        </div>

        <div className="md:w-full lg:px-44 md:px-36 px-10 text-center">

          <div className="md:w-full w-fit p-5 mt-5 bg-slate-100 grid lg:grid-cols-[300px_150px_150px_40px] grid-cols-[200px_100px_100px_20px] items-center gap-4 rounded-t overflow-hidden">
            <div className="font-extrabold font-serif text-xl">Name</div>
            <div className="font-extrabold font-serif text-xl">Status</div>
            <div className="font-extrabold font-serif text-xl">Access</div>
            <div></div>
          </div>

          <div className="md:w-full w-fit py-5 border-t p-3 bg-slate-100 rounded-b overflow-hidden">
            {userlist.length > 0
              ? userlist.map((user, index) => {
                  return (
                    <Userinfo
                      key={index}
                      index={index}
                      mouseEnter={() => setCardvisiblestatus(true)}
                      mouseLeave={() => setCardvisiblestatus(false)}
                    />
                  );
                })
              : null}
          </div>

          <div className="w-fit mt-2 m-auto">
            <button
              className="p-2 border-2 border-blue-200 border-r-0 rounded-s-md bg-blue-100 hover:bg-blue-200"
              onClick={() => changePage(1)}
            >
              1
            </button>
            <button
              className="p-2 border-2 border-blue-200 border-l-1 rounded-e-md bg-blue-100 hover:bg-blue-200"
              onClick={() => changePage(2)}
            >
              2
            </button>
          </div>

          <div
            className={`absolute top-1/4 lg:right-20 ${
              cardvisiblestatus ? "block" : "hidden"
            } right-10 w-64`}
            ref={cardRef}
          >
            <Usercard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userlist;
