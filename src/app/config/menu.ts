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
    url: "/Projects",
  },
];

export const menuEclipseItem: IMenuItemEclipse[] = [
  {
    id: 1,
    label: "Legacy Page",
    onClick: () => {},
    url: "https://gianicola-web.vercel.app/",
  },
];
