type Props = {
  label: string;
  onClick?: () => void;
  url?: string;
};

const ItemMenu = ({ label, onClick, url }: Props) => {
  return (
    <li>
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        onClick={onClick}
        className="text-font p-2 hover:bg-gray-light rounded-lg w-full h-full block transition-all cursor-pointer"
      >
        {label}
      </a>
    </li>
  );
};

export default ItemMenu;
