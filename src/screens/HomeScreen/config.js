import React from "react";
import HomeScreen from ".";
import messages from "./messages";
import { useTranslation } from "../../shared/hooks";

const WithHomeScreen = HomeStackNavigatorScreen => {
  const { t } = useTranslation();
  return (
    <HomeStackNavigatorScreen
      name="Home"
      component={HomeScreen}
      options={({ navigation }) => ({
        headerTitle: t(messages.home),
        // headerLeft: () => <MenuButton navigation={navigation} />,
      })}
    />
  );
};

export default WithHomeScreen;
