import { ITimeLineItem } from "@/app/types/interfaces/timeline";
import TimeLineItem from "./TimeLineItem";

type Props = {
  items: ITimeLineItem[];
};

const TimeLine = ({ items }: Props) => {
  return (
    <ol className="relative border-l border-secondary">
      {items.map((item) => (
        <TimeLineItem key={item.id} item={item} />
      ))}
    </ol>
  );
};

export default TimeLine;
