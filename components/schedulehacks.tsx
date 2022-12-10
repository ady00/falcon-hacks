import React from "react";
import { Divider } from "./divider";

export const Schedule = () => {
  return (
    <div
      className={`w-full border-gray-300 border-4 rounded-lg font-dot text-white p-2 justify-between h-full col-span-1 md:col-span-2 box lg:col-span-1`}
    >
      <div>
        <h1 className="text-3xl">Schedule</h1>
        <Divider color="bg-slate-800" />
        <div
          className="font-mono text-md text-blue-100 ps"
          // transform: translateY(10px);
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <div className="grid grid-cols-2 gap-3">
            <p>9.00 AM SAT</p>
            <p>Opening Ceremony</p>
            <p>11.00 AM SAT</p>
            <p>Git/Github tutorial session by William</p>
            <p>2.30 PM SAT</p>
            <p>Game Development Workshop by Studio Heart Engine</p>
            <p>5.00 PM SAT</p>
            <p>Web Development Workshop by Girls Who Code Club</p>
            <p>7.00 PM SAT</p>
            <p>App Development Workshop by FHS App Dev Club</p>
            <p>9.00 PM SAT</p>
            <p>Machine Learning Workshop by Claire</p>
            <p>11.00 AM SUN</p>
            <p>Projects are due</p>
            <p>4.00 PM SUN</p>
            <p>Winners are announced</p>
          </div>
        </div>
      </div>
    </div>
  );
};
