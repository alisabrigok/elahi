import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";
import WithHomeScreen from "../screens/HomeScreen/config";

const HabitsStackNavigator = createStackNavigator();

const HabitsNavigator = props => (
  <HabitsStackNavigator.Navigator>
    {WithHomeScreen(HabitsStackNavigator.Screen)}
  </HabitsStackNavigator.Navigator>
);

const WithHabitsTabNavigator = TabScreen => (
  <TabScreen
    name="Habits"
    component={HabitsNavigator}
    options={{
      tabBarIcon: ({ color }) => <Icon name="home" size={23} color={color} />,
    }}
  />
);

export default WithHabitsTabNavigator;
