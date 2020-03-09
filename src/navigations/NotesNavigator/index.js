import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";
import WithNotesScreen from "../../screens/NotesScreen/config";

const NotesStackNavigator = createStackNavigator();

const NotesNavigator = props => (
  <NotesStackNavigator.Navigator>
    {WithNotesScreen(NotesStackNavigator.Screen)}
  </NotesStackNavigator.Navigator>
);

const WithNotesTabNavigator = TabScreen => (
  <TabScreen
    name="Notes"
    component={NotesNavigator}
    options={{
      tabBarIcon: ({ color }) => (
        <Icon name="speaker-notes" size={23} color={color} />
      ),
    }}
  />
);

export default WithNotesTabNavigator;
