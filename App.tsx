import React, {Suspense} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {LoadingOverlay} from './react/common/components/LoadingOverlay';
import {Scheme, useTheme} from './react/common/style/theme';
import {Welcome} from './react/Welcome';
import './react/common/i18n';

const App = () => {
  const scheme = useColorScheme();
  const theme = useTheme();

  const backgroundStyle = {
    backgroundColor: theme.background,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={scheme === Scheme.Light ? 'light-content' : 'dark-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle, {height: '100%'}]}>
        <Suspense fallback={<LoadingOverlay />}>
          <Welcome />
        </Suspense>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
