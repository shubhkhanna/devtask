import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {COLORS, icons, SIZES} from '../constants';

const HeaderBack = ({onPress}) => {
  return (
    <View
      style={{
        top: 0,
        left: 0,
        bottom: 0,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      {/* Back Button */}
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 35,
          width: 35,
          backgroundColor: COLORS.grey,
          borderTopRightRadius: SIZES.radius,
          borderBottomRightRadius: SIZES.radius,
          paddingHorizontal: SIZES.padding,
        }}
        onPress={onPress}>
        {/* Button Image */}
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.dimGray,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBack;
