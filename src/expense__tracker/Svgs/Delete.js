import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path } from "react-native-svg";

export default ({}) => {
  return (
    <Svg
      width={moderateScale(20)}
      height={moderateScale(20)}
      viewBox="0 0 443.52 443.52"
    >
      <Path d="M256 80h-32V32h-64v48h-32V0h128zm0 0" fill="#62808c" />
      <Path
        d="M304 512H80c-26.508 0-48-21.492-48-48V128h320v336c0 26.508-21.492 48-48 48zm0 0"
        fill="#e76e54"
      />
      <Path
        d="M384 160H0V96c0-17.672 14.328-32 32-32h320c17.672 0 32 14.328 32 32zm0 0"
        fill="#77959e"
      />
      <Path
        d="M260 260c-6.246-6.246-16.375-6.246-22.625 0L196 301.375 154.625 260c-6.25-6.246-16.379-6.246-22.625 0s-6.246 16.375 0 22.625L173.375 324 132 365.375c-6.246 6.25-6.246 16.379 0 22.625s16.375 6.246 22.625 0L196 346.625 237.375 388c6.25 6.246 16.379 6.246 22.625 0s6.246-16.375 0-22.625L218.625 324 260 282.625c6.246-6.25 6.246-16.379 0-22.625zm0 0"
        fill="#fff"
      />
    </Svg>
  );
};
