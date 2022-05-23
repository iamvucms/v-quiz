import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  About,
  ChooseCategory,
  GamePlay,
  Home,
  Onboarding,
  Setting,
} from '../screens';
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{
          gestureEnabled: false,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="GamePlay" component={GamePlay} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="ChooseCategory" component={ChooseCategory} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
