import React from 'react';
import {View, Text, ScrollView, Image, Dimensions} from 'react-native';
import Button from '../../../Components/Button';
import {colors, fontSize} from '../../../utils/Theme';

const data = [
  'English',
  'Urdu',
  'Bengali',
  'Afrikans',
  'English',
  'Urdu',
  'Bengali',
  'Afrikans',
  'English',
  'Urdu',
  'Bengali',
  'Afrikans',
];

export default function Language() {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: colors.lightGray, borderRadius: 15}}>
      {data.map((lang, index) => (
        <Text
          key={'lang=' + index}
          style={{
            fontSize: fontSize.text,
            color: colors.black,
            padding: 12,
          }}>
          {lang}
        </Text>
      ))}
    </ScrollView>
  );
}
