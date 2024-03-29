import React, { MutableRefObject, useEffect, useRef } from "react";
import { Link } from "./link";

interface props {
  span: string;
}

export default function DotMatrix() {
  // const first = useRef()
  const el = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const ele = el.current;
    ele.addEventListener("mousemove", (ev) => {
      const x =
        (Math.abs(ev.clientX - ele.getBoundingClientRect().x) /
          ele.clientWidth -
          0.5) *
        20;
      const y =
        (Math.abs(ev.clientY - ele.getBoundingClientRect().y) /
          ele.clientHeight -
          0.5) *
        20;
      // console.log(ev.clientX, ev.clientY);
      let transform = `
      
      rotateX(${x}deg)
      rotateY(${y}deg)
      `;
      // ele.style.boxShadow = "5px 5px 20px white";
      ele.style.transform = transform;
      // console.log(transform);

      // console.log(x);
      // console.log(ev.clientX - ele.getBoundingClientRect().x);
    });
    ele.addEventListener("mouseout", (x) => {
      const transform = `
        rotateX(0deg)
        rotateY(0deg)
      `;
      ele.style.transform = transform;
    });
  }, []);
  return (
    <div
      className={`text-white bg-gray-900 p-10 rounded-lg w-full grid col-span-2 dot`}
      ref={el}
      style={{
        transformOrigin: "preserve-3d",
        transition: "transform 200ms ease-out",
        flex: 1,
        flexWrap: "wrap",
        flexShrink: 1,
      }}
    >
      <div className="font-dot text-7xl animate-[pulse_2s]">
        <div className="py-10"></div>
        <div className="py-10"></div>

        <div className="hidden-lg hidden-md hidden-xs md:text-8xl px-1 sm:text-7xl text-5xl">
          Falconhacks.
        </div>

        <div className="text-3xl sm:text-5xl text-blue-100 px-1 py-5">
          A fun, virtual 24-hour hackathon by{" "}
          <Link blank href="https://fhscs.tech" text="FHS CS Club" />.
        </div>

        <div className="px-1 font-mono text-lg text-blue-100">
          <b>
            Inspiring and fostering creativity amongst the developers of
            tomorrow by{" "}
          </b>
        </div>

        <div className="p-1 font-mono text-lg text-blue-100"> </div>

        <div className="px-1 py-4 font-mono text-lg text-blue-100">
          |{" "}
          <Link
            text="Discord"
            href="https://discord.gg/jwkJy7J9"
            blank={false}
          />{" "}
          |{" "}
          <Link
            href="https://forms.gle/kL6RtitsbidZ7hkMA"
            text="Register"
            blank={true}
          />{" "}
          |{" "}
          <Link
            href="https://falconhacks-2022.devpost.com/"
            text="Devpost"
            blank={true}
          />{" "}
          |
        </div>

        <div className="py-10"></div>
        <div className="py-10"></div>
        <div className="py-10"></div>
        <div className="py-3"></div>

        <div style={{ height: "10px", width: "5px" }}></div>
        <div className="flex w-1/2 mt-auto" style={{ gap: "10px" }}></div>
      </div>
    </div>
  );
}
