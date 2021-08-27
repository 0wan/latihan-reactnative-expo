import React, { useLayoutEffect, useEffect, useState } from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import tailwind from 'tailwind-rn';
import Colors from '../constants/colors';
import Layout from '../constants/layout';
import { Icon } from '../components/Icon';

const HomeTabScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={tailwind('h-full')}>
      <View style={tailwind('flex flex-row items-center h-10 justify-end')}>
        <Icon size={20} name="heart" style={tailwind('text-gray-400 mr-4')} />
        <Icon size={20} name="bell" style={tailwind('text-gray-400 mr-6')} />
      </View>

      <View
        style={tailwind(
          'items-center mt-6 mb-4 mx-4 p-4 bg-white  border border-gray-300 rounded-lg',
        )}
      >
        <View style={tailwind('flex flex-row h-16 mb-4')}>
          <TouchableOpacity
            style={tailwind('flex-1 items-center justify-center')}
            onPress={() => navigation.push('ButtonDemo')}
          >
            <Text>Button</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind('flex-1 items-center justify-center mx-2')}
            onPress={() => navigation.push('FormDemo')}
          >
            <Text>Form</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind('flex-1 items-center justify-center')}
            onPress={() => navigation.push('TextDemo')}
          >
            <Text>Text</Text>
          </TouchableOpacity>
        </View>
        <View style={tailwind('flex flex-row h-16')}>
          <View style={tailwind('flex-1 items-center justify-center')}>
            <Text>Menu</Text>
          </View>
          <View style={tailwind('flex-1 items-center justify-center mx-2')}>
            <Text>Menu</Text>
          </View>
          <View style={tailwind('flex-1 items-center justify-center')}>
            <Text>Menu</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: Layout.window.height,
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default HomeTabScreen;
