import { AiOutlineHome, AiOutlineBook } from "react-icons/ai";
import { CgCardHearts } from "react-icons/cg";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

type MenuItemType = {
  label: string;
  key: React.Key;
  icon?: React.ReactNode;
};

export const items: MenuItemType[] = [
  {
    label: "Home",
    key: "/",
    icon: <AiOutlineHome size={"1.25rem"} />,
  },
  {
    label: "Collection",
    key: "/collection",
    icon: <AiOutlineBook size={"1.25rem"} />,
  },
  {
    label: "Cards",
    key: "/cards",
    icon: <CgCardHearts size={"1.25rem"} />,
  },
  {
    label: "Marketplace",
    key: "4",
    icon: <HiOutlineBuildingStorefront size={"1.25rem"} />,
  },
];
