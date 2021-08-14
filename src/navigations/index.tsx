import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { MainBottomTabNavigator } from "./MainBottomTabNavigator";

export const NavigationContainerComponent = () => {
  return (
    <NavigationContainer>
      <MainBottomTabNavigator />
    </NavigationContainer>
  );
};
