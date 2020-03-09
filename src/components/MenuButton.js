import React from "react";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./HeaderButton";

const MenuButton = ({ iconName, title, color, onPress }) => (
  <HeaderButtons
    HeaderButtonComponent={props => <HeaderButton {...props} color={color} />}>
    <Item title={title} iconName={iconName} onPress={onPress} />
  </HeaderButtons>
);

export default MenuButton;
