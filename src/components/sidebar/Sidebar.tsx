import React from "react";
import { Layout, Menu } from "antd";
import { SidebarHeader, SidebarLogo } from "./sidebar_styled";
import logo from "../../assets/Pokemon.jpg";

const Sidebar: React.FC = () => {
  return (
    <Layout.Sider
      collapsible
      breakpoint={"lg"}
      collapsedWidth={80}
      trigger={null}
    >
      <SidebarHeader>
        <SidebarLogo src={logo} />
      </SidebarHeader>
      <Menu defaultSelectedKeys={["1"]} mode="inline" />
    </Layout.Sider>
  );
};
export default Sidebar;
