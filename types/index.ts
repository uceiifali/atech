import { IconType } from "react-icons";
import { IconBaseProps } from 'react-icons/lib'

export interface menuItemProps {
    logo: React.ReactNode; 
    title:string
    desc:string
    badge?:number
    link?:string
    // onClick?:() => void
    onClick?: (isOpen: boolean) => void;

  }
  export interface wishListProps {
    isSidebarOpen: boolean;
    setSidebarOpen: (isOpen: boolean) => void;
  }
  export interface shoppingCartProps {
    isShoppingCartOpen: boolean;
    setShoppingCartOpen: (isOpen: boolean) => void;
}
  export interface menuProps {
    isSidebarOpen: boolean;
    setSidebarOpen: (isOpen: boolean) => void;
}
  export interface optionProps {
    value: string;
    label: string
}
  export interface sectionHeaderProps {
    mark: string;
    title: string;
    titleBold?:string
}

export interface BannerItemProps {
  logo: string; // Assuming logo is a string path
  sale: string;
  cat: string;
  product: string; // Assuming product is a string path
  bgColor: string;
}
export interface TopSellingItemProps {
  name: string; // Assuming logo is a string path
  image: string;
  outOfStock:boolean;
  discount?: string;
  newPrice: number; // Assuming product is a string path
  stars?:number
  oldPrice:number; 
  
}
export interface TopSellingItemProps2 {
  item: {name: string; // Assuming logo is a string path
  image: string;
  outOfStock:boolean;
  discount?: string;
  newPrice: string; // Assuming product is a string path
  stars?:number
  oldPrice:string; }
}
export interface RangeProps {
  percentage:number
  sold :number; 
  ava :number
}
export interface DateProps {
  days:number
  hours :number; 
  minutes :number
  seconds :number
}
export interface ProductsProps {
  full: boolean| undefined
}
export interface TrackProps {
  path?:string
}
export interface linksProps {
  name?:string
  link?:string
}