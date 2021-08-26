import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '../components/Icon';
import useColorScheme from '../hooks/useColorScheme';
import SearchTabScreen from '../screens/SearchTabScreen';
import HomeTabScreen from '../screens/HomeTabScreen';
import UserTabScreen from '../screens/UserTabScreen';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator initialRouteName="HomeTabScreen">
      <BottomTab.Screen
        name="SearchTabScreen"
        component={SearchTabScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ color }) => <Icon name="search" color={color} />,
          tabBarShowLabel: false,
        })}
      />
      <BottomTab.Screen
        name="HomeTabScreen"
        component={HomeTabScreen}
        options={({ navigation }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
          tabBarShowLabel: false,
        })}
      />
      <BottomTab.Screen
        name="UserTabScreen"
        component={UserTabScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ color }) => <Icon name="user" color={color} />,
          tabBarShowLabel: false,
        })}
      />
    </BottomTab.Navigator>
  );
};
