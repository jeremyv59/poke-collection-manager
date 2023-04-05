import React from "react";
import { AntBtn } from "./button_styled";
import { ButtonType } from "antd/es/button";

type ButtonProps = {
  btnTitle: string;
  icon?: JSX.Element;
  btnType: ButtonType;
};

const CustomBtn: React.FC<ButtonProps> = ({ btnTitle, icon, btnType }) => {
  return (
    <AntBtn type={btnType} className="custom_button" icon={icon}>
      {btnTitle}
    </AntBtn>
  );
};

export default CustomBtn;
