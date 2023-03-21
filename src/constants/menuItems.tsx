import { HomeOutlined, WalletOutlined } from "@ant-design/icons";

type MenuItemType = {
  label: string;
  key: React.Key;
  icon?: React.ReactNode;
};

export const items: MenuItemType[] = [
  {
    label: "Home",
    key: "1",
    icon: <HomeOutlined />,
  },
  {
    label: "Collection",
    key: "2",
    icon: <WalletOutlined />,
  },
  //   {
  //     label: "Cards",
  //     key: "3",
  //     icon: <TeamOutlined />,
  //   },
  //   {
  //     label: "Dashboard",
  //     key: "4",
  //     icon: <TeamOutlined />,
  //   },
];
