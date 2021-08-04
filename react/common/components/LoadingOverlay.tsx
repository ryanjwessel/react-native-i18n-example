import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import {useTheme} from '../style/theme';

const styles = StyleSheet.create({
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const LoadingOverlay = () => {
  const theme = useTheme();
  const {height} = useWindowDimensions();

  return (
    <View style={[styles.overlay, {backgroundColor: theme.background, height}]}>
      <ActivityIndicator size="large" color={theme.text} />
    </View>
  );
};
