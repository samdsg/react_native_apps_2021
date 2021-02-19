import React, { useRef } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  View,
  FlatList,
  Animated as RAnimated,
  TouchableWithoutFeedback,
} from "react-native";
import theme, { Box, Text } from "../../components/theme";

import { State } from "react-native-gesture-handler";

import Animated, { useCode, cond, eq, set } from "react-native-reanimated";

const { Value } = Animated;

import { useValue, withTransition } from "react-native-redash";

/* Components */
import HomeContainer from "./HomeContainer";
import Tab from "./Tab";
import HomeOverlay from "./HomeOverlay";

/* Icons */
import { PortfolioIcon, Market, Pulse, News, Add, Menu } from "../../SvgIcons";

/* Values */
import {
  SEGMENT,
  ICON_SIZE,
  PADDING,
  DURATION,
  LISTSEGMENT,
} from "../../components/Constants";

import { coinData } from "./data";

const { width, height } = Dimensions.get("window");

const tabs = [
  { tab: { iconName: "Portfolio", icon: <PortfolioIcon /> } },
  { tab: { iconName: "Pulse", icon: <Pulse /> } },
  { tab: { iconName: "Market", icon: <Market /> } },
  { tab: { iconName: "News", icon: <News /> } },
];

const ITEM_SIZE = Platform.OS === "ios" ? width * 0.9 : width * 0.9;
const SPACING = 10;

const AnimatedFlatList = RAnimated.createAnimatedComponent(FlatList);

const Home = () => {
  const gesState = useRef(new Animated.Value(State.UNDETERMINED));
  const gesVal = useRef(new Animated.Value(0));

  /* Show Overlay Animation */
  const overlayValue = useValue(0);
  const resetOverlay = () => {
    overlayValue.setValue(0);
  };

  useCode(
    () => [cond(eq(gesState.current, State.END), [set(gesVal.current, 1)])],
    [gesState.current]
  );

  useCode(
    () => [
      cond(eq(gesState.current, State.END), [
        cond(eq(gesVal.current, 1), [
          set(gesVal.current, 0),
          set(gesState.current, State.UNDETERMINED),
        ]),
      ]),
    ],
    [gesState.current]
  );

  /* Tab Animations */
  const active = new Value(0);
  const transition = withTransition(active, { duration: DURATION });

  const movies = [1, 2, 3, 4, 5, 6, 7, 8];

  const animeValue = (index) => {};

  return (
    <HomeContainer>
      <Box flex={1} justifyContent="flex-end">
        <Box flex={1} backgroundColor="primary" paddingTop="l">
          <Box height={height * 0.35}>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Menu />
              <Text variant="body" color="text">
                Portfolio
              </Text>
              <Box></Box>
            </Box>

            <Animated.View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AnimatedFlatList
                scrollEventThrottle={16} // <-- Use 1 here to make sure no events are ever missed
                keyExtractor={(item) => item.key}
                horizontal
                bounces={false}
                decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
                horizontal
                renderToHardwareTextureAndroid
                contentContainerStyle={{ alignItems: "center" }}
                snapToInterval={ITEM_SIZE}
                snapToAlignment="start"
                showsHorizontalScrollIndicator={false}
                data={movies}
                renderItem={() => {
                  return (
                    <View style={{ width: ITEM_SIZE }}>
                      <Box
                        style={{
                          marginHorizontal: SPACING,
                          padding: SPACING * 2,
                          alignItems: "flex-start",
                          backgroundColor: "#111526",
                          borderRadius: 10,
                          height: 181,
                        }}
                        justifyContent="space-between"
                      >
                        <Box>
                          <Text color="white" marginBottom="s">
                            Default Account
                          </Text>
                          <Text color="text">Coins Added manually</Text>
                        </Box>

                        <Box
                          flexDirection="row"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Text variant="title1" color="text" marginTop="xl">
                            $ 53,877.34
                          </Text>
                          <Text color="green" marginLeft="xl">
                            +21.5
                          </Text>
                        </Box>
                      </Box>
                    </View>
                  );
                }}
                style={{ padding: 0, backgroundColor: theme["colors"].primary }}
                keyExtractor={(item, i) => i.toString()}
              />
            </Animated.View>
          </Box>

          <Box flex={1} backgroundColor="primary2">
            {/* Stats */}
            <Box
              backgroundColor="primary2"
              flexDirection="row"
              justifyContent="space-between"
              paddingTop="s"
              paddingBottom="s"
            >
              <Box
                width={width / 3}
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                paddingLeft="s"
              >
                <Text textAlign="right" color="text">
                  Coin
                </Text>
              </Box>

              <Box
                width={width / 3}
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-end"
                paddingRight="m"
              >
                <Text textAlign="right" color="text">
                  Price
                </Text>
              </Box>

              <Box
                width={width / 3}
                flexDirection="row"
                justifyContent="flex-end"
                alignItems="center"
                paddingRight="m"
              >
                <Text textAlign="right" color="text">
                  Coin
                </Text>
              </Box>
            </Box>

            <Box backgroundColor="white" flex={1}>
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
                        <Image
                          source={image}
                          style={{ height: 24, width: 24 }}
                        />
                        <Box flexDirection="column" marginLeft="m">
                          <Text marginBottom="s" variant="title1">
                            {name.coinName}
                          </Text>
                          <Text color="text">{name.shortname}</Text>
                        </Box>
                      </Box>

                      <Box
                        flexDirection="column"
                        width={LISTSEGMENT}
                        paddingRight="m"
                      >
                        <Text
                          marginBottom="s"
                          variant="title1"
                          textAlign="right"
                        >
                          {price.currentPrice}
                        </Text>
                        <Text
                          textAlign="right"
                          color={price.percentage < 1 ? "red" : "green"}
                        >
                          {price.percentage < 1 ? "-" : "+"}
                          {price.percentage}
                        </Text>
                      </Box>

                      <Box
                        paddingRight="m"
                        flexDirection="column"
                        width={LISTSEGMENT}
                      >
                        <Text
                          marginBottom="s"
                          variant="title1"
                          textAlign="right"
                        >
                          {holding.price}
                        </Text>
                        <Text textAlign="right" color="blue">
                          {holding.total}
                        </Text>
                      </Box>
                    </Box>
                  )
                )}
              </ScrollView>
            </Box>
          </Box>
        </Box>

        <Box flexDirection="row" backgroundColor="primary">
          {tabs.map(({ tab }, index) => {
            const { icon, iconName } = tab;
            return (
              <Animated.View style={{ ...styles.tab }} key={index}>
                <Tab
                  onPress={() => {
                    active.setValue(index);
                    animeValue(index);
                  }}
                  {...{ iconName, transition, index }}
                >
                  {icon}
                </Tab>
              </Animated.View>
            );
          })}
        </Box>
      </Box>

      <TouchableWithoutFeedback
        onPress={() => {
          overlayValue.setValue(1);
        }}
      >
        <Box position="absolute" bottom={height * 0.075} right={-16}>
          <Add />
        </Box>
      </TouchableWithoutFeedback>
      <HomeOverlay {...{ overlayValue, resetOverlay }} />
    </HomeContainer>
  );
};

const styles = StyleSheet.create({
  tab: {
    width: SEGMENT,
    height: ICON_SIZE + PADDING,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
