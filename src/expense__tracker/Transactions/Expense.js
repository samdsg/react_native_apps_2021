import React from "react";
import { View, StyleSheet } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Animated, { eq, interpolate } from "react-native-reanimated";

import { withTransition } from "react-native-redash";
import theme, { Box, Text } from "../../components/theme";
import { Delete } from "../Svgs";

const Expense = ({ index, transition, onTap, onDelete, item, allDates }) => {
  const isActive = eq(transition, index);
  const activeTransition = withTransition(isActive, { duration: 200 });

  const delX = interpolate(activeTransition, {
    inputRange: [0, 1],
    outputRange: [-100, 20],
  });

  const hidePrice = interpolate(activeTransition, {
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          onTap();
        }}
      >
        <Animated.View>
          <Box
            overflow="hidden"
            paddingHorizontal="l"
            borderBottomWidth={1}
            borderBottomColor="silver"
            height={50}
            position="relative"
          >
            <View style={[StyleSheet.absoluteFill, {}]}>
              <Animated.View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                  height: 50,
                  padding: theme.spacing.l,
                }}
              >
                <Animated.Text>{item.title}</Animated.Text>
                <Animated.Text
                  style={{
                    opacity: hidePrice,
                    color: item.price > 0 ? "#009BFC" : "#FF4500",
                  }}
                >
                  {item.price > 0
                    ? `₦${item.price}`
                    : `- ₦${Math.abs(item.price)}`}
                </Animated.Text>
              </Animated.View>
            </View>

            <Animated.View
              style={{
                fontSize: 12,
                color: "white",
                fontWeight: "900",
                position: "absolute",
                height: 50,
                width: "14%",
                right: delX,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                backgroundColor: "white",
              }}
            >
              <Text>
                <TouchableOpacity
                  onPress={() => {
                    onDelete(index);
                  }}
                >
                  <Delete />
                </TouchableOpacity>
              </Text>
            </Animated.View>
          </Box>
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
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

export default Expense;
