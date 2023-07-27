import { ITimeLineItem } from "@/app/types/interfaces/timeline";
import P from "../P";

type Props = {
  item: ITimeLineItem;
};

const TimeLineItem = ({ item: { time, title, content } }: Props) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -left-1.5 "></div>
      <time className="mb-1 text-sm font-normal leading-none text-secondary">
        {time}
      </time>
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      {content && <P className="mb-4 font-normal text-sm">{content}</P>}
    </li>
  );
};

export default TimeLineItem;
