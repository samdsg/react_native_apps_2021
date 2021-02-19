import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path, Circle, G, Rect } from "react-native-svg";

export default ({ active }) => {
    return (
        <Svg
            width={moderateScale(24)}
            height={moderateScale(24)}
            viewBox="0 0 19.8 17.8"
        >
            <G
                transform="translate(.9 .9)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.8}
                data-name="Group 2"
            >
                <Rect
                    width={18}
                    height={12.444}
                    rx={1.8}
                    transform="translate(0 3.556)"
                />
                <Path d="M12.6 16V1.778A1.789 1.789 0 0010.8 0H7.2a1.789 1.789 0 00-1.8 1.778V16" />
            </G>
        </Svg>

    );
};