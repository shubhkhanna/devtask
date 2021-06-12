import React from 'react';
import {SafeAreaView} from 'react-native';
import {COLORS} from '../constants';

const MainLayout = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.smokeWhite}}>
      {children}
    </SafeAreaView>
  );
};

export default MainLayout;
