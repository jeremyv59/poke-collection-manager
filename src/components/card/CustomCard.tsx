import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

const CustomCard: React.FC = () => (
  <Card
    style={{ width: "100%", marginTop: 16 }}
    actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />]}
  >
    <Meta
      avatar={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      title="Card title"
      description="This is the description"
    />
  </Card>
);

export default CustomCard;
