import React, { useLayoutEffect, useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import tailwind from 'tailwind-rn';
import { Text } from '../components/Text';

const UserTabScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'UserTabScreen',
    });
  }, [navigation]);

  return (
    <SafeAreaView style={tailwind('h-full')}>
      <View style={tailwind('pt-12 items-center')}>
        <View style={tailwind('bg-blue-200 mx-4 p-3 rounded-lg')}>
          <Text style={tailwind('text-blue-800 font-semibold')}>
            Open up App.js to start working on your app! Reload Me.
          </Text>
          <Text>UserTabScreen</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserTabScreen;
