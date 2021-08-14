import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import Home from "../screens/Home";
import Users from "../screens/Users";

const BottomTab = createBottomTabNavigator();

export const MainBottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={() => ({
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="Users"
        component={Users}
        options={() => ({
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome
              name={focused ? "user" : "user-o"}
              size={size}
              color={color}
            />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};
