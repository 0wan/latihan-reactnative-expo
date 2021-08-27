/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

const linking = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          SearchTab: {
            screens: {
              SearchTabScreen: 'search',
            },
          },
          HomeTab: {
            screens: {
              HomeTabScreen: 'home',
            },
          },
          UserTab: {
            screens: {
              UserTabScreen: 'user',
            },
          },
        },
      },
      // Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
