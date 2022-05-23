import {action, makeObservable, observable} from 'mobx';
import {AsyncTrunk} from 'mobx-sync';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ignorePersistNodes} from './constants';
class AppStore {
  premium = false;
  onboardingComplete = false;
  subscriptionModal = false;
  subscriptionModalData = {};
  confirmModal = false;
  confirmModalData = {};
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
      setPremium: action,
      setOnboardingComplete: action,
      setSubscriptionModal: action,
      setConfirmModal: action,
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
}
export default appStore = new AppStore();
export const trunk = new AsyncTrunk(appStore, {
  storage: AsyncStorage,
});
