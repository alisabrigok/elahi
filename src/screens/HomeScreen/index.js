import React, { useState } from "react";
import reducer from "./slice";
import saga from "./saga";
import messages, { scope as key } from "./messages";
import { useInjectStore, useTranslation } from "../../shared/hooks";
import { FlatList } from "react-native-gesture-handler";
import Swipeable from "../../components/Swipeable";
import ListItem, { ListItemSeparator } from "../../components/ListItem";

const HomeScreen = props => {
  useInjectStore({ key, saga, reducer });
  const { t } = useTranslation();
  const [data, setData] = useState(DATA);

  const removeData = item => () => {
    const newData = data.filter(d => d.from !== item.from);
    setData(newData);
  };

  return (
    <FlatList
      data={data}
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

const DATA = [
  {
    from: "D'Artagnan",
    when: "3:11 PM",
    message:
      "Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque",
  },
  {
    from: "Aramis",
    when: "11:46 AM",
    message:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus hendrerit ligula dignissim maximus aliquet. Integer tincidunt, tortor at finibus molestie, ex tellus laoreet libero, lobortis consectetur nisl diam viverra justo.",
  },
  {
    from: "Athos",
    when: "6:06 AM",
    message:
      "Sed non arcu ullamcorper, eleifend velit eu, tristique metus. Duis id sapien eu orci varius malesuada et ac ipsum. Ut a magna vel urna tristique sagittis et dapibus augue. Vivamus non mauris a turpis auctor sagittis vitae vel ex. Curabitur accumsan quis mauris quis venenatis.",
  },
];
