import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path, G, Rect } from "react-native-svg";

export default ({}) => {
  return (
    <Svg
      width={moderateScale(23)}
      height={moderateScale(23)}
      viewBox="0 0 24.5 24.478"
    >
      <G
        data-name="Chart view"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <Path
          data-name="Path 1773"
          d="M14.155 10.55h9.595a10.5 10.5 0 00-9.595-9.8z"
        />
        <Path
          data-name="Path 1774"
          d="M10.664 14.013v-1.107h0V3.368a10.181 10.181 0 1010.422 10.645z"
        />
      </G>
    </Svg>
  );
};
