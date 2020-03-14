import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import reducer, { loadNotes } from "./slice";
import saga from "./saga";
import { selectNotes, selectNotesLoading } from "./selectors";
import messages, { scope as key } from "./messages";
import { useInjectStore, useTranslation } from "../../shared/hooks";
import Swipeable from "../../components/Swipeable";
import ListItem, { ListItemSeparator } from "../../components/ListItem";

const NotesScreen = props => {
  useInjectStore({ key, saga, reducer });
  const { t } = useTranslation();
  const notes = useSelector(selectNotes);
  const loading = useSelector(selectNotesLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNotes());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#ff0000" />;
  }

  return (
    <FlatList
      data={notes}
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

export default NotesScreen;
