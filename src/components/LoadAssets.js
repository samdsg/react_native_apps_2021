import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { AsyncStorage } from "react-native";
import AppLoading from 'expo-app-loading'
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`;

const usePromiseAll = (promises, cb) =>
    useEffect(() => {
        (async () => {
            await Promise.all(promises);
            cb();
        })();
    });

const useLoadAssets = (assets, fonts) => {
    const [ready, setReady] = useState(false);
    usePromiseAll(
        [Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))],
        () => setReady(true)
    );
    return ready;
};
const LoadAssets = ({ assets, fonts, children }) => {
    const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__);
    const [initialState, setInitialState] = useState();
    const ready = useLoadAssets(assets || [], fonts || {});
    useEffect(() => {
        const restoreState = async () => {
            try {
                const savedStateString = await AsyncStorage.getItem(
                    NAVIGATION_STATE_KEY
                );
                const state = savedStateString
                    ? JSON.parse(savedStateString)
                    : undefined;
                setInitialState(state);
            } finally {
                setIsNavigationReady(true);
            }
        };

        if (!isNavigationReady) {
            restoreState();
        }
    }, [isNavigationReady]);
    const onStateChange = useCallback(
        (state) =>
            AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)),
        []
    );
    if (!ready || !isNavigationReady) {
        return <AppLoading />;
    }
    return (
        <NavigationContainer {...{ onStateChange, initialState }}>
            <StatusBar style="light" />
            {children}
        </NavigationContainer>
    );
};

export default LoadAssets;