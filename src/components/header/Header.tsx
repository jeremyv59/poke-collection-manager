import {
  CustomHeader,
  IconContainer,
  OptionsContainer,
  UserContainer,
  UserName,
  UserDescContainer,
  Status,
  ProfileIcon,
} from "./header_styled";
import { FiSettings } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
  return (
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
  );
};

export default Header;
