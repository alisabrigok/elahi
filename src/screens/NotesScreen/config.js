import React from "react";
import NotesScreen from ".";
import messages from "./messages";
import sharedMessages from "../../shared/messages";
import { useTranslation } from "../../shared/hooks";
import MenuButton from "../../components/MenuButton";

const WithNotesScreen = NotesStackNavigatorScreen => {
  const { t } = useTranslation();
  return (
    <NotesStackNavigatorScreen
      name="Notes"
      component={NotesScreen}
      options={({ navigation }) => ({
        headerTitle: t(messages.notes),
        headerRight: () => (
          <MenuButton
            navigation={navigation}
            iconName="search"
            title={t(sharedMessages.search)}
          />
        ),
      })}
    />
  );
};

export default WithNotesScreen;
