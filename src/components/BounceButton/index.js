import {Pressable} from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import RNSound from 'react-native-sound';
import styles from './styles';
import {clickSound} from '../../constants/data';

const BounceButton = ({style, onPress, children, disabled}) => {
  const anim = useSharedValue(0);
  const onButtonPressIn = () => {
    anim.value = 0;
    anim.value = withTiming(1);
  };
  const onButtonPressOut = () => {
    anim.value = withSpring(0);
  };
  const onButtonPress = () => {
    if (clickSound) {
      clickSound.play();
    }
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
    <Pressable
      disabled={disabled}
      onPress={onButtonPress}
      onPressIn={onButtonPressIn}
      onPressOut={onButtonPressOut}>
      <Animated.View style={[styles.container, buttonStyle, style]}>
        {children}
      </Animated.View>
    </Pressable>
  );
};

export default BounceButton;
