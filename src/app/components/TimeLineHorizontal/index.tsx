import { ITimeLineItem } from "@/app/types/interfaces/timeline";
import TimeLineHorizontalItem from "./TimeLineHorizontalItem";

type Props = {
  listItems: ITimeLineItem[];
};

const TimeLineHorizontal = ({ listItems }: Props) => {
  return (
    <ol className="flex flex-col lg:flex-row w-full h-full">
      {listItems.map((item) => (
        <TimeLineHorizontalItem item={item} key={item.id} />
      ))}
    </ol>
  );
};

export default TimeLineHorizontal;
