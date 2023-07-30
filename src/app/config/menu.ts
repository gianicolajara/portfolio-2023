import { IMenuItem, IMenuItemEclipse } from "../types/interfaces/menu";

export const menuItems: IMenuItem[] = [
  {
    id: 1,
    label: "Información",
    url: "/information",
  },
  {
    id: 2,
    label: "Experiencia",
    url: "/experience",
  },
  {
    id: 3,
    label: "Proyectos",
    url: "/projects",
  },
];

export const menuEclipseItem: IMenuItemEclipse[] = [
  {
    id: 1,
    label: "Pagina Antigua",
    onClick: () => {},
    url: "https://gianicola-web.vercel.app/",
  },
];
