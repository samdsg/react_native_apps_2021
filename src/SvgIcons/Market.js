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
            <G
                fill="none"
                stroke="#c5c5c9"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={2}
            >
                <Path d="M18 20V10" />
                <Path data-name="Path" d="M12 20V4M6 20v-6" />
            </G>
        </Svg>

    );
};