import React, { useEffect, useState, useRef } from "react";
import { AntProgress } from "./progress_styled";
import { checkPercentage } from "../../utils/checkPercentage";

const ProgressBar: React.FC = () => {
  const [percentage, setPercentage] = useState<number>(0);
  const [strokeColor, setStrokeColor] = useState<string | undefined>();

  const updateStrokeColor = () => {
    if (percentage <= 25) {
      return "red";
    } else if (percentage <= 50) {
      return "orange";
    } else if (percentage <= 75) {
      return "yellow";
    } else {
      return "green";
    }
  };

  useEffect(() => {
    let percentagResult = checkPercentage(90, 100);
    setPercentage(percentagResult);
  }, []);

  useEffect(() => {
    let colorRes = updateStrokeColor();
    setStrokeColor(colorRes);
  }, [percentage]);

  return (
    <AntProgress strokeColor={strokeColor} percent={percentage}></AntProgress>
  );
};

export default ProgressBar;
