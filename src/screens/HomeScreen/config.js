import React from "react";
import HomeScreen from ".";
import messages from "./messages";
import sharedMessages from "../../shared/messages";
import { useTranslation } from "../../shared/hooks";
import MenuButton from "../../components/MenuButton";

const WithHomeScreen = HomeStackNavigatorScreen => {
  const { t } = useTranslation();
  return (
    <HomeStackNavigatorScreen
      name="Home"
      component={HomeScreen}
      options={({ navigation }) => ({
        headerTitle: t(messages.home),
        headerRight: () => (
          <MenuButton
            navigation={navigation}
            iconName="search"
            title={t(sharedMessages.search)}
            onPress={() => navigation.navigate("Notes")}
          />
        ),
      })}
    />
  );
};

export default WithHomeScreen;
