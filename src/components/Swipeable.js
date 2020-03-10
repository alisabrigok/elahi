import React, { useRef, useState } from "react";
import { Animated, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Icon from "react-native-vector-icons/MaterialIcons";

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const ListItem = ({ children, onSwipeableRightOpen }) => {
  const swipeableRef = useRef(null);
  const [isRemoved, setIsRemoved] = useState(false);

  const renderLeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 80],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });

    return (
      <RectButton style={styles.leftAction} onPress={close}>
        <AnimatedIcon
          name="star"
          size={30}
          color="#fff"
          style={[styles.actionIcon, { transform: [{ scale }] }]}
        />
      </RectButton>
    );
  };

  const renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <RectButton
        style={[styles.rightAction, { display: isRemoved ? "none" : "flex" }]}
        onPress={close}>
        <AnimatedIcon
          name="delete-forever"
          size={30}
          color="#fff"
          style={[styles.actionIcon, { transform: [{ scale }] }]}
        />
      </RectButton>
    );
  };

  const swipeableRightOpenHandler = () => {
    setIsRemoved(true);
    close();
    onSwipeableRightOpen();
  };

  const swipeableCloseHandler = () => {
    setIsRemoved(false);
  };

  const close = () => {
    swipeableRef.current.close();
  };

  return (
    <Swipeable
      ref={swipeableRef}
      friction={2}
      leftThreshold={80}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableRightOpen={swipeableRightOpenHandler}
      onSwipeableLeftOpen={close}
      onSwipeableClose={swipeableCloseHandler}>
      {children}
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: "#F3B303",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10,
  },
  rightAction: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#dd2c00",
    flex: 1,
    justifyContent: "flex-end",
  },
});
