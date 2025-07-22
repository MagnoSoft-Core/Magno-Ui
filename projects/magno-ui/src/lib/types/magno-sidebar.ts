export type TMagnoSidebarItemChild = {
  title: string;
  link: string;
};

export type TMagnoSidebarItemData = {
  imagePath: string;
  imageAlt?: string;
  title: string;
  link: string;
  activeClass?: string;
  iconWidth?: number;
  customClass?: string;
  childrens: TMagnoSidebarItemChild[];
};
