import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@shopify/restyle";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import "react-native-gesture-handler";

import store from "./store";

/* Stacks */
import { AllAppsStackNavigator } from "./src/components/AllApps";
import { Cryptonavigator } from "./src/crypto/Home";
import { ExpenseNavigator } from "./src/expense__tracker";

import { LoadAssets, theme } from "./src/components";

import { Bitcoin, Dash, Eth, Lite, Tether } from "./assets/images";

const assets = [Bitcoin, Dash, Eth, Lite, Tether];

const fonts = {
  SFBOLD: require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  SFREGULAR: require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  SFSEMI: require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  RBlack: require("./assets/fonts/Rubik/Rubik-Black.ttf"),
  RRegular: require("./assets/fonts/Rubik/Rubik-Regular.ttf"),
  RMedium: require("./assets/fonts/Rubik/Rubik-Medium.ttf"),
};

const AppStack = createStackNavigator();

export default function App() {
  return (
    <Provider {...{ store }}>
      <ThemeProvider {...{ theme }}>
        <LoadAssets {...{ assets, fonts }}>
          <SafeAreaProvider>
            <AppStack.Navigator headerMode="none" initialRouteName="AllApps">
              <AppStack.Screen
                name="AllApps"
                component={AllAppsStackNavigator}
              />
              <AppStack.Screen name="Crypto" component={Cryptonavigator} />
              <AppStack.Screen
                name="ExpenseTracker"
                component={ExpenseNavigator}
              />
            </AppStack.Navigator>
          </SafeAreaProvider>
        </LoadAssets>
        <StatusBar />
      </ThemeProvider>
    </Provider>
  );
}
