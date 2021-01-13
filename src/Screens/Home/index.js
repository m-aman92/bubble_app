import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import BubbleBuilder from './component/BubbleBuilder';
import MainContainer from '../../Components/MainContainer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors, fontSize} from '../../utils/Theme';
import Chip from '../../Components/Chip';
import Recent from './component/Recent';
import Popular from './component/Popular';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <MainContainer headerComponent="logo">
      <Tab.Navigator
        tabBarOptions={{
          safeAreaInsets: {
            top: 0,
          },
          activeTintColor: colors.primary,
          inactiveTintColor: colors.secondary,
          labelStyle: {
            fontSize: fontSize.text,
            fontWeight: 'bold',
            flex: undefined,
          },
          tabStyle: {
            width: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
          },
          indicatorContainerStyle: {
            justifyContent: 'flex-end',
            alignSelf: 'center',
            left: undefined,
            right: undefined,
            top: undefined,
            bottom: 5,
          },
          contentContainerStyle: {
            justifyContent: 'center',
            alignItems: 'center',
          },
          style: {
            justifyContent: 'center',
            width: '100%',
            elevation: 0,
            // alignItems: 'center',
          },
          indicatorStyle: {
            height: 6,
            position: 'relative',
            borderRadius: 15,
            backgroundColor: colors.primary,
          },
        }}>
        <Tab.Screen name="Recent" component={Recent} />
        <Tab.Screen name="Popular" component={Popular} />
      </Tab.Navigator>
    </MainContainer>
  );
}
