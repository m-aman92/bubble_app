import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import MainContainer from '../../Components/MainContainer';
import MyBubbles from './component/MyBubbles';
import MyActivity from './component/MyActivity';
import {colors, fontSize} from '../../utils/Theme';
import More from './component/More';

const Tab = createMaterialTopTabNavigator();

export default class Profile extends Component {
  render() {
    return (
      <MainContainer headerComponent="label" headerLabel="Profile">
        <Tab.Navigator
          tabBarOptions={{
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
          <Tab.Screen
            options={{tabBarLabel: 'My Bubbles'}}
            name="MyBubbles"
            component={MyBubbles}
          />
          <Tab.Screen
            options={{tabBarLabel: 'My Activities'}}
            name="MyActivity"
            component={MyActivity}
          />
          <Tab.Screen name="More" component={More} />
        </Tab.Navigator>
      </MainContainer>
    );
  }
}
