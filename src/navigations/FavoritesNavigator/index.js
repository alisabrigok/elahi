import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";
import WithHomeScreen from "../../screens/HomeScreen/config";

const FavoritesStackNavigator = createStackNavigator();

const FavoritesNavigator = props => (
  <FavoritesStackNavigator.Navigator>
    {WithHomeScreen(FavoritesStackNavigator.Screen)}
  </FavoritesStackNavigator.Navigator>
);

const WithFavoritesTabNavigator = TabScreen => (
  <TabScreen
    name="Favorites"
    component={FavoritesNavigator}
    options={{
      tabBarIcon: ({ color }) => <Icon name="star" size={23} color={color} />,
    }}
  />
);

export default WithFavoritesTabNavigator;
