import { createText, createBox } from "@shopify/restyle";
import { moderateScale } from "react-native-size-matters";

const theme = {
  colors: {
    white: "#fff",
    primary: "#242C42",
    primary2: "#171E32",
    primary3: "#111526",
    primary4: "#323846",
    text: "#C5C5C9",
    green: "#009E77",
    blue: "#00D2FF",
    red: "#B70000",
    brown: "#291720",
    silver: "#F3F1F2",
    silver1: "#A9A2A6",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    title: {
      fontSize: moderateScale(35),
      fontFamily: "SFBOLD",
      color: "white",
    },
    title1: {
      fontSize: moderateScale(15),
      fontFamily: "SFBOLD",
      color: "white",
    },
    body: {
      fontSize: 16,
      lineHeight: 25,
      fontFamily: "SFREGULAR",
      color: "text",
    },
    button: {
      fontSize: 15,
      fontFamily: "SFSEMI",
      color: "text",
    },
  },
  breakpoints: {},
};

export const Text = createText();
export const Box = createBox();
export default theme;
