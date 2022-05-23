import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {VText} from '..';
import {Colors} from '../../constants';
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from 'react-native-reanimated';
const AppLogo = () => {
  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInUp.delay(1000)}>
        <VText fontSize={100} lineHeightRatio={1.5} color={Colors.white}>
          V
        </VText>
        <Animated.View
          entering={FadeInLeft.delay(2000)}
          style={[
            styles.line,
            {
              backgroundColor: Colors.secondary,
            },
          ]}
        />
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(1000)}>
        <VText fontSize={100} lineHeightRatio={1.5} color={Colors.secondary}>
          quiz
        </VText>
        <Animated.View entering={FadeInRight.delay(2000)} style={styles.line} />
      </Animated.View>
    </View>
  );
};

export default AppLogo;
