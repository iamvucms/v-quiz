import {
  AnswerAlphabetImageSrc,
  HourGlassImageSrc,
  LightBrainImageSrc,
} from '../assets/images';

export const OnboardingData = [
  {
    title: 'Welcome to VQuiz!',
    description:
      'VQuiz is a quiz app that helps you learn new knowledge by asking you questions.',
    image: LightBrainImageSrc,
    imageScale: 1,
  },
  {
    title: 'Answer Quiz with CountDown',
    description:
      'You can answer the quiz with a countdown timer. You can also see the time left in the quiz.',
    image: HourGlassImageSrc,
    imageScale: 0.9,
  },
  {
    title: 'Variants of Quiz',
    description:
      'Our database contains multiple types & categories of questions.\nYou can choose the type of questions you want to answer.',
    image: AnswerAlphabetImageSrc,
    imageScale: 1,
  },
];
export const GameMode = {
  Easy: 'Easy',
  Medium: 'Medium',
  Hard: 'Hard',
};
export const GameModeColors = {
  Easy: '#00FF00',
  Medium: '#FFD700',
  Hard: '#FF0000',
};
export const Subscriptions = [
  {
    title: '1 Week',
    name: 'com.vquiz.1week',
    price: 0.99,
    savePercent: 0,
  },
  {
    title: '1 Month',
    name: 'com.vquiz.1month',
    price: 2.99,
    savePercent: 20,
  },
  {
    title: '3 Months',
    name: 'com.vquiz.3month',
    price: 9.99,
    savePercent: 30,
  },
];
