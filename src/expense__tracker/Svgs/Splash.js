import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";

export default ({ width, height }) => {
  return (
    <Svg
      width={moderateScale(width ? width : 100)}
      height={moderateScale(height ? height : 100)}
      viewBox="0 0 375 812"
    >
      <Defs>
        <ClipPath id="prefix__a">
          <Path d="M0 0h375v812H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Splash screen" clipPath="url(#prefix__a)">
        <Path fill="#820263" d="M0 0h375v812H0z" />
        <Path
          data-name="Path 1777"
          d="M227.489-81.585l-290.03 182.591s-48.7 326.268 80.402 288.338 122.952-95.268 236.897-63.47 191-122.814 191-122.814z"
          fill="#fdc133"
        />
        <Path
          data-name="Path 1776"
          d="M59.533-131.36l375.869 13.168-10.948 312.487S333.784 332.919 49.15 164.96 59.533-131.36 59.533-131.36z"
          fill="#04a777"
        />
        <Path
          data-name="Path 1775"
          d="M419.794-24.644S284.424-45.917 136.469 75.98s-403.235-215.484-37.602-340.264 294.637-15.336 294.637-15.336z"
          fill="#d90368"
        />
        <Path
          data-name="Path 1805"
          d="M362.115 856.958l59.676-127.976s-27.612-41.454-65.093-14.546-28.431 44.734-69.534 47.397-47.258 61.357-47.258 61.357z"
          fill="#04a777"
        />
      </G>
    </Svg>
  );
};
