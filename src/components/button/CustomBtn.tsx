import React from "react";
import { AntBtn } from "./button_styled";
import { ButtonType } from "antd/es/button";
import { SizeType } from "antd/es/config-provider/SizeContext";

type ButtonProps = {
  btnTitle: string;
  icon?: JSX.Element;
  btnType: ButtonType;
  buttonSize: SizeType;
};

const CustomBtn: React.FC<ButtonProps> = ({
  btnTitle,
  icon,
  btnType,
  buttonSize,
}) => {
  return (
    <AntBtn size={buttonSize} type={btnType} icon={icon}>
      {btnTitle}
    </AntBtn>
  );
};

export default CustomBtn;
