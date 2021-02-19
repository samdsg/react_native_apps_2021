import React from "react";
import Animated, { eq, interpolate } from "react-native-reanimated";
import { ICON_SIZE, SEGMENT } from "../../components/Constants";
import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import { withTransition } from "react-native-redash";
const { View } = Animated;

const Tab = ({ iconName, children, onPress, transition, index }) => {
  const isActive = eq(transition, index);
  const activeTransition = withTransition(isActive, { duration: 500 });

  const opacity = interpolate(activeTransition, {
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const cloneOpacity = interpolate(activeTransition, {
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const width = interpolate(activeTransition, {
    inputRange: [0, 0.2, 1],
    outputRange: [0, SEGMENT, SEGMENT],
  });

  const transIcon = interpolate(activeTransition, {
    inputRange: [0, 1],
    outputRange: [10, 0],
  });

  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Animated.View
        style={{
          height: ICON_SIZE + 9,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View style={[StyleSheet.absoluteFill, { ...styles.icon, opacity }]}>
          {children}
        </View>

        <Animated.View
          style={{
            ...styles.icon,
            width,
            transform: [{ translateX: transIcon }],
            opacity: cloneOpacity,
          }}
        >
          <Animated.Text
            style={{
              fontSize: 12,
              marginLeft: 8,
              color: "white",
              fontWeight: "900",
              opacity: cloneOpacity,
            }}
          >
            {iconName}
          </Animated.Text>
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  icon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default Tab;
