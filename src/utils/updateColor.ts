export const updateStrokeColor = (percentage: number) => {
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