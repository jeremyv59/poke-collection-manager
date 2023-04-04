import React from "react";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { AntCard } from "./card_styled";
import CustomBtn from "../button/CustomBtn";

const { Meta } = Card;

type CustomCardProps = {
  expansionTitle: string;
};

const CustomCard: React.FC<CustomCardProps> = ({ expansionTitle }) => (
  <AntCard
    bodyStyle={{ padding: 0 }}
    actions={[
      <CustomBtn
        btnType="text"
        icon={<EyeOutlined />}
        btnTitle="See collection"
      />,
    ]}
  >
    <Meta
      avatar={
        <img
          style={{
            width: "70%",
            borderRadius: "1.5rem",
            margin: "0.3rem 0rem",
          }}
          alt="expansionImage"
          src="https://static.tcgcollector.com/content/images/86/19/cc/8619cc107698efa178405c44b4d4c184235dab87ccfbb7728c382abe8f2a2516.png"
        />
      }
      title={expansionTitle}
    />
  </AntCard>
);

export default CustomCard;
