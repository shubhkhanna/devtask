import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, FONTS} from '../constants';

const TabBarIcon = ({focused, icon, label}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
      }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: COLORS.black,
        }}
      />
      <Text
        style={{
          color: COLORS.black,
          ...FONTS.body6,
        }}>
        {label}
      </Text>
    </View>
  );
};

export default TabBarIcon;
