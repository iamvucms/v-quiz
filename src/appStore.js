import {action, makeObservable, observable} from 'mobx';
import {AsyncTrunk} from 'mobx-sync';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ignorePersistNodes} from './constants';
import {clickSound} from './constants/data';
class AppStore {
  premium = false;
  onboardingComplete = false;
  subscriptionModal = false;
  subscriptionModalData = {};
  confirmModal = false;
  confirmModalData = {};
  soundVolume = 100;
  numOfQuestions = 10;
  questionType = 'multiple';
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
      setPremium: action,
      setOnboardingComplete: action,
      setSubscriptionModal: action,
      setConfirmModal: action,
      setSoundVolume: action,
      setNumOfQuestions: action,
      setQuestionType: action,
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
}
export default appStore = new AppStore();
export const trunk = new AsyncTrunk(appStore, {
  storage: AsyncStorage,
});
