import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BgScreen, BounceButton, Padding, VText} from '../../components';
import {ArrowLeftSvg, CheckSvg, CloseSvg} from '../../assets/svg';
import {Colors} from '../../constants';
import Svg, {Circle} from 'react-native-svg';
import {TextInput} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  Extrapolation,
  FadeInLeft,
  FadeInRight,
  interpolate,
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {TimeOut} from '../../constants/data';
import {Observer, useLocalObservable} from 'mobx-react-lite';
import appStore from '../../appStore';
import {decode} from 'html-entities';
const GamePlay = ({navigation}) => {
  const state = useLocalObservable(() => ({
    questionIndex: 0,
    setQuestionIndex: index => (state.questionIndex = index),
    pause: false,
    setPause: pause => {
      animCountDown.value = animCountDown.value;
      state.pause = pause;
    },
    answer: null,
    setAnswer: answer => (state.answer = answer),
    point: 0,

    setPoint: point => (state.point = point),
    correct: 0,
    setCorrect: correct => (state.correct = correct),
    wrong: 0,
    setWrong: wrong => (state.wrong = wrong),
    get currentQuestion() {
      return appStore.questions[state.questionIndex];
    },
    get isMultiple() {
      return this.currentQuestion.type === 'multiple';
    },
    get currentAnswers() {
      const correctAnswer = this.currentQuestion.correct_answer;
      const allAnswers = this.currentQuestion.incorrect_answers.concat([
        correctAnswer,
      ]);
      return [...allAnswers].sort(() => Math.random() - 0.5);
    },
    get correctAnswer() {
      return this.currentQuestion.correct_answer;
    },
    get isCorrect() {
      return this.currentQuestion.correct_answer === this.answer;
    },
    get questionLength() {
      return appStore.questions.length;
    },
    get questionTitle() {
      return `Question ${this.questionIndex + 1}/${this.questionLength}`;
    },
  }));
  const animCountDown = useSharedValue(0);
  useEffect(() => {
    animCountDown.value = 0;
    animCountDown.value = withTiming(
      1,
      {
        easing: Easing.linear,
        duration: TimeOut * 1000,
      },
      isFinished => isFinished && runOnJS(onEndTime)(),
    );
  }, []);
  const {bottom, top} = useSafeAreaInsets();
  const onEndTime = () => {
    state.setPause(true);
    state.setAnswer(state.correctAnswer);
  };
  const onNextPress = () => {
    state.setPause(false);
    state.setAnswer(null);
    animCountDown.value = 0;
    if (state.questionIndex + 1 < state.questionLength) {
      state.setQuestionIndex(state.questionIndex + 1);
      animCountDown.value = withTiming(
        1,
        {
          easing: Easing.linear,
          duration: TimeOut * 1000,
        },
        isFinished => isFinished && runOnJS(onEndTime)(),
      );
    } else {
      navigation.navigate('EndGame', {
        point: state.point,
        correct: state.correct,
        questions: state.questionLength,
        wrong: state.wrong,
      });
    }
  };
  const renderMultipleAnswer = (item, index) => {
    const onPress = () => {
      state.setAnswer(item);
      if (item === state.correctAnswer) {
        setTimeout(onNextPress, 1000);
        state.setPoint(state.point + 10);
        state.setCorrect(state.correct + 1);
      } else {
        state.setPause(true);
        state.setWrong(state.wrong + 1);
      }
    };
    const isOdd = index % 2 === 1;
    return (
      <Observer key={item}>
        {() => {
          const disabled = state.answer !== null;
          const showResult =
            state.answer === item ||
            (item === state.correctAnswer && state.answer !== null);
          const isCorrect = state.isCorrect || item === state.correctAnswer;
          return (
            <Animated.View entering={isOdd ? FadeInLeft : FadeInRight}>
              <BounceButton
                disabled={disabled}
                onPress={onPress}
                style={[
                  styles.answerItem,
                  showResult && {
                    borderColor: isCorrect ? Colors.successDark : Colors.danger,
                  },
                ]}>
                <VText
                  color={
                    showResult
                      ? isCorrect
                        ? Colors.successDark
                        : Colors.danger
                      : Colors.warm_gray
                  }>
                  {decode(item)}
                </VText>
                <View
                  style={[
                    styles.answerCircle,
                    showResult && {
                      backgroundColor: isCorrect
                        ? Colors.successDark
                        : Colors.danger,
                      borderColor: isCorrect
                        ? Colors.successDark
                        : Colors.danger,
                    },
                  ]}>
                  {showResult && (
                    <>
                      {isCorrect ? (
                        <CheckSvg size={10} color={Colors.white} />
                      ) : (
                        <CloseSvg size={10} color={Colors.white} />
                      )}
                    </>
                  )}
                </View>
              </BounceButton>
            </Animated.View>
          );
        }}
      </Observer>
    );
  };
  const onBackPress = () => {
    appStore.setConfirmModal(
      true,
      'Quit game',
      'Are you sure you want to quit the game?',
      () => {
        navigation.navigate('Home');
      },
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <BgScreen />
        <Padding paddingTop={top} />
        <BounceButton onPress={onBackPress} style={styles.btnBack}>
          <ArrowLeftSvg color={Colors.white} size={30} />
        </BounceButton>
      </View>
      <View style={styles.questionContainer}>
        <View style={styles.questionHeader}>
          <View style={styles.questionAnalysis}>
            <Observer>
              {() => (
                <VText
                  align="center"
                  style={styles.alNum}
                  color={Colors.successDark}>
                  {state.correct}
                </VText>
              )}
            </Observer>
            <Observer>
              {() => (
                <View
                  style={[
                    styles.analysisLine,
                    {
                      transform: [
                        {
                          scaleX: state.correct / state.questionLength,
                        },
                      ],
                    },
                  ]}
                />
              )}
            </Observer>
          </View>
          <CircleCountDown anim={animCountDown} />
          <View style={styles.questionAnalysis}>
            <Observer>
              {() => (
                <View
                  style={[
                    styles.analysisLine,
                    {
                      backgroundColor: Colors.danger,
                      transform: [
                        {
                          scaleX: state.wrong / state.questionLength,
                        },
                      ],
                    },
                  ]}
                />
              )}
            </Observer>
            <Observer>
              {() => (
                <VText
                  align="center"
                  style={styles.alNum}
                  color={Colors.danger}>
                  {state.wrong}
                </VText>
              )}
            </Observer>
          </View>
        </View>
        <View style={styles.questionContent}>
          <Padding paddingVertical={7}>
            <Observer>
              {() => (
                <VText color={Colors.secondary} align="center">
                  {state.questionTitle}
                </VText>
              )}
            </Observer>
          </Padding>
          <View style={styles.question}>
            <Observer>
              {() => (
                <VText align="center">
                  {decode(state.currentQuestion.question)}
                </VText>
              )}
            </Observer>
          </View>
        </View>
      </View>
      <View style={styles.answerContainer}>
        <Observer>
          {() =>
            state.isMultiple ? (
              <View style={styles.multipleContainer}>
                <Observer>
                  {() => state.currentAnswers.map(renderMultipleAnswer)}
                </Observer>
              </View>
            ) : (
              <View style={styles.booleanContainer}>
                {/* UI for boolean question here */}
                <Observer>
                  {() => state.currentAnswers.map(renderMultipleAnswer)}
                </Observer>
              </View>
            )
          }
        </Observer>
      </View>
      <View style={styles.bottomContainer}>
        <Observer>
          {() => (
            <View
              style={[
                styles.btnNextContainer,
                {
                  opacity: state.pause ? 1 : 0,
                },
              ]}>
              <BounceButton
                onPress={onNextPress}
                disabled={!state.pause}
                style={styles.btnNext}>
                <VText color={Colors.white}>Next</VText>
              </BounceButton>
            </View>
          )}
        </Observer>
      </View>
      <Padding paddingBottom={bottom} />
    </View>
  );
};

export default GamePlay;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedText = Animated.createAnimatedComponent(TextInput);
const radius = 25;
const CircleCountDown = ({anim}) => {
  const circleProps = useAnimatedProps(() => ({
    strokeDashoffset: interpolate(
      anim.value,
      [0, 1],
      [2 * Math.PI * radius, 0],
      Extrapolation.CLAMP,
    ),
  }));
  const timeProps = useAnimatedProps(() => ({
    text: `${TimeOut - Math.round(anim.value * TimeOut)}s`,
  }));
  return (
    <View style={styles.circleContainer}>
      <Svg height={60} width={60} viewBox="0 0 60 60">
        <AnimatedCircle
          r={radius}
          transform={`rotate(-90,30,30)`}
          stroke={Colors.secondary}
          strokeWidth={3}
          strokeDasharray={2 * Math.PI * radius}
          cx={30}
          cy={30}
          animatedProps={circleProps}
        />
      </Svg>
      <AnimatedText animatedProps={timeProps} style={styles.countdown} />
    </View>
  );
};
