import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";
import WithCalendarScreen from "../screens/CalendarScreen/config";

const CalendarStackNavigator = createStackNavigator();

const CalendarNavigator = props => (
  <CalendarStackNavigator.Navigator>
    {WithCalendarScreen(CalendarStackNavigator.Screen)}
  </CalendarStackNavigator.Navigator>
);

const WithCalendarTabNavigator = TabScreen => (
  <TabScreen
    name="Calendar"
    component={CalendarNavigator}
    options={{
      tabBarIcon: ({ color }) => <Icon name="home" size={23} color={color} />,
    }}
  />
);

export default WithCalendarTabNavigator;
