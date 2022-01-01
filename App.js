import React from 'react';
import { images } from "./constants";
import { CryptoDetail, Transaction } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "./navigation/tabs";
import { AnimatedAppLoader } from './components/AnimatedAppLoader';

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator();


export default function App() {

  let [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AnimatedAppLoader image={images.splash}>
      <MainScreen />
    </AnimatedAppLoader>
  );
}

function MainScreen() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name="Home"
          component={Tabs}
        />
        <Stack.Screen
          name="CryptoDetail"
          component={CryptoDetail}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}