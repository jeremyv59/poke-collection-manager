import React, { useEffect, useState } from "react";
import { AntProgress } from "./progress_styled";
import { checkPercentage } from "../../utils/checkPercentage";

const ProgressBar: React.FC = () => {
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    let percentagResult = checkPercentage(50, 100);
    setPercentage(percentagResult);
  }, []);

  return <AntProgress percent={percentage}></AntProgress>;
};

export default ProgressBar;
