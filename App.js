import React from 'react';
import { images } from "./constants";
import { CryptoDetail, Transaction } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "./navigation/tabs";
import { AnimatedAppLoader } from './components/AnimatedAppLoader';

const Stack = createStackNavigator();


export default function App() {
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