import {
  CustomHeader,
  IconContainer,
  OptionsContainer,
  UserContainer,
  UserName,
  UserDescContainer,
  ProfileIcon,
  MenuIcon,
  HeaderTitle,
} from "./header_styled";
import { FiSettings } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { SmallText } from "../../styles/GlobalStyles";

const Header = () => {
  return (
    <CustomHeader>
      <div>
        <HeaderTitle>Home</HeaderTitle>
        <SmallText fontSize={"1.125rem"} fontWeight={500}>
          Hello Jérémy, welcome back !
        </SmallText>
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
            <SmallText fontWeight={400}>User</SmallText>
          </UserDescContainer>
          <ProfileIcon />
        </UserContainer>
      </OptionsContainer>
      <MenuIcon className="icon" size={"1.5rem"} />
    </CustomHeader>
  );
};

export default Header;
