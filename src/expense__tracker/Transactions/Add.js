import React, { useRef, useState } from "react";
import { StyleSheet, Dimensions, TextInput } from "react-native";
import {
  BorderlessButton,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { StackActions } from "@react-navigation/native";

import theme, { Box, Text } from "../../components/theme";
import { BackArrow } from "../Svgs";
import { addTransaction } from "../../../store/actions/transactionActions";
import { useDispatch } from "react-redux";

/* Dimension */
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    zIndex: 3,
    paddingTop: 40,
    padding: theme.spacing.l,
    bottom: 0,
  },
});

const Add = ({ navigation }) => {
  const dispatch = useDispatch();
  const { navigate } = navigation;
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const titleRef = useRef(null);

  const onPop = () => {
    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
  };

  const onSubmit = () => {
    const transaction = {
      price,
      title,
    };

    if (!price || !title) return alert("Details Empty");

    dispatch(addTransaction(transaction));
    setPrice("");
    setTitle("");
    navigate("Transactions");
  };

  return (
    <Box padding="l" flex={1}>
      <Box flexDirection="row" alignItems="center" paddingTop="l">
        <TouchableOpacity onPress={onPop}>
          <Box>
            <BackArrow />
          </Box>
        </TouchableOpacity>

        <Text
          variant="title1"
          color="primary2"
          style={{ marginLeft: 30, fontSize: 18 }}
        >
          Add Amount
        </Text>
      </Box>

      <Box flexDirection="row" flexDirection="column" marginTop="xl">
        <Box
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
          borderBottomWidth={2}
          paddingBottom="s"
          marginTop="m"
        >
          <Text variant="title" color="primary">
            ₦
          </Text>

          <TextInput
            placeholderTextColor={theme.colors.primary}
            placeholder="Amount"
            keyboardType="number-pad"
            style={{
              padding: 10,
              fontSize: 30,
              fontFamily: "RRegular",
              width: "80%",
            }}
            onChangeText={(price) => setPrice(price)}
            autoFocus={true}
            onSubmitEditing={() => titleRef.current.focus()}
            defaultValue={price}
          />

          <Text variant="title" color="primary" style={{ fontSize: 20 }}>
            NGN
          </Text>
        </Box>

        <Box marginTop="xl" borderBottomWidth={2}>
          <TextInput
            ref={titleRef}
            placeholderTextColor={theme.colors.primary}
            placeholder="Expenses made for"
            defaultValue={title}
            style={{
              fontSize: 30,
              fontFamily: "RRegular",
              width: "80%",
            }}
            onChangeText={(title) => setTitle(title)}
          />
        </Box>

        <Box marginTop="xl">
          <BorderlessButton onPress={onSubmit}>
            <Box
              borderRadius="l"
              height={55}
              backgroundColor="primary"
              alignItems="center"
              justifyContent="center"
            >
              <Text variant="title1">Submit</Text>
            </Box>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Add;
