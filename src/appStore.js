import {action, flow, flowResult, makeObservable, observable} from 'mobx';
import {AsyncTrunk} from 'mobx-sync';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ignorePersistNodes} from './constants';
import {clickSound, baseUrl, Categories} from './constants/data';
import axios from 'axios';
class AppStore {
  premium = true;
  onboardingComplete = false;
  subscriptionModal = false;
  subscriptionModalData = {};
  confirmModal = false;
  confirmModalData = {};
  soundVolume = 100;
  numOfQuestions = 10;
  questionType = 'multiple';
  questions = [];
  loadingQuestion = false;
  constructor() {
    ignorePersistNodes(this, [
      'subscriptionModal',
      'confirmModal',
      'subscriptionModalData',
      'confirmModalData',
    ]);
    makeObservable(this, {
      premium: observable,
      onboardingComplete: observable,
      subscriptionModal: observable,
      subscriptionModalData: observable,
      confirmModal: observable,
      confirmModalData: observable,
      numOfQuestions: observable,
      soundVolume: observable,
      questionType: observable,
      questions: observable,
      loadingQuestion: observable,
      setPremium: action,
      setOnboardingComplete: action,
      setSubscriptionModal: action,
      setConfirmModal: action,
      setSoundVolume: action,
      setNumOfQuestions: action,
      setQuestionType: action,
      getQuestions: flow,
    });
  }
  setPremium(premium) {
    this.premium = premium;
  }
  setOnboardingComplete(onboardingComplete) {
    this.onboardingComplete = onboardingComplete;
  }
  setSubscriptionModal(subscriptionModal, title, description) {
    this.subscriptionModal = subscriptionModal;
    if (title && description) {
      this.subscriptionModalData = {title, description};
    }
  }
  setConfirmModal(confirmModal, title, description, onConfirm) {
    this.confirmModal = confirmModal;
    if (title && description) {
      this.confirmModalData = {title, description};
    }
    if (onConfirm) {
      this.confirmModalData.onConfirm = () => {
        onConfirm();
        this.setConfirmModal(false);
      };
    }
  }
  setSoundVolume(soundVolume) {
    if (clickSound && typeof soundVolume[0] === 'number') {
      clickSound.setVolume(soundVolume[0] / 100);
    }
    this.soundVolume = soundVolume[0];
  }
  setNumOfQuestions(numOfQuestions) {
    if (this.premium) {
      this.numOfQuestions = numOfQuestions;
    }
  }
  setQuestionType(questionType) {
    this.questionType = questionType;
  }
  *getQuestions(categoryId = Categories[0].id, difficulty = 'easy') {
    try {
      this.questions = [];
      this.loadingQuestion = true;
      const response = yield axios.get(
        `${baseUrl}/questions?type=${this.questionType}&limit=${this.numOfQuestions}&difficulty=${difficulty}&categoryId=${categoryId}`,
      );
      this.questions = response.data.results;
      this.loadingQuestion = false;
    } catch (e) {
      console.log({getQuestions: e});
    }
  }
}
export default appStore = new AppStore();
export const trunk = new AsyncTrunk(appStore, {
  storage: AsyncStorage,
});
