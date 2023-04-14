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

type HeaderProps = {
  title: string;
  subTitle: string;
  userName: string;
  userDesc: string;
};

const Header = ({ title, subTitle, userName, userDesc }: HeaderProps) => {
  return (
    <CustomHeader>
      <div>
        <HeaderTitle>{title}</HeaderTitle>
        <SmallText fontSize={"1.125rem"} fontWeight={500}>
          {subTitle}
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
            <UserName>{userName}</UserName>
            <SmallText fontWeight={400}>{userDesc}</SmallText>
          </UserDescContainer>
          <ProfileIcon />
        </UserContainer>
      </OptionsContainer>
      <MenuIcon className="icon" size={"1.5rem"} />
    </CustomHeader>
  );
};

export default Header;
