import React from "react";
import { Layout, Menu } from "antd";
import { SidebarHeader, HeaderIcon, HeaderTxt } from "./sidebar_styled";

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
      <Menu defaultSelectedKeys={["1"]} mode="inline" />
    </Layout.Sider>
  );
};
export default Sidebar;
