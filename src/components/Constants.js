import { PixelRatio, Dimensions } from "react-native";
import theme from "./theme";
const { width } = Dimensions.get("window");

export const BORDER_RADIUS = 65;

const numberOfIcons = 4;
const horizontalPadding = 40;
export const DURATION = 50;
export const PADDING = 16;
export const SEGMENT = PixelRatio.roundToNearestPixel(width / numberOfIcons);
export const LISTSEGMENT = PixelRatio.roundToNearestPixel(width / 3);
export const ICON_SIZE = SEGMENT - horizontalPadding;

export const Colors = {
  primary: theme.colors.primary,
  border: "#fff",
};
