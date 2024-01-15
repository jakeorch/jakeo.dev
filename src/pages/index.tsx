import { useState } from "react";
import CommonHead from "../components/CommonHead";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Project from "../components/Project";
import Post from "@/components/Post";
import Button from "../components/Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faDiscord,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO.dev</title>
        <meta property="og:title" content="JakeO.dev" />
        <meta property="og:description" content="bunny on the internet" />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      {/* discord modal */}
      <Modal className="" open={open} onClose={() => setOpen(false)}>
        <div className="items-center text-center">
          <h1 className="text-indigo-600">@jakeybakers</h1>
        </div>
      </Modal>

      {/* header */}
      <Header />

      {/* about me */}
      <h2 className="sub1title mt-0">Welcome to my website!</h2>

      <p className="text">
        I build websites mainly using JavaScript and Tailwind CSS, and I've
        built this website using React and Next.js.
      </p>
      <p className="text">
        The font that I'm using right now is{" "}
        <a href="https://lexend.com" target="_blank" className="link">
          Lexend
        </a>
        , which is known for improving reading proficiency.
      </p>
      <p className="text">
        Some of my favorite digital tools that I use are the browser{" "}
        <a href="https://arc.net/" target="_blank" className="link">
          Arc
        </a>{" "}
        and the note-keeping website{" "}
        <a href="https://notion.so/" target="_blank" className="link">
          Notion
        </a>
        , both for their unique features and pleasant design.
      </p>

      {/* socials */}
      <div className="flex gap-4 mt-4">
        <a
          href="mailto:hi@jakeo.dev"
          target="_blank"
          className="hover:text-blue-500 transition-all flex text-2xl text-gray-500 hover:scale-110 active:scale-100"
        >
          <FontAwesomeIcon icon={faEnvelope} aria-label="Email" />
        </a>
        <a
          href="https://github.com/jakeo-dev"
          target="_blank"
          className="hover:text-[#333333] transition-all flex text-2xl text-gray-500 hover:scale-110 active:scale-100"
        >
          <FontAwesomeIcon icon={faGithub} aria-label="GitHub" />
        </a>
        <button
          id="dscdSocialLink"
          onClick={() => setOpen(true)}
          className="hover:text-[#5865f2] transition-all flex text-2xl text-gray-500 hover:scale-110 active:scale-100"
        >
          <FontAwesomeIcon icon={faDiscord} aria-label="Discord" />
        </button>
        <a
          href="https://www.youtube.com/@jakeybakers"
          target="_blank"
          className="hover:text-[#ff3838] transition-all flex text-2xl text-gray-500 hover:scale-110 active:scale-100"
        >
          <FontAwesomeIcon icon={faYoutube} aria-label="YouTube" />
        </a>
      </div>

      {/* projects */}
      <h2 className="sub1title">My favorite projects</h2>

      <div className="block md:flex">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Project
            name="Plannter"
            desc="Keep track of and plan for all your high school courses, activities, and tests."
            releaseDate="January 2023"
            updateDate="August 2023"
            showReleaseDate={false}
            showUpdateDate={true}
            img={require("../../public/images/plannter-ss-1.png")}
            showImg={false}
          >
            <Button className="" href={`https://plannter.jakeo.dev`}>
              Visit
            </Button>
            <Button className="" href={`https://github.com/jakeo-dev/plannter`}>
              GitHub
            </Button>
          </Project>

          <Project
            name="Cifra"
            desc="Discover hidden words in your phone number to make it fun and unforgettable."
            releaseDate="February 2023"
            updateDate="July 2023"
            showReleaseDate={false}
            showUpdateDate={true}
            img={require("../../public/images/cifra-ss-2.png")}
            showImg={false}
          >
            <Button className="" href={`https://cifra.jakeo.dev`}>
              Visit
            </Button>
            <Button className="" href={`https://github.com/jakeo-dev/cifra`}>
              GitHub
            </Button>
          </Project>
        </div>

        {/* <Link
          href="/projects"
          className="flex justify-center items-center h-min text-xl border-2 hover:bg-gray-200 active:bg-gray-300 active:border-gray-300 transition-all rounded-full p-3.5 md:ml-4 mt-6 md:my-auto"
        >
          <p className="md:hidden">All projects</p>
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 md:ml-0" />
        </Link> */}
      </div>

      {/* posts */}
      <h2 className="sub1title">My favorite posts</h2>

      <Post
        name="The JakeO.dev Portfolio Wrapped 2023"
        desc="Wraps and recaps and replays aren't just for music streaming services. I can look back on 2023 too, but with a focus on the thing I know best: my websites..."
        releaseDate="December 16 2023"
        updateDate="December 16 2023"
        showReleaseDate={true}
        showUpdateDate={true}
        fadeDesc={true}
        img={require("../../public/images/the-jakeo-dev-portfolio-wrapped-2023/thumbnail.png")}
        showImg={false}
        href="/blog/the-jakeo-dev-portfolio-wrapped-2023"
      />

      <Post
        name="AP World History: A History"
        desc="As more students enroll in Advanced Placement classes, College Board is bound to make changes to the curriculums of their courses either to more accurately..."
        releaseDate="June 13 2023"
        updateDate="December 6 2023"
        showReleaseDate={true}
        showUpdateDate={true}
        fadeDesc={true}
        img={require("../../public/images/ap-world-history-a-history/thumbnail.png")}
        showImg={false}
        href="/blog/ap-world-history-a-history"
      />
    </>
  );
}