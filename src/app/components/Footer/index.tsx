import BoxInfo from "../BoxInfo";
import P from "../P";

const Footer = () => {
  return (
    <footer className="mt-4 w-full">
      <BoxInfo className="p-4 flex justify-center items-center">
        <P>
          Creador por{" "}
          <a
            href="https://gianicola-web.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            Gianicola Jara
          </a>
        </P>
      </BoxInfo>
    </footer>
  );
};

export default Footer;
