import {BlurView} from '@react-native-community/blur';
import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {GameButtonsImageSrc, PlayButtonImageSrc} from '../../assets/images';
import {Colors, Layout} from '../../constants';
import styles from './styles';
const {width, height} = Layout.window;
const maxY = height - 100;
const maxX = width - 100;
const BgScreen = ({bgColor = Colors.primary}) => {
  const moveXAnim = useSharedValue(0);
  const moveYAnim = useSharedValue(0);
  const moveX2Anim = useSharedValue(0);
  const moveY2Anim = useSharedValue(0);
  const moveX3Anim = useSharedValue(0);
  const moveY3Anim = useSharedValue(0);
  const moveX4Anim = useSharedValue(0);
  const moveY4Anim = useSharedValue(0);
  useEffect(() => {
    // rotateAnim.value = withRepeat(withTiming(1, { duration: 3000 }), -1, true);
    moveXAnim.value = withRepeat(withTiming(maxX, {duration: 10000}), -1, true);
    moveYAnim.value = withRepeat(withTiming(maxY, {duration: 3000}), -1, true);
    moveX2Anim.value = withRepeat(
      withTiming(-maxX, {duration: 4000}),
      -1,
      true,
    );
    moveY2Anim.value = withRepeat(
      withTiming(maxY, {duration: 10000}),
      -1,
      true,
    );
    moveX3Anim.value = withRepeat(withTiming(maxX, {duration: 4000}), -1, true);
    moveY3Anim.value = withRepeat(
      withTiming(maxY / 2, {duration: 6000}),
      -1,
      true,
    );
    moveX4Anim.value = withRepeat(
      withTiming((maxX - 100) / 2, {duration: 4000}),
      -1,
      true,
    );
    moveY4Anim.value = withRepeat(withTiming(maxY, {duration: 8000}), -1, true);
  }, []);
  const moveStyles = useAnimatedStyle(() => {
    return {
      transform: [
        // {
        //   rotate: interpolate(rotateAnim.value, [0, 1], ['0deg', '360deg'])
        // }
        {
          translateX: moveXAnim.value,
        },
        {
          translateY: moveYAnim.value,
        },
      ],
    };
  }, []);
  const move2Styles = useAnimatedStyle(() => {
    return {
      transform: [
        // {
        //   rotate: interpolate(rotateAnim.value, [0, 1], ['0deg', '360deg'])
        // }
        {
          translateX: moveX2Anim.value,
        },
        {
          translateY: moveY2Anim.value,
        },
        {
          scale: interpolate(moveX2Anim.value, [0, maxX], [1, 1.25]),
        },
      ],
    };
  }, []);
  const move3Styles = useAnimatedStyle(() => {
    return {
      transform: [
        // {
        //   rotate: interpolate(rotateAnim.value, [0, 1], ['0deg', '360deg'])
        // }

        {
          translateX: moveX3Anim.value,
        },
        {
          translateY: moveY3Anim.value,
        },
      ],
    };
  }, []);
  const move4Styles = useAnimatedStyle(() => {
    return {
      transform: [
        // {
        //   rotate: interpolate(rotateAnim.value, [0, 1], ['0deg', '460deg'])
        // }
        {
          translateY: height,
        },
        {
          translateX: moveX4Anim.value,
        },
        {
          translateY: -moveY4Anim.value,
        },
        {
          scale: interpolate(moveX4Anim.value, [0, maxY], [1, 2]),
        },
      ],
    };
  }, []);
  return (
    <View
      style={[
        styles.bgContainer,
        {
          backgroundColor: bgColor,
        },
      ]}>
      <Animated.View style={[styles.shape, moveStyles]}>
        <Image source={GameButtonsImageSrc} />
      </Animated.View>
      <Animated.View style={[styles.shape, move2Styles, {top: 0, right: 0}]}>
        <View style={styles.squareAnimation} />
      </Animated.View>
      <Animated.View style={[styles.shape, move3Styles]}>
        <Image source={PlayButtonImageSrc} />
      </Animated.View>
      <Animated.View style={[styles.shape, move4Styles]}>
        <View style={styles.circleAnimation} />
      </Animated.View>
    </View>
  );
};

export default BgScreen;
