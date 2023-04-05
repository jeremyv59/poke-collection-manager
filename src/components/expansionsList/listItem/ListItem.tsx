import React from "react";
import CustomBtn from "../../button/CustomBtn";
import { Container, DateTxt, ExpansionName, Image } from "./listItem_styled";
import { EyeOutlined } from "@ant-design/icons";

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
      <Image src={imageSrc} />
      <ExpansionName>{expansionName}</ExpansionName>
      <DateTxt>{releaseDate}</DateTxt>
      <CustomBtn
        icon={<EyeOutlined />}
        btnType="text"
        btnTitle="View Expansion"
      />
    </Container>
  );
};

export default ListItem;
