import React, { useEffect } from "react";
import { Dimensions, View, ImageBackground, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import {} from "react-native-redash";

import { Esplash } from "../../../assets/images";
import theme from "../../components/theme";
import { moderateScale } from "react-native-size-matters";

const { width } = Dimensions.get("window");

const Onboarding = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Transactions");
    }, 3000);
  }, []);

  return (
    <ImageBackground
      source={Esplash}
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          paddingLeft: theme.spacing.l,
          paddingBottom: theme.spacing.l,
          width: width * 0.8,
          marginBottom: 52,
        }}
      >
        <Animated.Text
          style={{
            fontSize: moderateScale(30),
            color: theme.colors.white,
            fontFamily: "RBlack",
            marginBottom: theme.spacing.l,
          }}
        >
          Expense Tracker
        </Animated.Text>

        <Animated.Text
          style={{
            fontSize: moderateScale(14),
            color: "white",
            lineHeight: 25,
            fontFamily: "RRegular",
          }}
        >
          Stay on track with your expenses so you’ll never run out of money
          again! Start budgeting and saving so you can afford nice things.
        </Animated.Text>
      </View>
    </ImageBackground>
  );
};

export default Onboarding;
