import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";
import WithHomeScreen from "../../screens/HomeScreen/config";

const SettingsStackNavigator = createStackNavigator();

const SettingsNavigator = props => (
  <SettingsStackNavigator.Navigator>
    {WithHomeScreen(SettingsStackNavigator.Screen)}
  </SettingsStackNavigator.Navigator>
);

const WithSettingsTabNavigator = TabScreen => (
  <TabScreen
    name="Settings"
    component={SettingsNavigator}
    options={{
      tabBarIcon: ({ color }) => (
        <Icon name="settings" size={23} color={color} />
      ),
    }}
  />
);

export default WithSettingsTabNavigator;
