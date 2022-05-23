import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Colors, Layout} from '../../constants';
import {autorun} from 'mobx';
import appStore from '../../appStore';
import {VText, Padding, BounceButton} from '..';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Observer, useLocalObservable} from 'mobx-react-lite';
import {CheckSvg, RejectSvg} from '../../assets/svg';
const {height} = Layout.window;
const SubscriptionModal = () => {
  const anim = useSharedValue(0);
  const state = useLocalObservable(() => ({}));
  useEffect(() => {
    autorun(() => {
      if (appStore.confirmModal) {
        anim.value = withTiming(2, {duration: 700});
      } else {
        anim.value = withTiming(0, {duration: 500});
      }
    });
  }, []);
  const onBackDropPress = () => {
    appStore.setConfirmModal(false);
  };
  const containerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          anim.value,
          [0, 1],
          [height, 0],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));
  const backdropStyle = useAnimatedStyle(() => ({
    opacity: interpolate(anim.value, [1, 2], [0, 1]),
  }));
  const {bottom} = useSafeAreaInsets();
  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <Animated.View style={[styles.backdrop, backdropStyle]}>
        <Pressable
          onPress={onBackDropPress}
          style={StyleSheet.absoluteFillObject}
        />
      </Animated.View>
      <View style={styles.confirmContainer}>
        <View style={styles.header}>
          <Observer>
            {() => (
              <VText fontSize="large" fontWeight={700} align="center">
                {appStore.confirmModalData.title}
              </VText>
            )}
          </Observer>
        </View>
        <Padding paddingVertical={15}>
          <Observer>
            {() => (
              <VText align="center">
                {appStore.confirmModalData.description}
              </VText>
            )}
          </Observer>
        </Padding>
        <View style={styles.buttonGroup}>
          <BounceButton
            onPress={() => appStore.confirmModalData?.onConfirm?.()}
            style={styles.button}>
            <CheckSvg size={18} color={Colors.white} />
            <VText fontWeight={700} color={Colors.white}>
              {' Sure'}
            </VText>
          </BounceButton>
          <BounceButton
            onPress={() => appStore.setConfirmModal()}
            style={[
              styles.button,
              {
                backgroundColor: Colors.danger,
              },
            ]}>
            <RejectSvg size={18} color={Colors.white} />
            <VText fontWeight={700} color={Colors.white}>
              {' Cancel'}
            </VText>
          </BounceButton>
        </View>
        <Padding paddingBottom={bottom} />
      </View>
    </Animated.View>
  );
};

export default SubscriptionModal;
