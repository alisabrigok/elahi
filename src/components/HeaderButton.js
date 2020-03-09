import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import Icon from "react-native-vector-icons/MaterialIcons";

const CustomHeaderButton = props => (
  <HeaderButton
    {...props}
    IconComponent={Icon}
    iconSize={23}
    color={props.color}
  />
);

export default CustomHeaderButton;
