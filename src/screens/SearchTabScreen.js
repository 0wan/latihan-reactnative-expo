import React, { useLayoutEffect, useEffect, useState } from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Colors from '../constants/colors';
import Layout from '../constants/layout';

const SearchTabScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'SearchTabScreen',
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.container}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View style={styles.content}>
          <Text>SearchTabScreen</Text>
        </View>
      </ScrollView>
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

export default SearchTabScreen;
