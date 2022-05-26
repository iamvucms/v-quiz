import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {BgScreen, BounceButton, Padding, VText} from '../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../../constants';
import {ArrowLeftSvg, MusicSvg} from '../../assets/svg';
import {Slider} from '@miblanchard/react-native-slider';
import {Observer, useLocalObservable} from 'mobx-react-lite';
import appStore from '../../appStore';
const Setting = ({navigation}) => {
  const {top, bottom} = useSafeAreaInsets();
  const state = useLocalObservable(() => ({
    volume: appStore.soundVolume,
    numQuestions: appStore.numOfQuestions,
    type: appStore.questionType,
    setVolume: e => {
      state.volume = e[0];
    },
    setNumQuestions: e => {
      if (!appStore.premium) {
        appStore.setSubscriptionModal(
          true,
          'Upgrade to Premium',
          'Upgrade to Premium to increase the number of questions.',
        );
      } else {
        state.numQuestions = e;
      }
    },
    setType: e => {
      if (!appStore.premium) {
        appStore.setSubscriptionModal(
          true,
          'Upgrade to Premium',
          'Upgrade to Premium to unlock all question types.',
        );
      } else {
        state.type = e;
      }
    },
  }));
  const onBackPress = () => {
    navigation.goBack();
  };
  const onSavePress = () => {
    appStore.setSoundVolume([state.volume]);
    appStore.setNumOfQuestions(state.numQuestions);
    appStore.setQuestionType(state.type);
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Padding paddingTop={top} />
      <View style={styles.header}>
        <BounceButton onPress={onBackPress} style={styles.btnBack}>
          <ArrowLeftSvg size={32} color={Colors.white} />
        </BounceButton>
        <VText fontSize="h5" fontWeight={700} color={Colors.secondary}>
          Settings
        </VText>
      </View>
      <View style={styles.settingsContainer}>
        <View style={styles.settingGroup}>
          <View style={styles.settingIcon}>
            <MusicSvg color={Colors.secondary} />
          </View>
          <View style={styles.sliderContainer}>
            <Observer>
              {() => (
                <Slider
                  thumbTintColor={Colors.secondary}
                  value={state.volume}
                  onValueChange={value => state.setVolume(value)}
                  minimumValue={0}
                  maximumValue={100}
                  minimumTrackTintColor={Colors.secondary}
                  step={1}
                />
              )}
            </Observer>
          </View>
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.settingIcon}>
            <Observer>
              {() => (
                <VText
                  color={Colors.secondary}
                  fontWeight={700}
                  lineHeightRatio={1.3}>
                  {state.numQuestions}
                </VText>
              )}
            </Observer>
            <VText color={Colors.secondary} fontSize={7} lineHeight={8}>
              Questions
            </VText>
          </View>
          <View style={styles.sliderContainer}>
            <Observer>
              {() => (
                <Slider
                  thumbTintColor={Colors.secondary}
                  value={state.numQuestions}
                  onValueChange={value => state.setNumQuestions(value)}
                  minimumValue={10}
                  maximumValue={50}
                  minimumTrackTintColor={Colors.secondary}
                  step={1}
                />
              )}
            </Observer>
          </View>
        </View>
        <View style={styles.settingQuestionType}>
          <VText color={Colors.white}>Question Type</VText>
          <View style={styles.questionTypes}>
            <Observer>
              {() => (
                <BounceButton
                  onPress={() => state.setType('multiple')}
                  style={[
                    styles.questionType,
                    state.type === 'multiple' && {
                      borderColor: Colors.secondary,
                    },
                  ]}>
                  <VText color={Colors.secondary}>Multiple Choice</VText>
                  <VText fontSize="small" color={Colors.white}>
                    Select the correct answer from the options provided.
                  </VText>
                </BounceButton>
              )}
            </Observer>
            <Observer>
              {() => (
                <BounceButton
                  onPress={() => state.setType('boolean')}
                  style={[
                    styles.questionType,
                    state.type === 'boolean' && {
                      borderColor: Colors.secondary,
                    },
                  ]}>
                  <VText color={Colors.secondary}>True or False</VText>
                  <VText fontSize="small" color={Colors.white}>
                    Make your answer true or false.
                  </VText>
                </BounceButton>
              )}
            </Observer>
          </View>
        </View>
        <Observer>
          {() => (
            <BounceButton
              onPress={() => state.setType('both')}
              style={[
                styles.bothQuestionType,
                state.type === 'both' && {
                  borderColor: Colors.secondary,
                },
              ]}>
              <VText color={Colors.secondary}>Both</VText>
              <VText fontSize="small" color={Colors.white}>
                Include both types of questions.
              </VText>
            </BounceButton>
          )}
        </Observer>
      </View>
      <Observer>
        {() =>
          !appStore.premium && (
            <BounceButton
              onPress={() =>
                appStore.setSubscriptionModal(
                  true,
                  'Upgrade to Premium',
                  'Get Premium Plan to unlock all features',
                )
              }
              style={styles.btnUpgrade}>
              <VText color={Colors.primary} fontWeight={700}>
                Upgrade to Premium
              </VText>
            </BounceButton>
          )
        }
      </Observer>
      <BounceButton onPress={onSavePress} style={styles.btnSave}>
        <VText color={Colors.white} fontWeight={700} fontSize={24}>
          Save
        </VText>
      </BounceButton>
      <Padding paddingBottom={bottom} />
    </View>
  );
};

export default Setting;
