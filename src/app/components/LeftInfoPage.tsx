import { BiSolidDownArrow } from "react-icons/bi";

type Props = {
  title: string;
};

const LeftInfoPage = ({ title }: Props) => {
  return (
    <div className="absolute rotate-[-90deg] left-[-75px] top-[50%] translate-y-[-50%] flex-col justify-center items-center animate-pulse hidden lg:flex">
      <small className="text-primary tracking-[.2rem]">{title}</small>
      <BiSolidDownArrow size={10} className="text-primary" />
    </div>
  );
};

export default LeftInfoPage;
