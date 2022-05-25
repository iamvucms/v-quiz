import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {BgScreen, BounceButton, VText} from '../../components';
import {Colors} from '../../constants';
import {ExitSvg, HomeSvg, ReplaySvg} from '../../assets/svg';
import RNExitApp from 'react-native-exit-app';
import appStore from '../../appStore';

const EndGame = ({navigation, route}) => {
  const {
    point = 0,
    correct = 9,
    questions = 10,
    wrong = 0,
  } = route.params || {};
  const onPlayAgainPress = () => {
    navigation.goBack();
    navigation.goBack();
  };
  const onHomePress = () => {
    navigation.navigate('Home');
  };
  const onQuitPress = () => {
    appStore.setConfirmModal(
      true,
      'Exit',
      'Are you sure you want to exit the game?',
      () => {
        RNExitApp.exitApp();
      },
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.scoreContainer}>
          <View style={styles.score}>
            <VText color={Colors.primary} fontSize={12}>
              Your Score
            </VText>
            <VText
              fontSize={30}
              lineHeight={40}
              fontWeight={700}
              color={Colors.primary}>
              {point}
              <VText color={Colors.primary} fontSize={12}>
                pt
              </VText>
            </VText>
          </View>
        </View>
      </View>
      <View style={styles.summaryContainer}>
        <View style={styles.summaryItem}>
          <VText fontSize="large" color={Colors.yellow}>
            {(correct / questions).toFixed(2) * 100}%
          </VText>
          <VText color={Colors.warm_gray}>Accuracy</VText>
        </View>
        <View style={styles.summaryItem}>
          <VText fontSize="large" color={Colors.secondary}>
            {questions}
          </VText>
          <VText color={Colors.warm_gray}>Total Questions</VText>
        </View>
        <View style={styles.summaryItem}>
          <VText fontSize="large" color={Colors.success}>
            {correct}
          </VText>
          <VText color={Colors.warm_gray}>Correct</VText>
        </View>
        <View style={styles.summaryItem}>
          <VText fontSize="large" color={Colors.danger}>
            {wrong}
          </VText>
          <VText color={Colors.warm_gray}>Wrong</VText>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <View style={styles.action}>
          <BounceButton onPress={onPlayAgainPress} style={styles.btnAction}>
            <ReplaySvg color={Colors.white} size={24} />
          </BounceButton>
          <VText fontSize="small" color={Colors.secondary}>
            Play Again
          </VText>
        </View>
        <View style={styles.action}>
          <BounceButton
            onPress={onHomePress}
            style={[
              styles.btnAction,
              {
                backgroundColor: Colors.black,
              },
            ]}>
            <HomeSvg color={Colors.white} size={24} />
          </BounceButton>
          <VText fontSize="small" color={Colors.black}>
            Home
          </VText>
        </View>
        <View style={styles.action}>
          <BounceButton
            onPress={onQuitPress}
            style={[
              styles.btnAction,
              {
                backgroundColor: Colors.danger,
              },
            ]}>
            <ExitSvg color={Colors.white} size={24} />
          </BounceButton>
          <VText fontSize="small" color={Colors.danger}>
            Quit
          </VText>
        </View>
      </View>
    </View>
  );
};

export default EndGame;
