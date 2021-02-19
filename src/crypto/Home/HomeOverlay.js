import React from "react";
import {
  Dimensions,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Image
} from "react-native";

import Animated, { interpolate } from "react-native-reanimated";
import { withTransition } from "react-native-redash";
import { LISTSEGMENT } from "../../components/Constants";
import { Close } from "../../SvgIcons";
import theme, { Box, Text } from "../../components/theme";
import { coinData } from "./data";

const { width, height } = Dimensions.get("window");

const HomveOverlay = ({ overlayValue, resetOverlay }) => {
  const overlayTransition = withTransition(overlayValue, { duration: 500 });

  const showOverlay = interpolate(overlayTransition, {
    inputRange: [0, 1],
    outputRange: [height + 200, height * 0.16],
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        position: "absolute",
        top: showOverlay,
        left: 0,
        bottom: 0,
        zIndex: 1,
        height,
        width,
        backgroundColor: theme.colors.primary,
        borderTopRightRadius: 30,
      }}
    >
      <Box height={height * 0.4} justifyContent="center">
        <TouchableWithoutFeedback onPress={() => resetOverlay()}>
          <Box alignItems="center" style={{ marginTop: -70 }}>
            <Close />
          </Box>
        </TouchableWithoutFeedback>
        <Box
          borderBottomWidth={1}
          borderBottomColor="primary4"
          paddingLeft="l"
          paddingRight="l"
        >
          <Text variant="body" marginBottom="l" marginTop="s">
            Add a currenty or transaction to your portfolio
          </Text>
        </Box>

        <Box
          paddingTop="s"
          paddingLeft="l"
          paddingRight="l"
          borderBottomWidth={1}
          borderBottomColor="primary4"
          paddingBottom="l"
        >
          <Text variant="body" marginBottom="l">
            Connect Exchange Account
          </Text>
          <Text color="text">
            Transactions will automatically sync with your portfolio
          </Text>
        </Box>
      </Box>
      <Box flex={1} justifyContent="flex-start">
        <Box paddingLeft="l">
          <Text variant="body">Add manually currency from our base</Text>

          <Box marginBottom="l" paddingTop="m">
            <TextInput
              placeholderTextColor={theme.colors.text}
              style={{
                backgroundColor: "#171E32",
                width: "90%",
                paddingTop: 9,
                paddingBottom: 9,
                borderRadius: 16,
                paddingLeft: theme.spacing.m,
                fontSize: 10,
              }}
              placeholder="Search Coin"
            />
          </Box>
        </Box>

        <Box height={height * 0.3} backgroundColor="white">
          <ScrollView>
            {coinData.map(
              ({ name, portfolio, price, holding, image }, index) => (
                <Box
                  backgroundColor="primary2"
                  key={index}
                  flexDirection="row"
                  borderBottomWidth={1}
                  borderBottomColor="primary4"
                  style={{ paddingBottom: 13, paddingTop: 13 }}
                >
                  <Box
                    width={LISTSEGMENT}
                    flexDirection="row"
                    alignItems="center"
                    paddingLeft="s"
                  >
                    <Image source={image} style={{ height: 24, width: 24 }} />
                    <Box flexDirection="row" marginLeft="l" alignItems="center">
                      <Text variant="title1">{name.coinName}</Text>
                      <Text marginLeft="m" color="text">
                        {name.shortname}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              )
            )}
          </ScrollView>
        </Box>
      </Box>
    </Animated.View>
  );
};

export default HomveOverlay;
