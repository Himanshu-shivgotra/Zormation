import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/"
  },
  {
    id: 2,
    title: "About US",
    newTab: false,
    path: "/about"
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 3.1,
        title: "Website Developmet",
        newTab: false,
        path: "/website-development",
      },
      {
        id: 3.2,
        title: "CMS Development",
        newTab: false,
        path: "/cms-developmet",
      },
    ]
  },
  // {
  //   id: 4,
  //   title: "Case Study",
  //   newTab: false,
  //   path: "/case-studies"
  // },
  {
    id: 3,
    title: "Blog",
    newTab: false,
    path: "/blog"
  },

  {
    id: 5,
    title: "Contact",
    newTab: false,
    path: "/contact"
  },
];

export default menuData;
