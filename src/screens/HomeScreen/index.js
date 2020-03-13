import React, { useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import reducer, { getLastOpenedNotes } from "./slice";
import saga from "./saga";
import { selectLastOpenedNotes } from "./selectors";
import messages, { scope as key } from "./messages";
import { useInjectStore, useTranslation } from "../../shared/hooks";
import Swipeable from "../../components/Swipeable";
import ListItem, { ListItemSeparator } from "../../components/ListItem";

const HomeScreen = props => {
  console.log("rendered");
  useInjectStore({ key, saga, reducer });
  const { t } = useTranslation();
  const lastOpenedNotes = useSelector(selectLastOpenedNotes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLastOpenedNotes());
  }, [dispatch]);

  const removeData = item => () => {
    const newData = lastOpenedNotes.filter(d => d.from !== item.from);
    // setData(newData);
  };

  return (
    <FlatList
      data={lastOpenedNotes}
      ItemSeparatorComponent={ListItemSeparator}
      renderItem={({ item }) => (
        <Swipeable onSwipeableRightOpen={removeData(item)}>
          <ListItem item={item} />
        </Swipeable>
      )}
      keyExtractor={(item, index) => `message ${index}`}
    />
  );
};

export default HomeScreen;
