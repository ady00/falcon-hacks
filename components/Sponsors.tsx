import { useEffect, useState } from "react";
import { Divider } from "./divider";
import { Link } from "./link";

export const Sponsors = () => {
  const target = "Sponsors";
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
      className={`w-full border-gray-300 border-4 rounded-lg  font-dot text-white p-2 box col-span-1 `}
    >
      <h1 className={`text-3xl ${!done ? "txt" : "other"}`}>{text}</h1>
      <Divider color="bg-slate-400" />
      <div className="w-full grid place-content-center">
        <Link
          text={
            <img
              src="./Group_2logo.png"
              className="hover:scale-110 transition-all ease-in-out 2s"
            />
          }
          href="https://studykit.app"
          blank
        />
        <div className="font-mono">
          Thanks to{" "}
          <Link text="Studykit.app" blank href="https://studykit.app" /> for
          sponsoring our hackathon. Studykit provides premium and effective
          study tools for free. Go check them out if you are interested.
        </div>
      </div>
    </div>
  );
};
