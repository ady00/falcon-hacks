import type { NextPage } from "next";
import { Calendar } from "../components/countdown";
import DotMatrix from "../components/homePage";
import Prizes from "../components/prizes";
import { Square } from "../components/rectangle";
import { Schedule } from "../components/schedulehacks";
import { Faq } from "../components/faq";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    document.body.classList.remove("hid");
  }, []);
  return (
    <div className="p-4 gap-4">
      <DotMatrix />

      <div className="py-2"></div>

      <div>
        <Square span="col-span-1" />
        <div className="py-2"></div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Schedule />
        <Prizes />
        <Calendar />
        <Faq span="col-span-3" />
      </div>
    </div>
  );
};

export default Home;
