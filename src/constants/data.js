import {
  AnimalCareImageSrc,
  AnswerAlphabetImageSrc,
  BallsSportsImageSrc,
  BoardGamesImageSrc,
  BookStackImageSrc,
  CartoonImageSrc,
  ComicImageSrc,
  CreativityImageSrc,
  DataScienceImageSrc,
  DeliveryTruckImageSrc,
  FujiImageSrc,
  GadgetsImageSrc,
  GameConsoleImageSrc,
  GarlandImageSrc,
  GlobeImageSrc,
  HephaestusImageSrc,
  HistoryImageSrc,
  HourGlassImageSrc,
  KnowledgeImageSrc,
  LightBrainImageSrc,
  MathematicsImageSrc,
  MovieImageSrc,
  MusicImageSrc,
  OnlineTestImageSrc,
  PoliticsImageSrc,
  TelevisionImageSrc,
  TheatreImageSrc,
} from '../assets/images';
import RNSound from 'react-native-sound';
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
export const Categories = [
  {
    name: 'General Knowledge',
    id: 9,
    image: KnowledgeImageSrc,
  },
  {
    name: 'Books',
    id: 10,
    image: BookStackImageSrc,
  },
  {
    name: 'Film',
    id: 11,
    image: MovieImageSrc,
  },
  {
    name: 'Music',
    id: 12,
    image: MusicImageSrc,
  },
  {
    name: 'Musicals & Theatres',
    id: 13,
    image: TheatreImageSrc,
  },
  {
    name: 'Television',
    id: 14,
    image: TelevisionImageSrc,
  },
  {
    name: 'Video Games',
    id: 15,
    image: GameConsoleImageSrc,
  },
  {
    name: 'Board Games',
    id: 16,
    image: BoardGamesImageSrc,
  },
  {
    name: 'Science & Nature',
    id: 17,
    image: DataScienceImageSrc,
  },
  {
    name: 'Computers',
    id: 18,
    image: OnlineTestImageSrc,
  },
  {
    name: 'Mathematics',
    id: 19,
    image: MathematicsImageSrc,
  },
  {
    name: 'Mythology',
    id: 20,
    image: HephaestusImageSrc,
  },
  {
    name: 'Sports',
    id: 21,
    image: BallsSportsImageSrc,
  },
  {
    name: 'Geography',
    id: 22,
    image: GlobeImageSrc,
  },
  {
    name: 'History',
    id: 23,
    image: HistoryImageSrc,
  },
  {
    name: 'Politics',
    id: 24,
    image: PoliticsImageSrc,
  },
  {
    name: 'Art',
    id: 25,
    image: CreativityImageSrc,
  },
  {
    name: 'Celebrities',
    id: 26,
    image: GarlandImageSrc,
  },
  {
    name: 'Animals',
    id: 27,
    image: AnimalCareImageSrc,
  },
  {
    name: 'Vehicles',
    id: 28,
    image: DeliveryTruckImageSrc,
  },
  {
    name: 'Comics',
    id: 29,
    image: ComicImageSrc,
  },
  {
    name: 'Gadgets',
    id: 30,
    image: GadgetsImageSrc,
  },
  {
    name: 'Anime & Manga',
    id: 31,
    image: FujiImageSrc,
  },
  {
    name: 'Cartoon & Animations',
    id: 32,
    image: CartoonImageSrc,
  },
];
export const clickSound = new RNSound(
  'clicky.wav',
  RNSound.MAIN_BUNDLE,
  err => {
    if (err) {
      console.log(err);
      return;
    }
  },
);
export const TimeOut = 20;
export const baseUrl = 'http://localhost:3000/api';
