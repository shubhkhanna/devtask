import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const Cards = ({containerStyle, details}) => {
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          ...containerStyle,
          height: 130,
          width: 160,
          borderRadius: SIZES.radius,
          marginRight: 20,
        }}>
        {/* Background Image */}
        <Image
          source={details.thumbnail}
          resizeMode="cover"
          style={{
            height: 130,
            width: 160,
            borderRadius: SIZES.radius,
          }}
        />

        {/* Image Text */}
        <View
          style={{
            position: 'absolute',
            flexDirection: details.hashTag ? 'row' : null,
            bottom: details.hashTag ? SIZES.font : SIZES.base,
            paddingHorizontal: SIZES.radius,
            paddingVertical: 5,
          }}>
          {/* HashTag Info */}
          {details.hashTag && details.dist && (
            <>
              <Text style={{color: COLORS.white, ...FONTS.h3, flex: 1}}>
                #{details.hashTag}
              </Text>

              {/* Distance */}
              <Text style={{color: COLORS.white, ...FONTS.h3}}>
                {details.dist}m
              </Text>
            </>
          )}

          {/* Community Info*/}
          {details.title && (
            <View>
              <Text style={{color: COLORS.white, ...FONTS.body2}}>
                {details.id & 1 ? 'Places of ' : 'We live in'}
              </Text>
              <Text
                style={{
                  color: COLORS.white,
                  textTransform: 'uppercase',
                  ...FONTS.h1,
                }}>
                {details.title}
              </Text>
            </View>
          )}
        </View>

        {/* Community Posts Header */}
        {details.posts && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              paddingHorizontal: SIZES.radius,
              paddingVertical: 5,
            }}>
            <Text style={{color: COLORS.white, ...FONTS.h4}}>
              {details.posts}posts/day
            </Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Cards;
