import React from "react";
import { Layout } from "antd";
import {
  SidebarHeader,
  HeaderIcon,
  HeaderTxt,
  SidebarMenu,
  GuidenceContainer,
  IconInfo,
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
      style={{ background: theme.colors.dark, position: "relative" }}
    >
      <SidebarHeader>
        <HeaderIcon />
        <HeaderTxt>Poke Manager</HeaderTxt>
      </SidebarHeader>
      <SidebarMenu
        items={items.map((item, index) => ({
          key: item.key,
          icon: item.icon,
          label: item.label,
        }))}
        defaultSelectedKeys={["1"]}
        mode="inline"
      />
      <GuidenceContainer>
        <IconInfo />
      </GuidenceContainer>
    </Layout.Sider>
  );
};
export default Sidebar;
