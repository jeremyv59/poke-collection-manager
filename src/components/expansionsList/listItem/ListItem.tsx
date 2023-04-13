import React from "react";
import CustomBtn from "../../button/CustomBtn";
import { Container, ExpansionName, Image } from "./listItem_styled";
import { EyeOutlined } from "@ant-design/icons";
import { SmallText } from "../../../styles/GlobalStyles";

type ListItemProps = {
  imageSrc: string;
  expansionName: string;
  releaseDate: string;
};

const ListItem: React.FC<ListItemProps> = ({
  imageSrc,
  expansionName,
  releaseDate,
}) => {
  return (
    <Container>
      <Image alt="expansion_logo" src={imageSrc} />
      <ExpansionName>{expansionName}</ExpansionName>
      <SmallText marginBottom={"0.8rem"}>{releaseDate}</SmallText>
      <CustomBtn
        icon={<EyeOutlined />}
        btnType="text"
        btnTitle="View Expansion"
      />
    </Container>
  );
};

export default ListItem;
