export type MagnoSidebarItemChild = {
  title: string;
  link: string;
};

export type MagnoSidebarItemData = {
  imagePath: string;
  imageAlt?: string;
  title: string;
  link: string;
  activeClass?: string;
  iconWidth?: number;
  customClass?: string;
  childrens: MagnoSidebarItemChild[];
};
