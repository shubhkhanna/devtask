import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const Post = ({post}) => {
  const {author, download_url} = post;

  return (
    <View style={{width: '100%', height: SIZES.height - 70}}>
      <ImageBackground
        source={{uri: download_url}}
        resizeMode="cover"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}>
        {/* Top title */}
        <Text
          style={{
            color: COLORS.white,
            top: SIZES.largePadding,
            textAlign: 'center',
            ...FONTS.body3,
          }}>
          Collections
        </Text>

        {/* Bottom Text */}
        <View
          style={{
            position: 'absolute',
            bottom: SIZES.padding,
            paddingHorizontal: SIZES.padding,
            paddingVertical: 10,
          }}>
          {/* Title Text */}

          <Text style={{color: COLORS.white, ...FONTS.h2}}>{author}</Text>

          <Text style={{color: COLORS.smokeWhite, ...FONTS.body4}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            consectetur magnam ab nisi nam molestias, delectus atque culpa
            cupiditate ducimus.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Post;
