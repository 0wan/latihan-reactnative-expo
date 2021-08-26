import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  icon: {
    marginBottom: -3,
  },
});

export const Icon = ({ name, style = {}, size = 30, ...rest }) => {
  let iconStyles = [styles.icon];

  if (Array.isArray(style)) {
    iconStyles = [...iconStyles, ...style];
  } else {
    iconStyles.push(style);
  }
  return <FontAwesome name={name} size={size} style={iconStyles} {...rest} />;
};
