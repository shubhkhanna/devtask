import React from 'react';
import {View, FlatList} from 'react-native';
import {SIZES} from '../constants';
import {Cards} from './';

const Lists = ({data}) => {
  return (
    <View
      style={{
        marginTop: 20,
        marginLeft: SIZES.padding,
      }}>
      {/* Posts List */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, i}) => {
          return <Cards details={item} />;
        }}
      />
    </View>
  );
};

export default Lists;
