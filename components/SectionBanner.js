import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const SectionBanner = () => {
  return (
    <View
      style={{
        height: SIZES.height / 4,
        borderRadius: SIZES.radius,
        marginHorizontal: SIZES.padding,
        marginTop: 20,
      }}>
      <Image
        source={{uri: 'https://picsum.photos/250/250'}}
        resizeMode="cover"
        style={{width: '100%', height: '100%', borderRadius: SIZES.radius}}
      />
      <Text
        style={{
          color: COLORS.white,
          position: 'absolute',
          bottom: SIZES.font,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 5,
          ...FONTS.h3,
        }}>
        #Top search of the day
      </Text>
    </View>
  );
};

export default SectionBanner;
