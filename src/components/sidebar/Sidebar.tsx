import React from "react";
import { Layout } from "antd";
import {
  SidebarHeader,
  HeaderIcon,
  HeaderTxt,
  SidebarMenu,
} from "./sidebar_styled";
import { items } from "../../constants/menuItems";
import { theme } from "../../styles/Theme";

const Sidebar: React.FC = () => {
  return (
    <Layout.Sider
      collapsible
      breakpoint={"xl"}
      collapsedWidth={80}
      trigger={null}
      style={{ background: theme.colors.dark }}
    >
      <SidebarHeader>
        <HeaderIcon />
        <HeaderTxt>Poke Manager</HeaderTxt>
      </SidebarHeader>
      <SidebarMenu
        direction="ltr"
        items={items.map((item, index) => ({
          key: item.key,
          icon: item.icon,
          label: item.label,
        }))}
        defaultSelectedKeys={["1"]}
        mode="inline"
      />
    </Layout.Sider>
  );
};
export default Sidebar;
