import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useTheme} from './common/style/theme';

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export const Welcome = () => {
  const {t} = useTranslation();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{color: theme.text, paddingBottom: 8}}>{t('title')}</Text>
      <Text style={{color: theme.text, paddingBottom: 8}}>
        {t('description')}
      </Text>
      <Text style={{color: theme.text, paddingBottom: 8}}>
        {t('supported_languages')}
      </Text>
    </View>
  );
};
