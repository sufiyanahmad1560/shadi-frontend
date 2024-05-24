import { SH_DOCTOR } from "../../../utils/constant";

interface MenuDataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus: {
    link: string;
    title: string;
  }[];
}

const MenuDataTwo: MenuDataType[] = [
  // {
  //   id: 1,
  //   title: "Home",
  //   link: "#",
  //   has_dropdown: false,
  //   sub_menus: [
  //     { link: "/", title: "Home style 1", },
  //     { link: "/home-2", title: "Home style 2", },
  //     { link: "/home-3", title: "Home style 3", },
  //     { link: "/home-4", title: "Home style 4", },
  //     { link: "/home-5", title: "Home style 5", },
  //   ],
  // },
  // {
  //   id: 2,
  //   title: "Department +",
  //   link: "#",
  //   has_dropdown: true,
  //   sub_menus: [
  //     { link: "/service", title: "Service 01", },
  //     { link: "/service-2", title: "Service 02", },
  //     { link: "/service-details", title: "Service Details", },
  //   ],
  // },
  {
    id: 3,
    title: "Doctors +",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/doctor-details-1", title: SH_DOCTOR.DR_ARVIND },
      { link: "/doctor-details-2", title: SH_DOCTOR.DR_NAMRATA }
    ],
  },
  // {
  //   id: 4,
  //   title: "Shop +",
  //   link: "#",
  //   has_dropdown: true,
  //   sub_menus: [
  //     { link: "/shop", title: "Shop Page", },
  //     { link: "/product-details", title: "Shop Details", },
  //     { link: "/cart", title: "Shopping Cart", },
  //     { link: "/checkout", title: "Checkout", },
  //     { link: "/wishlist", title: "Wishlist", },
  //     { link: "/login", title: "Login", },
  //     { link: "/register", title: "Register", },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "News +",
  //   link: "#",
  //   has_dropdown: true,
  //   sub_menus: [
  //     { link: "/blog", title: "Blog Right Sidebar", },
  //     { link: "/blog-left-sidebar", title: "Blog Left Sidebar", },
  //     { link: "/blog-no-sidebar", title: "Blog No Sidebar", },
  //     { link: "/blog-2-col", title: "Blog 2 Column", },
  //     { link: "/blog-2-col-mas", title: "Blog 2 Col Masonry", },
  //     { link: "/blog-3-col", title: "Blog 3 Column", },
  //     { link: "/blog-3-col-mas", title: "Blog 3 Col Masonry", },
  //     { link: "/blog-details", title: "Blog Details", },
  //     { link: "/blog-details-left-sidebar", title: "Details Left Sidebar", },
  //     { link: "/blog-details-audio", title: "Details Audio", },
  //     { link: "/blog-details-video", title: "Details Video", },
  //     { link: "/blog-details-gallery", title: "Details Gallery", },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "Pages +",
  //   link: "#",
  //   has_dropdown: true,
  //   sub_menus: [
  //     { link: "/about", title: "About", },
  //     { link: "/appointment", title: "Appointment", },
  //     { link: "/portfolio-2", title: "Portfolio 2 column", },
  //     { link: "/portfolio", title: "Portfolio 3 column", },
  //     { link: "/portfolio-slider", title: "Portfolio Slider", },
  //     { link: "/contact", title: "Contact", },
  //   ],
  // },
];
export default MenuDataTwo;
