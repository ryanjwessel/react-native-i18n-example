import {useColorScheme} from 'react-native';

export enum Scheme {
  Light = 'light',
  Dark = 'dark',
}

interface Palette {
  background: string;
  text: string;
}

const Theme: {[key in Scheme]: Palette} = {
  [Scheme.Light]: {
    background: '#fff',
    text: '#333',
  },
  [Scheme.Dark]: {
    background: '#333',
    text: '#fff',
  },
};

export const useTheme = () => {
  const scheme = useColorScheme() ?? Scheme.Light;
  return Theme[scheme];
};
