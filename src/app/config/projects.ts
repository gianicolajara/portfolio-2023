import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiCoffeeTogo, BiGame, BiWalk } from "react-icons/bi";
import { GiBigWave } from "react-icons/gi";
import { SiGodaddy } from "react-icons/si";
import { TbDogBowl } from "react-icons/tb";
import { IProjectItem } from "../types/interfaces/project";

export const projectsExperience: IProjectItem[] = [
  {
    id: 1,
    title: "PetCare",
    content:
      "Pagina web para la promoción de una tienda de cuidado de mascotas",
    Icon: TbDogBowl,
    image: "/images/petcare.jpg",
    url: "https://gianicolajara.github.io/pet-care/",
  },
  {
    id: 2,
    title: "Walkout",
    content: "Pagina web para pronostico del tiempo en una ciudad",
    Icon: BiWalk,
    image: "/images/walkout.jpg",
    url: "https://walkout-gianicolajara.vercel.app/",
  },
  {
    id: 3,
    title: "Ecommerce Shopify",
    content: "Pagina web tipo ecommerce de ropa",
    Icon: AiOutlineShoppingCart,
    image: "/images/shopify.jpg",
    url: "https://ecommerce-nextjs-shopify-beige.vercel.app/",
  },
  {
    id: 4,
    title: "Wordpress Coffee",
    content: "Pagina web wordpress para una tienda de cafe",
    Icon: BiCoffeeTogo,
    image: "/images/coffee.jpg",
    url: "https://wordpress-nextjs-example.vercel.app/",
  },
  {
    id: 5,
    title: "Gaming Page",
    content: "Pagina web gaming hecha en nextjs",
    Icon: BiGame,
    image: "/images/gaming-page.png",
    url: "https://gaming-platform-web-design.vercel.app/",
  },
  {
    id: 6,
    title: "Roslynka",
    content: "Pagina web de venta de arte de resina",
    Icon: GiBigWave,
    image: "/images/roslynka.png",
    url: "https://roslynka-web-example.vercel.app/",
  },
  {
    id: 7,
    title: "GoDaddy clone",
    content: "Clon de godaddy",
    Icon: SiGodaddy,
    image: "/images/godaddyclone.png",
    url: "https://gianicolajara.github.io/godaddy-clone/",
  },
];
