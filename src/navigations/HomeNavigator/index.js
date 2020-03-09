import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";
import WithHomeScreen from "../../screens/HomeScreen/config";

const HomeStackNavigator = createStackNavigator();

const HomeNavigator = props => (
  <HomeStackNavigator.Navigator>
    {WithHomeScreen(HomeStackNavigator.Screen)}
  </HomeStackNavigator.Navigator>
);

const WithHomeTabNavigator = TabScreen => (
  <TabScreen
    name="Home"
    component={HomeNavigator}
    options={{
      tabBarIcon: ({ color }) => <Icon name="home" size={23} color={color} />,
    }}
  />
);

export default WithHomeTabNavigator;
