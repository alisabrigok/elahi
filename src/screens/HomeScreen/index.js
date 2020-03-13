import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import reducer, { loadLastOpenedNotes } from "./slice";
import saga from "./saga";
import {
  selectLastOpenedNotes,
  selectLastOpenedNotesLoading,
} from "./selectors";
import messages, { scope as key } from "./messages";
import { useInjectStore, useTranslation } from "../../shared/hooks";
import Swipeable from "../../components/Swipeable";
import ListItem, { ListItemSeparator } from "../../components/ListItem";

const HomeScreen = props => {
  useInjectStore({ key, saga, reducer });
  const { t } = useTranslation();
  const lastOpenedNotes = useSelector(selectLastOpenedNotes);
  const loading = useSelector(selectLastOpenedNotesLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLastOpenedNotes());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#ff0000" />;
  }

  return (
    <FlatList
      data={lastOpenedNotes}
      ItemSeparatorComponent={ListItemSeparator}
      renderItem={({ item }) => (
        <Swipeable>
          <ListItem item={item} />
        </Swipeable>
      )}
      keyExtractor={(item, index) => `message ${index}`}
    />
  );
};

export default HomeScreen;
