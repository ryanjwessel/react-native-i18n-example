import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Text} from './common/components/Text';

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export const Welcome = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t('today', {date: new Date()})}</Text>
      <Text>{t('title')}</Text>
      <Text>{t('description')}</Text>
      <Text>{t('supported_languages')}</Text>
    </View>
  );
};
