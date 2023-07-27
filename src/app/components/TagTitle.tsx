import P from "./P";
import Tag from "./Tag";

type Props = {
  title: string;
  content: string;
};

const TagTitle = ({ title, content }: Props) => {
  return (
    <Tag>
      <P>
        <strong className="text-primary">{title}:</strong> {content}
      </P>
    </Tag>
  );
};

export default TagTitle;
