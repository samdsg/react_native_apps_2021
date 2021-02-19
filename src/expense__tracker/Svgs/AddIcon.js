import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Defs, G, Rect, Circle } from "react-native-svg";

export default ({}) => {
  return (
    <Svg
      width={moderateScale(94)}
      height={moderateScale(94)}
      viewBox="0 0 94 94"
    >
      <Defs></Defs>
      <G data-name="Add transaction">
        <G filter="url(#prefix__a)">
          <Circle
            data-name="Ellipse 2"
            cx={32}
            cy={32}
            r={32}
            transform="translate(15 12)"
            fill="#d90368"
          />
        </G>
        <G data-name="Group 5" fill="#fff" transform="translate(-276 -668)">
          <Rect
            data-name="Rectangle 5"
            width={3}
            height={17}
            rx={1.5}
            transform="translate(322 704)"
          />
          <Rect
            data-name="Rectangle 6"
            width={3}
            height={17}
            rx={1.5}
            transform="rotate(90 -189.5 521.5)"
          />
        </G>
      </G>
    </Svg>
  );
};
