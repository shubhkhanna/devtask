import React from 'react';
import {SafeAreaView} from 'react-native';
import {COLORS} from '../constants';

const MainLayout = ({children, containerStyle}) => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: COLORS.smokeWhite, ...containerStyle}}>
      {children}
    </SafeAreaView>
  );
};

export default MainLayout;
