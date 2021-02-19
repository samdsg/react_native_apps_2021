import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path, G, Rect } from "react-native-svg";

export default ({ }) => {
    return (
        <Svg
            width={moderateScale(24)}
            height={moderateScale(24)}
            viewBox="0 0 22 22"
        >
            <Path fill="none" d="M0 0h22v22H0z" />
            <Path
                d="M10 17.4a1.551 1.551 0 011.5-1.6 1.6 1.6 0 010 3.2 1.551 1.551 0 01-1.5-1.6zm0-6.4a1.551 1.551 0 011.5-1.6A1.551 1.551 0 0113 11a1.551 1.551 0 01-1.5 1.6A1.551 1.551 0 0110 11zm0-6.4A1.551 1.551 0 0111.5 3 1.551 1.551 0 0113 4.6a1.552 1.552 0 01-1.5 1.6A1.552 1.552 0 0110 4.6z"
                fill="#c5c5c9"
            />
        </Svg>

    );
};