import React, { useEffect, useState } from "react";
import { Divider } from "./divider";
import { IoLogoGithub, IoMdMail } from "react-icons/io";
import { Link } from "./link";

// import "../styles/Home.module.css";

interface props {
  span: string;
}

const Question = (props: { q: string }) => {
  return <p className="italic text-blue-300">{props.q}</p>;
};

export const Faq = (props: props) => {
  const target = "Questions?";
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
      className={`w-full border-gray-300 border-4 rounded-lg sm:col-span-2 md:col-span-3 font-dot text-white p-2 box col-span-1`}
    >
      <h1 className={`text-3xl ${!done ? "txt" : "other"}`}>{text}</h1>
      <Divider color="bg-slate-400" />
      <div className="font-mono text-lg text-blue-100 ps">
        <Question q="What skill level do you have to be to participate?" />
        <p>
          We encourage anyone interested to participate regardless of skill
          level.
        </p>
        <Question q="I don not have a team. Can I still participate?" />
        <p>
          Yes, either you can submit individually or we can help provide help
          introduce you to other participants at a similar skill level.
        </p>
        <Question q="How will submissions be handled?" />
        <p>
          We will be accepting a github project link from each team with a
          commit history. We expect that all code written for the project be
          written during the competition. Failure to do so will result in
          disqualification. Furthermore, teams will be required to give a short
          presentation. This presentation maybe a video or done live to judges.
          For more details check{" "}
          <Link
            blank
            href="https://falconhacks-2022.devpost.com/rules"
            text="here"
          />
          .{" "}
        </p>
        <Question q="What is the maximum size of teams?" />
        <p>Teams can have a max of 4 people.</p>
        <Question q="Is boilerplate code allowed?" />
        <p>
          Yes boilerplate from tools like create react app etc. is allowed and
          so are packages from places like npm and pip.
        </p>
        <Question q="What time zone are all the times in?" />
        <p>All the times are in Pacific Standard Time.</p>

        <p className="mt-2">
          If you have any further questions please email them to us at{" "}
          <Link
            href="mailto://foothillcompsciclub@gmail.com"
            text="foothillcompsciclub@gmail.com"
            blank={false}
          />
        </p>
      </div>
    </div>
  );
};
