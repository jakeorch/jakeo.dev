import CommonHead from "../../components/CommonHead";
import Header from "../../components/Header";
import Button from "../../components/Button";
import SecButton from "../../components/SecButton";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>JakeO.dev: About Linked</title>
        <meta property="og:title" content="JakeO.dev: About Linked" />
        <meta
          property="og:description"
          content="A more detailed description about Linked"
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://bunnies.jakeo.dev/images/solid-gradient-blue-gray-bunny.png"
        />
      </CommonHead>

      {/* header */}
      <Header currentPage="projects" />

      <div className="sub1title flex items-center pb-0">
        <img
          src="https://linked.jakeo.dev/icon-transparent.png"
          className="inline w-8 mr-2"
          alt="Linked logo"
        />
        <h2 className="inline">Linked</h2>
      </div>

      <p className="sub3title pb-0 mt-0">
        A fun and simple word puzzle game to test your brain.
      </p>

      <div className="postDatesDiv">
        <h2>
          <FontAwesomeIcon icon={faCalendarDay} className="mr-1.5" />
          Released June 2024
        </h2>
        <h2>
          <FontAwesomeIcon icon={faRotateRight} className="mr-1.5" />
          Updated July 2024
        </h2>
      </div>

      <div className="postImgDiv mt-6">
        <Image
          src={require("../../../public/images/linked-ss-1.png")}
          alt="Screenshot of Linked"
          className="postImg"
          placeholder="blur"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-3 my-6">
        <Button
          className="flex-1 border-blue-600 hover:border-blue-700 active:border-blue-800 bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
          href="https://linked.jakeo.dev"
        >
          Visit website
        </Button>
        <Button
          className="flex-1 border-blue-600 hover:border-blue-700 active:border-blue-800 bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
          href="https://linked.jakeo.dev/mobile"
        >
          Download app
        </Button>
        <SecButton
          className="flex-[0.5]"
          href="https://github.com/jakeo-dev/linked-web"
        >
          View GitHub
        </SecButton>
      </div>

      <p className="text">
        Linked is a word puzzle game where you link five words by their first
        and last letters. The game can be played either on the website or the
        Android app. It was first released in June 2024, with the website being
        built using React and the app using React Native.
      </p>
      <p className="text">
        Building the app was the first time I used React Native. I drew heavy
        inspiration from the different simple but satisfying New York Times word
        games, but I still tried to make a unique puzzle. Prior to Linked's
        release, the game's core mechanics underwent several massive changes in
        order to make the game generally easy to understand, fun, original, not
        too easy, and not too difficult.
      </p>
    </>
  );
}