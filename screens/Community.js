import React from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../constants';

const Community = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.smokeWhite,
      }}>
      <Text>Community Screen</Text>
    </View>
  );
};

export default Community;
