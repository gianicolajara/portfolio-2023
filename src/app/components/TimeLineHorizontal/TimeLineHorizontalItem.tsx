import { ITimeLineItem } from "@/app/types/interfaces/timeline";
import P from "../P";

type Props = {
  item: ITimeLineItem;
};

const TimeLineHorizontalItem = ({
  item: { time, title, content, url, urlLabel },
}: Props) => {
  return (
    <li className="relative w-full">
      <div className="flex items-center">
        <div className="z-10 hidden items-center justify-center w-4 h-4 rounded-full ring-0 bg-secondary lg:flex shrink-0"></div>
        <div className="hidden lg:flex w-full bg-secondary h-[1px]"></div>
      </div>
      <div className="mt-3 sm:pr-8">
        <h3 className="text-lg font-semibold text-primary ">{title}</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-secondary">
          {time}
        </time>
        <P className="font-normal text-sm">{content}</P>
        {url && urlLabel && (
          <a
            href={url}
            className="text-sm text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {urlLabel}
          </a>
        )}
      </div>
    </li>
  );
};

export default TimeLineHorizontalItem;
