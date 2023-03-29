import React, { memo } from "react";
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
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const onClickItem = (key: string) => {
    navigate(key);
  };

  return (
    <SidebarLayout
      width={"15%"}
      collapsible
      breakpoint={"lg"}
      collapsedWidth={80}
      trigger={null}
    >
      <SidebarHeader>
        <HeaderIcon />
        <HeaderTxt>Poke Manager</HeaderTxt>
      </SidebarHeader>
      <SidebarMenu
        onClick={({ key }) => onClickItem(key)}
        items={items.map((item, index) => ({
          key: item.key,
          icon: item.icon,
          label: item.label,
        }))}
        defaultSelectedKeys={[window.location.pathname]}
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
export default memo(Sidebar);
