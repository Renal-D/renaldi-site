import {
  BiCategoryAlt,
  BiLeaf,
  BiPaperPlane,
  BiBox,
  BiSitemap,
} from "react-icons/bi";
const icon_size = 20;
export const navLists = [
  {
    name: "Dashboard",
    link: "/",
    icon: <BiCategoryAlt size={icon_size}/>,
  },
  {
    name: "about",
    link: "/about",
    icon: <BiLeaf size={icon_size}/>,
  },
  {
    name: "roadmap",
    link: "/roadmap",
    icon: <BiSitemap size={icon_size}/>,
  },
  {
    name: "projects",
    link: "/projects",
    icon: <BiBox size={icon_size}/>,
  },
  {
    name: "contact",
    link: "/contact",
    icon: <BiPaperPlane size={icon_size}/>,
  },];