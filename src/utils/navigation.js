// RootNavigation.js

import * as React from 'react';
import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
  CommonNavigationAction,
} from '@react-navigation/native';

// import {avigationType} from './NavigationType'

export const navigationRef = React.createRef();

// Add functions here for navigations and export
export function navigate(name: string, params?: Object) {
  if (navigationRef.current) navigationRef.current.navigate(name, params);
}

// export function getCurrentIndex(): number {
//   if (navigationRef.current) return navigationRef.current.getRootState().index;
// }

export function goBack() {
  if (navigationRef.current) navigationRef.current.goBack();
}

export function dispatch(action: CommonNavigationAction) {
  if (navigationRef.current) navigationRef.current.dispatch(action);
}

export function push(name: string, params?: object) {
  if (navigationRef.current)
    navigationRef.current.dispatch(StackActions.push(name, params));
}

export function pop(number = 1) {
  if (navigationRef.current)
    navigationRef.current.dispatch(StackActions.pop(number));
}

export function reset(action) {
  dispatch(CommonActions.reset(action));
}

export const getScreen = (name, param) => {
  const {routes} = navigationRef.current?.getRootState();
  const searchRoutes = routes.filter((a) => {
    console.log('GETSCREEN', param, typeof param === 'object');
    if (typeof param === 'object') {
      return (
        a.name === name && JSON.stringify(a.params) === JSON.stringify(param)
      );
    }
    return a.name === name && a.params === param;
  });
  // console.log(!(navigationRef.current?.getCurrentRoute().name === name));
  if (searchRoutes.length) {
    return true;
  } else return false;
};
