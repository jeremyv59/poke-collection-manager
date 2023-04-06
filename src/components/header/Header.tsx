import {
  CustomHeader,
  IconContainer,
  OptionsContainer,
  UserContainer,
  UserName,
  UserDescContainer,
  Status,
  ProfileIcon,
  MenuIcon,
  HeaderTitle,
  HeaderTxt,
} from "./header_styled";
import { FiSettings } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
  return (
    <CustomHeader>
      <div>
        <HeaderTitle>Home</HeaderTitle>
        <HeaderTxt>Hello Jérémy, welcome back !</HeaderTxt>
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
      <MenuIcon className="icon" size={"1.5rem"} />
    </CustomHeader>
  );
};

export default Header;
