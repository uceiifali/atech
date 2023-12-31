import { StaticImageData } from "next/image";
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
    product?: StaticImageData | string | null; // Allow product to be null or a StaticImageData or a string
    setProduct?: (product: StaticImageData | string | null) => void; // Update setProduct accordingly
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
    title?: string;
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
export interface BlogLeftBarSectionTwoProps {
    image:StaticImageData
    title?:string
    date?:string
}
export interface BlogBodyItemProps {
  img: StaticImageData,
  title: string,
  person: string,
  time:string,
  desc:string,
  cat:string
  id?:number
}
export interface aboutActivityItemProps {
  logo: StaticImageData,
  title: string,
  desc: string,
  id:number
}
export interface AboutVissionProps {
  img: StaticImageData,
  title: string,
  desc: string,
}
export interface shopCategoryProps {
  name?: string;
  categories: {
    name?: string;
    products?: string;
    id: number;
    brand?: string;
    color?: string;
    price?: string;
    size?: string;
  }[];
}
export interface BlogBodyByIdProps {
  id?:string;

}