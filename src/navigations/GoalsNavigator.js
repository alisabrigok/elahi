import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";
import WithHomeScreen from "../screens/HomeScreen/config";

const GoalsStackNavigator = createStackNavigator();

const GoalsNavigator = props => (
  <GoalsStackNavigator.Navigator>
    {WithHomeScreen(GoalsStackNavigator.Screen)}
  </GoalsStackNavigator.Navigator>
);

const WithGoalsTabNavigator = TabScreen => (
  <TabScreen
    name="Goals"
    component={GoalsNavigator}
    options={{
      tabBarIcon: ({ color }) => <Icon name="home" size={23} color={color} />,
    }}
  />
);

export default WithGoalsTabNavigator;
