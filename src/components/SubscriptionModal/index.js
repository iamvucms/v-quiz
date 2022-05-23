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
import {StarImageSrc} from '../../assets/images';
import {Subscriptions} from '../../constants/data';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Observer, useLocalObservable} from 'mobx-react-lite';
const {height} = Layout.window;
const SubscriptionModal = () => {
  const anim = useSharedValue(0);
  const state = useLocalObservable(() => ({
    subscription: Subscriptions[0],
    setSubscription: subscription => {
      state.subscription = subscription;
    },
  }));
  useEffect(() => {
    autorun(() => {
      if (appStore.subscriptionModal) {
        anim.value = withTiming(2, {duration: 700});
      } else {
        anim.value = withTiming(0, {duration: 500});
      }
    });
  }, []);
  const onBackDropPress = () => {
    appStore.setSubscriptionModal(false);
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
      <View style={styles.subscriptionContainer}>
        <View>
          <View style={styles.titleContainer}>
            <Observer>
              {() => (
                <VText fontWeight={700}>
                  {appStore.subscriptionModalData.title}
                </VText>
              )}
            </Observer>
          </View>
          <Padding paddingHorizontal={20}>
            <Observer>
              {() => (
                <VText fontSize={14} color={Colors.warm_gray}>
                  {appStore.subscriptionModalData.description}
                </VText>
              )}
            </Observer>
          </Padding>
        </View>
        <View style={styles.subscription}>
          {Subscriptions.map((item, index) => (
            <Observer key={index}>
              {() => (
                <BounceButton
                  onPress={() => state.setSubscription({...item})}
                  key={item.title}
                  style={[
                    styles.subscriptionItem,
                    state.subscription.name === item.name && {
                      borderColor: Colors.secondary,
                    },
                  ]}>
                  <Image
                    style={{transform: [{scale: 0.6 + index * 0.2}]}}
                    source={StarImageSrc}
                  />
                  <Padding paddingVertical={7}>
                    <VText fontWeight={700}>{item.title}</VText>
                  </Padding>
                  <VText fontWeight={700} color={Colors.secondary}>
                    ${item.price}
                  </VText>
                  <VText fontSize={10} color={Colors.success}>
                    Save {item.savePercent}%
                  </VText>
                </BounceButton>
              )}
            </Observer>
          ))}
        </View>
        <View>
          <BounceButton style={styles.btnSubscription}>
            <VText color={Colors.white}>Subscribe Now</VText>
          </BounceButton>
          <BounceButton style={[styles.btnSubscription, styles.btnRestore]}>
            <VText color={Colors.primary}>Restore Subscription</VText>
          </BounceButton>
        </View>
        <Padding paddingBottom={bottom} />
      </View>
    </Animated.View>
  );
};

export default SubscriptionModal;
