import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WithHomeTabNavigator from "./HomeNavigator";
import WithNotesTabNavigator from "./NotesNavigator";
import WithFavoritesTabNavigator from "./FavoritesNavigator";
import WithSettingsTabNavigator from "./SettingsNavigator";

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
    {WithNotesTabNavigator(Tab.Screen)}
    {WithFavoritesTabNavigator(Tab.Screen)}
    {WithSettingsTabNavigator(Tab.Screen)}
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
