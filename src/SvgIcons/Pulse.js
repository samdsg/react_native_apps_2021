import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path, G, Rect } from "react-native-svg";

export default ({ active }) => {
    return (
        <Svg
            width={moderateScale(24)}
            height={moderateScale(24)}
            viewBox="0 0 24 24"
        >
            <Path fill="none" d="M0 0h24v24H0z" />
            <Path
                d="M21 12h-3.6l-2.7 8L9.3 4l-2.7 8H3"
                fill="none"
                stroke="#c5c5c9"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.8}
            />
        </Svg>

    );
};