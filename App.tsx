import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Provider as ReduxProvider } from "react-redux";
import { NavigationContainerComponent } from "./src/navigations";

import { store } from "./src/store";

function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainerComponent />
    </>
  );
}

export default () => {
  return (
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
