import { AiOutlineHome, AiOutlineBook } from "react-icons/ai";
import { CgCardHearts } from "react-icons/cg";
import { BiExpand } from "react-icons/bi";

type MenuItemType = {
  label: string;
  key: React.Key;
  icon?: React.ReactNode;
};

export const items: MenuItemType[] = [
  {
    label: "Home",
    key: "/",
    icon: <AiOutlineHome />,
  },

  {
    label: "Expansions",
    key: "/expansions",
    icon: <BiExpand />,
  },
  {
    label: "Collection",
    key: "/collection",
    icon: <AiOutlineBook />,
  },
  {
    label: "Cards",
    key: "/cards",
    icon: <CgCardHearts />,
  },
];
