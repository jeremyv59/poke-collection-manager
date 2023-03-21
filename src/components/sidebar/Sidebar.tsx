import React from "react";
import { Layout } from "antd";
import {
  SidebarHeader,
  HeaderIcon,
  HeaderTxt,
  SidebarMenu,
} from "./sidebar_styled";
import { items } from "../../constants/menuItems";

const Sidebar: React.FC = () => {
  return (
    <Layout.Sider
      collapsible
      breakpoint={"xl"}
      collapsedWidth={80}
      trigger={null}
    >
      <SidebarHeader>
        <HeaderIcon />
        <HeaderTxt>Poke Manager</HeaderTxt>
      </SidebarHeader>
      <SidebarMenu items={items} defaultSelectedKeys={["1"]} mode="inline" />
    </Layout.Sider>
  );
};
export default Sidebar;
