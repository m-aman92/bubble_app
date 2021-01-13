import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {colors} from '../utils/Theme';

const images = {
  Home: require('../assets/Images/home.png'),
  New: require('../assets/Images/new.png'),
  Profile: require('../assets/Images/profile.png'),
};

export default function MyTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View
          style={{
            flexDirection: 'row',
            height: 50 + insets.bottom - 4,
            paddingBottom: insets.bottom - 4,
            backgroundColor: colors.background,
          }}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{flex: 1, alignItems: 'center', padding: 8}}>
                <Image
                  source={images[label]}
                  style={{
                    height: '100%',
                    aspectRatio: 1,
                    resizeMode: 'contain',
                    tintColor: isFocused ? colors.primary : colors.secondary,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
}
