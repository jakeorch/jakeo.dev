import Image from "next/image";
import { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

type ProjectProps = {
  children: React.ReactNode;
  name: string;
  desc: string;
  releaseDate: string;
  updateDate: string;
  showReleaseDate: boolean;
  showUpdateDate: boolean;
  img: StaticImageData;
  showImg: boolean;
};

export default function Project(props: ProjectProps) {
  return (
    <div
      className={`flex flex-col rounded-xl border-2 border-gray-200 hover:bg-gray-200 transition-all`}
    >
      <Image
        src={props.img}
        alt={`Screenshot of ${props.name}`}
        className={`${
          props.showImg ? "" : "hidden"
        } w-full object-cover h-44 md:h-52 border-b-2 border-gray-200 rounded-t-xl`}
      />

      <div className="flex-grow w-full p-6">
        <h1 className="text-xl text-left font-medium">{props.name}</h1>
        <h2 className="text mt-2 mb-0">{props.desc}</h2>
        <div className="flex gap-3 mt-2.5">
          <h2
            className={`${
              props.showReleaseDate ? "inline" : "hidden"
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
              props.showUpdateDate ? "inline" : "hidden"
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
      <div className="flex gap-3 px-6 pb-6">{props.children}</div>
    </div>
  );
}