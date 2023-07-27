import { menuItems } from "../config/menu";
import MenuItem from "./MenuItem";

const ListMenu = () => {
  return (
    <ul className="flex gap-x-4">
      {menuItems.map(({ id, label, url }) => (
        <MenuItem label={label} key={id} url={url} />
      ))}
    </ul>
  );
};

export default ListMenu;
