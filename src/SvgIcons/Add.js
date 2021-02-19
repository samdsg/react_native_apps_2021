import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path, G, Rect } from "react-native-svg";

export default ({}) => {
  return (
    <Svg
      width={moderateScale(100)}
      height={moderateScale(100)}
      viewBox="0 0 115 115"
    >
      <G data-name="Group 2">
        <G data-name="Group 1" transform="translate(30 30)">
          <Rect
            data-name="Rectangle Copy 4"
            width={55}
            height={55}
            rx={10}
            fill="rgba(0,0,0,0.25)"
          />
          <Rect width={55} height={55} rx={10} fill="#4b62c1" />
        </G>
        <Path
          d="M62.214 58.286h-3.928v3.929a.786.786 0 01-1.571 0v-3.929h-3.929a.786.786 0 110-1.571h3.928v-3.929a.786.786 0 111.571 0v3.928h3.929a.786.786 0 110 1.571z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};
