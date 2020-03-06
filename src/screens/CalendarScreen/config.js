import React from "react";
import CalendarScreen from ".";
import messages from "./messages";
import { useTranslation } from "../../shared/hooks";

const WithCalendarScreen = CalendarStackNavigatorScreen => {
  const { t } = useTranslation();
  return (
    <CalendarStackNavigatorScreen
      name="Calendar"
      component={CalendarScreen}
      options={({ navigation }) => ({
        headerTitle: t(messages.calendar),
        // headerLeft: () => <MenuButton navigation={navigation} />,
      })}
    />
  );
};

export default WithCalendarScreen;
