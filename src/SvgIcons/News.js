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
            <Path data-name="Rectangle Copy" fill="none" d="M0 0h24v24H0z" />
            <G
                fill="none"
                stroke="#c5c5c9"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.8}
            >
                <Path d="M13.75 3h-7A1.776 1.776 0 005 4.8v14.4A1.776 1.776 0 006.75 21h10.5A1.776 1.776 0 0019 19.2V8.4z" />
                <Path
                    data-name="Path"
                    d="M13.75 3v5.4H19M15.5 12.9h-7M15.5 16.5h-7M10.25 9.3H8.5"
                />
            </G>
        </Svg>

    );
};