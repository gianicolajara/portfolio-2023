import Link from "next/link";

type Props = {
  url?: string;
  label: string;
  onClick?: () => void;
  asLink?: boolean;
};

const MenuItem = ({ label, url, onClick, asLink = true }: Props) => {
  return (
    <li onClick={onClick}>
      {asLink ? (
        <Link
          href={url ? url : ""}
          className="transition-all text-white hover:text-primary relative after:content-[' '] after:absolute after:w-[100%] after:scale-x-0 after:h-[2px] after:bg-primary after:left-0 after:bottom-0 after:origin-bottom-right after:transition-[transform] after:ease-out after:duration-[250ms] hover:after:origin-bottom-left hover:after:scale-x-100 text-base"
        >
          {label}
        </Link>
      ) : (
        <span className="transition-all text-white hover:text-primary relative after:content-[' '] after:absolute after:w-[100%] after:scale-x-0 after:h-[2px] after:bg-primary after:left-0 after:bottom-0 after:origin-bottom-right after:transition-[transform] after:ease-out after:duration-[250ms] hover:after:origin-bottom-left hover:after:scale-x-100 text-base cursor-pointer select-none">
          {label}
        </span>
      )}
    </li>
  );
};

export default MenuItem;
