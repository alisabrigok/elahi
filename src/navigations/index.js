import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WithHomeTabNavigator from "./HomeNavigator";
import WithCalendarTabNavigator from "./CalendarNavigator";
import WithGoalsTabNavigator from "./GoalsNavigator";
import WithHabitsTabNavigator from "./HabitsNavigator";

import { Colors } from "../shared/styles";

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: Colors.primary,
      style: styles.tabBar,
    }}>
    {WithHomeTabNavigator(Tab.Screen)}
    {WithCalendarTabNavigator(Tab.Screen)}
    {WithGoalsTabNavigator(Tab.Screen)}
    {WithHabitsTabNavigator(Tab.Screen)}
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    elevation: 0, // remove Android shadow
    shadowOpacity: 0, // remove iOS shadow
  },
});

export default TabNavigation;
