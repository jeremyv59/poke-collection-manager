import React, { useEffect, useState } from "react";
import { AntProgress } from "./progress_styled";
import { checkPercentage } from "../../utils/checkPercentage";
import { updateStrokeColor } from "../../utils/updateColor";

const ProgressBar: React.FC = () => {
  const [percentage, setPercentage] = useState<number>(0);
  const [strokeColor, setStrokeColor] = useState<string | undefined>();

  useEffect(() => {
    let percentagResult = checkPercentage(90, 100);
    let colorRes = updateStrokeColor(percentagResult);
    setStrokeColor(colorRes);
    setPercentage(percentagResult);
  }, []);

  return (
    <AntProgress strokeColor={strokeColor} percent={percentage}></AntProgress>
  );
};

export default ProgressBar;
