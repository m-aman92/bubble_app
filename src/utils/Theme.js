import {Dimensions, PixelRatio} from 'react-native';

export const colors = {
  primary: '#007EFF',
  grey: '#D9D9D9',
  background: '#FFFFFF',
  black: 'black',
  secondary: '#cccccc',
  lightGray: '#efefef',
  darkGray: '#707070',
  primaryTrans: 'rgba(0,126,255,0.25)',
  primaryEm: 'rgba(0,126,255,0.05)',
};

export const fontSize = {
  label: Dimensions.get('window').width > 400 ? 20 : 14,
  text: Dimensions.get('window').width > 400 ? 16 : 10,
};

export const iconSize = {
  back: 28,
};

export const shadow = {
  high: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  med: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  low: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  noShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,

    elevation: 0,
  },
};
