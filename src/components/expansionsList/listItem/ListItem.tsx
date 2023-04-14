import React from "react";
import CustomBtn from "../../button/CustomBtn";
import { Container, ExpansionName, Image } from "./listItem_styled";
import { EyeOutlined } from "@ant-design/icons";
import { SmallText } from "../../../styles/GlobalStyles";

type ListItemProps = {
  id: number;
  imageSrc: string;
  expansionName: string;
  releaseDate: string;
};

const ListItem: React.FC<ListItemProps> = ({
  id,
  imageSrc,
  expansionName,
  releaseDate,
}) => {
  return (
    <Container>
      <Image aria-label={expansionName} alt="expansion_logo" src={imageSrc} />
      <ExpansionName>{expansionName}</ExpansionName>
      <SmallText data-testid={id} marginBottom={"0.8rem"}>
        {releaseDate}
      </SmallText>
      <CustomBtn
        data-testid={id}
        buttonSize="small"
        icon={<EyeOutlined />}
        btnType="text"
        btnTitle="View Expansion"
      />
    </Container>
  );
};

export default ListItem;
