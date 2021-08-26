import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabNavigator } from './BottomTabNavigator';
import { List } from '../screens/List';
import { TextDemo, ButtonDemo, FormDemo } from '../screens/Demos';

const MainStack = createNativeStackNavigator();

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    <MainStack.Screen name="List" component={List} />
    <MainStack.Screen
      name="TextDemo"
      component={TextDemo}
      options={{ headerTitle: 'Text Demo Header Title' }}
    />
    <MainStack.Screen
      name="FormDemo"
      component={FormDemo}
      options={{ headerTitle: 'Button Demo Header Title' }}
    />
    <MainStack.Screen
      name="ButtonDemo"
      component={ButtonDemo}
      options={{ headerTitle: 'Button Demo Header Title' }}
    />
  </MainStack.Navigator>
);
