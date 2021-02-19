import React from "react";
import { ImageBackground, SectionList, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment";
import Animated from "react-native-reanimated";
import { useValue, withTransition } from "react-native-redash";
import { Ebg1 } from "../../../assets/images";
import theme, { Box, Text } from "../../components/theme";
import { Chart, AddIcon, Delete } from "../Svgs";

export const moneySign = "₦";

/* Add Transaction Component */
import Expense from "./Expense";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../../../store/actions/transactionActions";
import Top from "./Top";

const Transactions = ({ navigation }) => {
  const { navigate } = navigation;
  const dispatch = useDispatch();

  const active = new Animated.Value(0);
  const transition = withTransition(active, { duration: 200 });

  const onNavigate = () => {
    navigate("AddTransaction");
  };

  const onDelete = (id) => {
    dispatch(deleteTransaction(id));
  };

  const { transactions } = useSelector((state) => state.trs);

  const DATA = Object.values(
    transactions.reduce((acc, item) => {
      if (!acc[item.addedtime])
        acc[item.addedtime] = {
          title: item.addedtime,
          data: [],
          price: item.price,
        };

      acc[item.addedtime].data.push(item);
      return acc;
    }, {})
  );

  /* Price calculations */

  const allDates = transactions
    .map(({ addedtime }) => addedtime)
    .filter(function (value, index, array) {
      return array.indexOf(value) == index;
    });

  const Prices = ({ time }) => {
    const prices = transactions
      .filter(({ addedtime }) => addedtime == time)
      .map(({ price }) => {
        return price;
      });
    const sum = eval(prices.join("+"));

    return (
      <Text color="silver1">{sum > 0 ? `₦${sum}` : `- ₦${Math.abs(sum)}`}</Text>
    );
  };

  const renderHeader = ({ section: { data } }) => {
    return (
      <Box
        paddingHorizontal="m"
        backgroundColor="white"
        flexDirection="row"
        justifyContent="space-between"
        borderBottomWidth={1}
        borderBottomColor="silver"
        paddingBottom="s"
        paddingTop="s"
        marginTop="m"
        borderTopRightRadius="m"
        borderTopLeftRadius="m"
      >
        <Text color="silver1">
          {moment(data[0].addedtime, "x").format("DD MMM YYYY")}
        </Text>
        <Prices time={data[0].addedtime} />
      </Box>
    );
  };

  const renderFooter = () => {
    return (
      <Box
        paddingHorizontal="m"
        backgroundColor="white"
        flexDirection="row"
        justifyContent="space-between"
        borderBottomWidth={1}
        borderBottomColor="silver"
        paddingBottom="s"
        borderBottomRightRadius="m"
        borderBottomLeftRadius="m"
      ></Box>
    );
  };

  return (
    <ImageBackground
      source={Ebg1}
      style={{
        flex: 1,
        justifyContent: "flex-end",
        position: "relative",
      }}
    >
      <Top />

      <Box
        flex={1}
        paddingLeft="l"
        paddingRight="l"
        paddingBottom="m"
        paddingTop="m"
      >
        <SectionList
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          bounces={false}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => {
            const index = item.id;

            return (
              <Animated.View
                style={{ borderRadius: 20, backgroundColor: "red" }}
              >
                <Box
                  overflow="hidden"
                  borderBottomWidth={1}
                  borderBottomColor="silver"
                  height={50}
                  position="relative"
                  backgrjoundColor="white"
                >
                  <Animated.View
                    style={{
                      fontSize: 12,
                      color: "white",
                      fontWeight: "900",
                      position: "absolute",
                      height: 50,
                      width: "14%",
                      right: -20,
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "center",
                      backgroundColor: "white",
                    }}
                  >
                    <Text>
                      <Delete />
                    </Text>
                  </Animated.View>
                  <Animated.View style={{ backgroundColor: "white" }}>
                    <Expense
                      onTap={() => {
                        active.setValue(index);
                      }}
                      {...{ transition, index, onDelete, item, allDates }}
                    >
                      <Box
                        overflow="hidden"
                        paddingHorizontal="m"
                        borderBottomWidth={1}
                        borderBottomColor="silver"
                        height={50}
                        position="relative"
                        backgroundColor="white"
                      >
                        <View style={[StyleSheet.absoluteFill, {}]}>
                          <Animated.View
                            style={{
                              justifyContent: "space-between",
                              flexDirection: "row",
                              alignItems: "center",
                              height: 50,
                              paddingHorizontal: theme.spacing.m,
                            }}
                          ></Animated.View>
                        </View>
                      </Box>
                    </Expense>
                  </Animated.View>
                </Box>
              </Animated.View>
            );
          }}
          renderSectionHeader={renderHeader}
          renderSectionFooter={renderFooter}
          sections={DATA}
        />
      </Box>
      <Box style={{ position: "absolute", right: 20, bottom: 50, zIndex: 4 }}>
        <TouchableOpacity onPress={onNavigate}>
          <AddIcon />
        </TouchableOpacity>
      </Box>
    </ImageBackground>
  );
};

export default Transactions;
