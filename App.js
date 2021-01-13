import React, {useRef} from 'react';
import {InteractionManager, Modal, SafeAreaView, StatusBar} from 'react-native';
import Intro from './src/Screens/Intro';

import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NavigationContainer} from '@react-navigation/native';
// import {Selection} from './src/Screens';

import Selection from './src/Screens/Selection/index';
import {colors} from './src/utils/Theme';
import {
  Comment,
  Home,
  HomeTown,
  MyAccount,
  Notifications,
  Poll,
  Profile,
} from './src/Screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigationRef} from './src/utils/navigation';
import BottomTab from './src/Components/BottomTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Post from './src/Screens/Post';
import MyModal from './src/Components/Modal';
import PopUp from './src/Components/PopUp';

enableScreens();
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Feed" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Comment" component={Comment} />
      <Stack.Screen name="Poll" component={Poll} />
    </Stack.Navigator>
  );
}

function NewStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyProfile" component={Profile} />
      <Stack.Screen name="MyAccount" component={MyAccount} />
      <Stack.Screen name="HomeTown" component={HomeTown} />
    </Stack.Navigator>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="New" component={NewStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}

const App = () => {
  const bottomRef = useRef();
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Selection" component={Selection} />
            <Stack.Screen name="Home" component={TabNavigation} />
          </Stack.Navigator>
        </NavigationContainer>
        <PopUp />
      </SafeAreaProvider>
      {/* <Intro></Intro> */}
    </>
  );
};

export default App;
