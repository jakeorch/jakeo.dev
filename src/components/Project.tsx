import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Project(props: {
  name: string;
  desc: string;
  releaseDate: string;
  updateDate: string;
  logo: string;
  showLogo: boolean;
  type: number;
  colors: string;
  link: string;
}) {
  if (props.type == 0) {
    // active project
    return (
      <Link
        href={`/projects/${props.name.split(".")[0].toLowerCase()}`}
        className={`${
          props.colors == "" ? " hover:border-sky-600" : props.colors
        } bg-gray-100 border-4 border-gray-200 relative flex flex-col rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:shadow-none active:translate-y-0.5 transition duration-200`}
      >
        {/* <img
        src={props.logo}
        className={`${
          props.showLogo ? "" : "hidden"
        } absolute object-cover h-5/6 opacity-15 transform top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
        alt={`${props.name} logo`}
      /> */}

        <div className="flex-grow w-full p-6">
          <h1 className="text-xl text-left font-medium flex items-center">
            <img
              src={props.logo}
              className={`${props.showLogo ? "" : "hidden"} inline w-6 mr-1.5`}
              alt={`${props.name} logo`}
            />
            {props.name}
          </h1>
          <h2 className="text mt-2 mb-0">{props.desc}</h2>
          <div className="flex gap-3 mt-2.5">
            <h2
              className={`${
                props.releaseDate != "" ? "inline" : "hidden"
              } text-sm text-gray-700`}
            >
              <FontAwesomeIcon
                icon={faCalendarDay}
                className="mr-1.5"
                aria-label="Initial release"
              />
              {props.releaseDate}
            </h2>
            <h2
              className={`${
                props.updateDate != "" ? "inline" : "hidden"
              } text-sm text-gray-700`}
            >
              <FontAwesomeIcon
                icon={faRotateRight}
                className="mr-1.5"
                aria-label="Last updated"
              />
              {props.updateDate}
            </h2>
          </div>
        </div>
      </Link>
    );
  } else if (props.type == 1) {
    // past project
    return (
      <a
        href={props.link}
        target="_blank"
        className="bg-gray-100 border-4 border-gray-200 hover:border-gray-400 relative flex flex-col rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:shadow-none active:translate-y-0.5 transition duration-200"
      >
        <div className="flex-grow w-full p-6">
          <h1 className="text-xl text-left font-medium flex items-center">
            <img
              src={props.logo}
              className={`${props.showLogo ? "" : "hidden"} inline w-6 mr-1.5`}
              alt={`${props.name} logo`}
            />
            {props.name}
          </h1>
          <h2 className="text mt-2 mb-0">{props.desc}</h2>
          <div className="flex gap-3 mt-2.5">
            <h2
              className={`${
                props.releaseDate != "" ? "inline" : "hidden"
              } text-sm text-gray-600`}
            >
              <FontAwesomeIcon
                icon={faCalendarDay}
                className="mr-1.5"
                aria-label="Initial release"
              />
              {props.releaseDate}
            </h2>
            <h2
              className={`${
                props.updateDate != "" ? "inline" : "hidden"
              } text-sm text-gray-600`}
            >
              <FontAwesomeIcon
                icon={faRotateRight}
                className="mr-1.5"
                aria-label="Last updated"
              />
              {props.updateDate}
            </h2>
          </div>
        </div>
      </a>
    );
  }
}
