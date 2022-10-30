import { EventProps } from "./components/event";
import { Link } from "./components/link";

export const events: EventProps[] = [
  {
    modal: true,
    title: "Guest Lecture by Dr. Weijian Yang",
    desc: "Dr. Weijian Yang is a researcher from UC Davis who heads the Yang Lab. His primary area of research is optogenetics which is an interesting intersection of neurology and ,computer science. During this lecture Dr. Yang will talk about his research and how computer science principles can be applied in practical settings to advance research.",
    image: "neural.jpeg",
    children: (
      <div>
        - Guest Lecture by{" "}
        <Link
          text="Dr. Weijian Yang"
          href="https://neuroengineering.ucdavis.edu/people/weijian-wang"
          blank
        />{" "}
        (11.3.2022)
      </div>
    ),
    id: "weijian",
    details: (
      <div style={{ marginTop: "40px" }} className={"font-mono"}>
        <Link
          text="Dr. Weijian Yang"
          href="https://neuroengineering.ucdavis.edu/people/weijian-wang"
          blank
        />
        {"\n"}
        <p>Date: 11.03.2022</p>
        <p>Location: Online or in Person at Sos flex</p>
        <p>Time: During flex (12:45-1:30) on Thursday</p>
        <>
          For more information on how to join click{" "}
          <Link
            text="here"
            href="https://docs.google.com/document/d/1EgmGPl9qift3T5XmFRpLE0O3isAwrqGrb2Ee3yB01bA/edit?usp=sharing"
            blank
          />{" "}
        </>
      </div>
    ),
  },
  {
    modal: false,
    children: (
      <div>
        - <Link text="Falconhacks" href="/falconhacks" blank={false} />{" "}
        (11.05.22)
      </div>
    ),
    id: "falconhacks",
  },
];