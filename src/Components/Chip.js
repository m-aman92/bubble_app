import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {colors, fontSize} from '../utils/Theme';

export default function Chip({image, label, isActive, onPress}) {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: isActive ? colors.primaryTrans : colors.background,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12,
      }}
      onPress={onPress}>
      <Image
        style={{
          width: 10,
          height: 10,
          tintColor: isActive ? colors.primary : colors.black,
          marginRight: 4,
        }}
        resizeMode="contain"
        source={image}
      />
      <Text
        style={{
          fontSize: fontSize.text,
          color: isActive ? colors.primary : colors.black,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
