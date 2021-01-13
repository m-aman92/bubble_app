import React, {ReactElement, ReactNode} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../utils/Theme';
import Header from './Header';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    width: '100%',
  },
});

type Props = {
  headerComponent: React.ReactNode,
  outsideSafeArea: React.ReactNode,
  onLayout: (() => void) | undefined,
  children: ReactNode,
  style: ViewStyle,
};

// const defaultProps = {
//   headerComponent: null,
//   outsideSafeArea: null,
//   onLayout: () => {},
// };

function MainContainer({
  onLayout,
  headerComponent,
  headerLabel,
  outsideSafeArea,
  children,
  style,
  safeAll,
}: Props) {
  return (
    <View style={[styles.container, style]} onLayout={onLayout}>
      {headerComponent && <Header type={headerComponent} label={headerLabel} />}
      {outsideSafeArea}
      <SafeAreaView
        style={styles.safeArea}
        edges={['right', 'left', ...(safeAll ? ['top', 'bottom'] : [])]}>
        {children}
      </SafeAreaView>
    </View>
  );
}

export default MainContainer;
