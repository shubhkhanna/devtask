import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const SearchBar = () => {
  const [value, setValue] = useState();

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginTop: SIZES.radius,
        marginHorizontal: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        borderWidth: 2,
        borderColor: COLORS.grey,
      }}>
      <TextInput
        value={value}
        onChangeText={e => setValue(e)}
        underlineColorAndroid="transparent"
        style={{
          flex: 1,
          color: COLORS.black,
          marginLeft: SIZES.base,
          ...FONTS.body4,
        }}
        placeholderTextColor={COLORS.grey}
        placeholder="Search"
      />
    </View>
  );
};

export default SearchBar;
