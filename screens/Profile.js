import React from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../constants';

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.smokeWhite,
      }}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default Profile;
