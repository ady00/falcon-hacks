import React from "react";
import { Divider } from "./divider";

export const Events = () => {
  return (
    <div
      className={`w-full border-gray-300 border-4 rounded-lg font-dot text-white p-2 justify-between h-full col-span-2 sm:col-span-1`}
    >
      <div>
        <h1 className="text-3xl">Events</h1>
        <Divider color="bg-slate-800" />
        <div
          className="font-mono text-2xl text-blue-100 ps"
          // transform: translateY(10px);
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          {/* <h1>Events</h1> */}
          <ul>
            <li>- JO applications due (09.20.22)</li>
            <li>- Falconhacks (TBD)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
