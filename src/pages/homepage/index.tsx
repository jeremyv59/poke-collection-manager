import React from "react";
import {
  CustomHeader,
  HomepageLayout,
  IconContainer,
  MainContainer,
  OptionsContainer,
  RightContainer,
  UserContainer,
  UserName,
  UserDescContainer,
  Status,
  ProfileIcon,
} from "./home_styled";
import { FiSettings } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";

const Homepage = () => {
  return (
    <HomepageLayout>
      <CustomHeader>
        <div>
          <h1>Home</h1>
          <text>Hello Jérémy, welcome back !</text>
        </div>
        <OptionsContainer>
          <IconContainer>
            <FiSettings className="icon" size={"1.25rem"} />
          </IconContainer>
          <IconContainer>
            <IoNotificationsOutline className="icon" size={"1.25rem"} />
          </IconContainer>
          <UserContainer>
            <UserDescContainer>
              <UserName>Jérémy Vaneste</UserName>
              <Status>User</Status>
            </UserDescContainer>
            <ProfileIcon />
          </UserContainer>
        </OptionsContainer>
      </CustomHeader>
      <MainContainer>Main Container</MainContainer>
      <RightContainer>Right Container</RightContainer>
    </HomepageLayout>
  );
};

export default Homepage;
