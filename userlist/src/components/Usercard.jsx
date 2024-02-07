import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Usercard() {
  const usercard = useSelector((state) => state.usercarddata);
  console.log(usercard);
  const { avatar, first_name, last_name, email, id, status } = usercard || {};
  const [randomvalue, setRandomvalue] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    let random = Math.floor(Math.random() * 200) + 1;
    setRandomvalue(random);
  }, [usercard]);

  return (
    <div className="bg-slate-100 z-10 p-8 w-64 mt-4 h-80 rounded-lg flex flex-col gap-2 items-center justify-center">
      <img src={avatar} alt="avatar" className="h-16 w-16 rounded-full" />
      <span className="text-md font-semibol">
        {first_name + ` ` + last_name}
      </span>
      <span className="text-sm text-slate-500">{email}</span>

      <div className="font-bold">Your Plan : Standard</div>

      <button
        className={`${
          status === `Active` ? "bg-green-600" : "bg-amber-400"
        } rounded py-2 w-full`}
      >
        {status}
      </button>
      <div className="w-full flex flex-col gap-1 items-start justify-start">
        <span className="w-full">Plan Use</span>
        <div className="h-2 w-full border rounded ">
          <div
            className={`h-full ${
              randomvalue < 50
                ? "bg-red-600"
                : randomvalue < 120
                ? "bg-amber-500"
                : "bg-lime-600"
            } rounded`}
            style={{ width: `${randomvalue}px` }}
          ></div>
        </div>
      </div>
      <div className="flex">
        <div className="p-2 flex flex-col items-center border-r">
          <span>1000</span>
          <span className="font-sans text-xs">Clicks reviewed</span>
        </div>
        <div className="p-2 flex flex-col items-center border-l">
          <span>5000</span>
          <span className="font-sans text-xs">Monthly clicks</span>
        </div>
      </div>
    </div>
  );
}

export default Usercard;
