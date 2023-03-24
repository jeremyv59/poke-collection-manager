import React from "react";
import {
  SidebarHeader,
  HeaderIcon,
  HeaderTxt,
  SidebarMenu,
  GuidenceContainer,
  IconInfo,
  GuidenceTitle,
  GuidenceDesc,
  GuidenceButton,
  IconPlay,
  InfoIconContainer,
  SidebarLayout,
} from "./sidebar_styled";
import { items } from "../../constants/menuItems";

const Sidebar: React.FC = () => {
  return (
    <SidebarLayout
      collapsible
      breakpoint={"xl"}
      collapsedWidth={80}
      trigger={null}
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
        <InfoIconContainer>
          <IconInfo />
        </InfoIconContainer>
        <GuidenceTitle>Need Guidence ?</GuidenceTitle>
        <GuidenceDesc>
          See the video, it can help you to understand the application.
        </GuidenceDesc>
        <GuidenceButton>
          Play Video
          <IconPlay />
        </GuidenceButton>
      </GuidenceContainer>
    </SidebarLayout>
  );
};
export default Sidebar;
