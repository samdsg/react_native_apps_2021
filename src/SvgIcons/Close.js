import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect } from "react-native-svg";

export default ({}) => {
  return (
    <Svg
      width={moderateScale(100)}
      height={moderateScale(20)}
      viewBox="0 0 35 3"
    >
      <Rect width={35} height={3} rx={1.5} fill="#d8d8d8" opacity={0.2} />
    </Svg>
  );
};
