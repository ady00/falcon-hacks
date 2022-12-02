import React, { useEffect, useState } from "react";
import { Divider } from "./divider";
// import "../styles/Home.module.css";

interface props {
  span: string;
}

export const Square = (props: props) => {
  const target = "About Us";
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const tick = () => {
    setDone(text.length == target.length);
    setText(target.substring(0, text.length + 1));
  };
  useEffect(() => {
    let i: any;
    if (!done) {
      i = setInterval(() => {
        tick();
      }, 200);
    }

    return () => {
      clearInterval(i);
    };
  }, [text, done]);

  return (
    <div
      className={`w-full border-gray-300 border-4 rounded-lg ${props.span} font-dot text-white  p-2 box`}
    >
      <h1 className={`text-3xl ${!done ? "txt" : "other"}`}>{text}</h1>
      <Divider color="bg-slate-400" />
      <p className="font-mono text-lg text-blue-100 ps">
        FalconHacks is a 24-hour event between 12/10 and 12/11, where students will be able to design and 
        create their own projects. We will be providing workshops, mentors, and prizes during the event.
        Geared towards beginners and veteran programmers alike, FalconHacks is inclusive for
        anyone who is willing to code and make the next big thing. With free attendance and 
        acess to a plethora of resources and connections, FalconHacks is the premier hackathon for 
        Bay Area high schoolers. Register by signing up through {" "}
        <a href="https://forms.gle/kL6RtitsbidZ7hkMA" className="text-blue-400 italic">
          this form
        </a>{" "} today!
        <br></br>
        <br></br>

        FalconHacks is run by the Foothill High Computer Science Club, a student-run organization.
      </p>
    </div>
  );
};
