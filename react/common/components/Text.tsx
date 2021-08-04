import React from 'react';
import {StyleSheet, TextProps, Text as RnText} from 'react-native';
import {useTheme} from '../style/theme';

const styles = StyleSheet.create({
  textPadding: {
    paddingVertical: 8,
  },
});

interface Props extends TextProps {
  children: string;
}

export const Text = (props: Props) => {
  const theme = useTheme();
  return (
    <RnText style={[{color: theme.text}, styles.textPadding]}>
      {props.children}
    </RnText>
  );
};
