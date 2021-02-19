import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/* Components */
import Home from "./Home";

export const assets = [];

const HomeStack = createStackNavigator();

export const Cryptonavigator = () => (
    <HomeStack.Navigator headerMode="none">
        <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
);