import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const NomadsList = ({data}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: SIZES.largePadding,
        marginHorizontal: SIZES.padding,
      }}>
      {data.map(item => (
        <View
          key={item.id}
          style={{
            marginHorizontal: SIZES.radius,
            marginTop: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            height: SIZES.width / 4,
            width: SIZES.width / 4,
            borderRadius: SIZES.width / 8,
          }}>
          <Image
            source={item.thumbnail}
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: SIZES.width / 8,
              marginBottom: 8,
            }}
          />

          {/* Nomads Name */}
          <Text style={{color: COLORS.dimGray, flexWrap: 'wrap', ...FONTS.h3}}>
            @{item.name}
          </Text>

          {/* Nomads Followers */}
          <Text
            style={{color: COLORS.dimGray, flexWrap: 'wrap', ...FONTS.body5}}>
            {item.followers} followers
          </Text>
        </View>
      ))}
    </View>
  );
};

export default NomadsList;
