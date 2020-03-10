import React, { useRef } from "react";
import { Animated, StyleSheet, Text, View, I18nManager } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({ children }) => {
  const swipeableRef = useRef(null);

  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });

    return (
      <RectButton style={styles.leftAction} onPress={close}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}>
          Archive
        </Animated.Text>
      </RectButton>
    );
  };

  const renderRightAction = (text, color, outputRangeX, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [outputRangeX, 0],
    });

    return (
      <Animated.View
        style={[
          styles.rightActionWrapper,
          { transform: [{ translateX: trans }] },
        ]}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
          onPress={close}>
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  const renderRightActions = progress => (
    <View
      style={[
        styles.rightActionsWrapper,
        I18nManager.isRTL ? styles.rightActionsWrapperRtl : null,
      ]}>
      {renderRightAction("Remove", "#dd2c00", 128, progress)}
    </View>
  );

  const close = () => {
    swipeableRef.current.close();
  };

  return (
    <Swipeable
      ref={swipeableRef}
      friction={2}
      leftThreshold={30}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}>
      {children}
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: "#497AFC",
    justifyContent: "center",
  },
  actionText: {
    color: "white",
    fontSize: 16,
    backgroundColor: "transparent",
    padding: 10,
  },
  rightActionsWrapperRtl: {
    flexDirection: "row-reverse",
  },
  rightActionsWrapper: {
    width: 128,
    flexDirection: "row",
  },
  rightActionWrapper: {
    flex: 1,
  },
  rightAction: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
