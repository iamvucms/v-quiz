import {BackHandler, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  AppLogo,
  BgScreen,
  BounceButton,
  Padding,
  VText,
} from '../../components';
import {Colors} from '../../constants';
import {ExitSvg, SettingSvg} from '../../assets/svg';
import {useLocalObservable, Observer} from 'mobx-react-lite';
import {GameMode, GameModeColors} from '../../constants/data';
import appStore from '../../appStore';
import RNExitApp from 'react-native-exit-app';
const Home = ({navigation}) => {
  const state = useLocalObservable(() => ({
    gameMode: GameMode.Easy,
    toggleGameMode: () => {
      if (appStore.premium) {
        if (state.gameMode === GameMode.Easy) {
          state.gameMode = GameMode.Medium;
        } else if (state.gameMode === GameMode.Medium) {
          state.gameMode = GameMode.Hard;
        } else {
          state.gameMode = GameMode.Easy;
        }
      } else {
        appStore.setSubscriptionModal(
          true,
          'Subscribe Premium',
          'You need to subscribe to Premium to play in Other modes',
        );
      }
    },
  }));
  return (
    <View style={styles.container}>
      <BgScreen />
      <View style={styles.logoContainer}>
        <AppLogo />
      </View>
      <View style={styles.mainMenu}>
        <BounceButton
          onPress={() => navigation.navigate('ChooseCategory')}
          style={styles.btnMenu}>
          <VText fontWeight={700} fontSize={20} color={Colors.white}>
            Play Game
          </VText>
        </BounceButton>
        <BounceButton
          onPress={() => state.toggleGameMode()}
          style={[
            styles.btnMenu,
            {
              backgroundColor: Colors.primaryDark,
              shadowColor: Colors.primaryDark,
            },
          ]}>
          <VText fontWeight={700} fontSize={20} color={Colors.white}>
            Mode:{' '}
            <Observer>
              {() => (
                <VText
                  fontWeight={700}
                  fontSize={20}
                  color={GameModeColors[state.gameMode]}>
                  {state.gameMode}
                </VText>
              )}
            </Observer>
          </VText>
        </BounceButton>
        <BounceButton
          onPress={() => navigation.navigate('Setting')}
          style={[
            styles.btnMenu,
            {
              backgroundColor: Colors.success_80,
              shadowColor: Colors.success_80,
            },
          ]}>
          <SettingSvg size={22} color={Colors.white} />
          <Padding paddingLeft={5} />
          <VText fontWeight={700} fontSize={20} color={Colors.white}>
            Settings
          </VText>
        </BounceButton>
        <BounceButton
          onPress={() =>
            appStore.setConfirmModal(
              true,
              'Exit',
              'Are you sure you want to exit the game?',
              () => {
                console.log('come here');
                RNExitApp.exitApp();
              },
            )
          }
          style={[
            styles.btnMenu,
            {
              backgroundColor: Colors.dangerLight,
              shadowColor: Colors.dangerLight,
            },
          ]}>
          <ExitSvg size={22} color={Colors.white} />
          <Padding paddingLeft={5} />
          <VText fontWeight={700} fontSize={20} color={Colors.white}>
            Quit
          </VText>
        </BounceButton>
      </View>
    </View>
  );
};

export default Home;
