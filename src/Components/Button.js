import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {colors, fontSize} from '../utils/Theme';

export default function Button({
  style,
  label,
  onPress,
  type = 'filled',
}: {
  style: ViewStyle,
  label: String,
  onPress: Function,
}) {
  let sty = style?.length ? style : [style];
  return (
    <TouchableOpacity
      style={[type === 'filled' ? styles.container : styles.unfilled, ...sty]}
      onPress={onPress}>
      <Text style={type === 'filled' ? styles.text : styles.unfilledText}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  text: {
    color: colors.background,
    fontSize: fontSize.label - 2,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  unfilled: {
    padding: 12,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  unfilledText: {
    color: colors.primary,
    fontSize: fontSize.label - 2,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
});
