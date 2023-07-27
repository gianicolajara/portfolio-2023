export interface IMenuItem {
  id: number;
  label: string;
  url?: string;
}

export interface IMenuItemEclipse {
  id: number;
  label: string;
  onClick: () => void;
  url?: string;
}
