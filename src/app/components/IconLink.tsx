import { IconType } from "react-icons";

type Props = {
  url: string;
  Icon: IconType;
  size?: number;
};

const IconLink = ({ Icon, url, size = 25 }: Props) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon
        size={size}
        className="text-icon hover:text-primary transition-all cursor-pointer"
      />
    </a>
  );
};

export default IconLink;
