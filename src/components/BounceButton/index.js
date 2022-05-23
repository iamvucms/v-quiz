import {Pressable} from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';

const BounceButton = ({style, onPress, children}) => {
  const anim = useSharedValue(0);
  const onButtonPressIn = () => {
    anim.value = 0;
    anim.value = withTiming(1);
  };
  const onButtonPressOut = () => {
    anim.value = withSpring(0);
    onPress && onPress();
  };
  const buttonStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(anim.value, [0, 1], [1, 0.9]),
      },
    ],
  }));
  return (
    <Pressable onPressIn={onButtonPressIn} onPressOut={onButtonPressOut}>
      <Animated.View style={[styles.container, buttonStyle, style]}>
        {children}
      </Animated.View>
    </Pressable>
  );
};

export default BounceButton;
