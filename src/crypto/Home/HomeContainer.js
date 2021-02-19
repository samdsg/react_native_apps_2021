import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import theme from "../../components/theme";

export default function QuizContainer({ children }) {
  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      {children}
      <StatusBar backgroundColor={theme.colors["primary"]} style="light" />
    </SafeAreaView>
  );
}
