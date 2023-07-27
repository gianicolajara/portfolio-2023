import { ITagTitleItem } from "../types/interfaces/tag";
import TagTitle from "./TagTitle";

type Props = {
  item: ITagTitleItem[];
};

const ListOfTags = ({ item }: Props) => {
  if (!item || item.length === 0) return null;

  return (
    <>
      {item.map(({ content, id, title }) => (
        <TagTitle title={title} content={content} key={id} />
      ))}
    </>
  );
};

export default ListOfTags;
