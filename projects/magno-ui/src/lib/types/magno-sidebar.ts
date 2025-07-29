import { TMagnoPlacement } from '../../public-api';

// export type TMagnoSidebarItemChild = {
//   title: string;
//   link: string;
// };

export type TMagnoSidebarItemData = {
  imagePath?: string;
  imageAlt?: string;
  title?: string;
  link: string;
  tooltipText?: string;
  tooltipPosition?: TMagnoPlacement;
  activeClass?: string;
  iconWidth?: number;
  childrens?: TMagnoSidebarItemData[];
};
