import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useTheme} from '../style/theme';

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
});

export const LoadingOverlay = () => {
  const theme = useTheme();

  return (
    <View style={[styles.overlay, {backgroundColor: theme.background}]}>
      <ActivityIndicator size="large" color={theme.text} />
    </View>
  );
};
