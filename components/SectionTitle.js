import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const SectionTitle = ({title, seeAll}) => {
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
      }}>
      {/* Section Tilte */}
      <Text
        style={{
          color: COLORS.dimGray,
          flex: 1,
          ...FONTS.h1,
        }}>
        {title}
      </Text>

      {/* See All */}
      {seeAll && (
        <TouchableOpacity onPress={() => console.log(title)}>
          <Text
            style={{
              color: COLORS.dimGray,
              ...FONTS.body4,
            }}>
            See all
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionTitle;
