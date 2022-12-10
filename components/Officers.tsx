import React from "react";
import { Avatar } from "./Avatar";
import { Divider } from "./divider";

export default function Officers() {
  return (
    <div className=" text-white p-2 rounded-lg w-full lg:col-span-4 h-full  border-gray-300 border-4 box md:col-span-3 col-span-1">
      <h1 className="text-3xl font-dot">Judges</h1>

      <Divider color="bg-slate-600" />
      <div className="w-full grid items-center ">
        <div
          className="grid grid-cols-3 gap-4 text-blue-100 ps"
          style={{ animationDelay: "0.25s", opacity: 0 }}
        >
          <Avatar
            name={"Arnav"}
            desc="President of CS Club"
            picture="https://avatars.dicebear.com/api/initials/AGr.svg"
          />
          <Avatar
            name={"Sean"}
            desc="UCLA '26"
            picture="https://avatars.dicebear.com/api/initials/ST.svg"
          />
          <Avatar
            name={"Lehuy"}
            desc="Founder of Studykit.app"
            picture="https://avatars.dicebear.com/api/initials/LH.svg"
          />
          <Avatar
            name="William"
            desc="President of Studio Heart Engine"
            picture="https://avatars.dicebear.com/api/initials/WP.svg"
          />
        </div>
      </div>
    </div>
  );
}
