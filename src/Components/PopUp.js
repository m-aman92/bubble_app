import React, {useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {colors} from '../utils/Theme';

export default function PopUp() {
  const [children, setChildren] = useState(null);
  const [show, setShow] = useState(false);
  const [style, setStyle] = useState({});
  const [bottom, setBottom] = useState({});

  global.showPopup = (show, children = null, style = {}, bottom) => {
    setChildren(children);
    setShow(show);
    setStyle(style);
    setBottom(bottom);
  };

  if (!show) {
    return null;
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        setChildren(null);
        setShow(false);
      }}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: bottom ? 'flex-end' : 'center',
      }}>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          borderRadius: 10,
          backgroundColor: colors.background,
          width: '80%',
          height: '90%',
          ...style,
        }}>
        {children}
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
