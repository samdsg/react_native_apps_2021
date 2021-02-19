import React from "react";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import theme, { Box, Text } from "./theme";
import { BorderlessButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";

export const assets = [];

const AllAppsStack = createStackNavigator();

const AllApps = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box
        flex={1}
        paddingTop="xl"
        backgroundColor="text"
        padding="l"
        justifyContent="center"
        alignItems="center"
      >
        <Box flexDirection="row" flexWrap="wrap" justifyContent="space-around">
          <BorderlessButton onPress={() => navigation.navigate("Crypto")}>
            <Box
              width={130}
              height={150}
              margin="s"
              backgroundColor="primary"
              borderRadius="l"
              marginBottom="m"
              justifyContent="center"
              alignItems="center"
            >
              <Text variant="title1" textAlign="center">
                Crypto App
              </Text>
            </Box>
          </BorderlessButton>

          <BorderlessButton
            onPress={() => navigation.navigate("ExpenseTracker")}
          >
            <Box
              width={130}
              height={150}
              margin="s"
              backgroundColor="primary"
              borderRadius="l"
              marginBottom="m"
              justifyContent="center"
              alignItems="center"
            >
              <Text variant="title1" textAlign="center">
                Expense App
              </Text>
            </Box>
          </BorderlessButton>
        </Box>
      </Box>
      <StatusBar backgroundColor={theme.colors["primary"]} style="light" />
    </SafeAreaView>
  );
};

export const AllAppsStackNavigator = () => (
  <AllAppsStack.Navigator headerMode="none" initialRouteName="AppLists">
    <AllAppsStack.Screen name="AppLists" component={AllApps} />
  </AllAppsStack.Navigator>
);
