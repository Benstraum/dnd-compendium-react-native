import React, { useRef } from "react";
import {
  Animated,
  StyleSheet,
  PanResponder,
  Text,
  Dimensions,
  TouchableNativeFeedbackBase,
  Pressable,
} from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Theme } from "../hooks/useTheme";
import { View, ViewProps } from "./Themed";

const { width: sWidth } = Dimensions.get("window");
const WIDTH = (sWidth * 0.8) / 2;

interface DraggableHomeItemProps extends ViewProps {
  theme: Theme;
  onPress: () => void;
}

export const DraggableHomeItem: React.FC<DraggableHomeItemProps> = ({
  theme,
  children,
  onPress,
}) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {useNativeDriver:true}),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  return (
    <Animated.View
     onTouchEnd={onPress}
      style={[
        {
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        },
      ]}
      {...panResponder.panHandlers}
    >
      <TouchableOpacity
        onPress={() => onPress()}
        style={[
          styles.container,
          { backgroundColor: theme.colors.backgroundColor },
        ]}
      >
        {children}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: WIDTH,
    width: WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    borderRadius: 5,
  },
});