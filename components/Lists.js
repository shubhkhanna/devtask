import React, {useCallback, useMemo} from 'react';
import {View, FlatList} from 'react-native';
import {SIZES} from '../constants';
import {Cards} from './';

const Lists = ({data}) => {
  const renderItem = useCallback(({item}) => <Cards details={item} />, []);

  const memoizedValue = useMemo(() => renderItem, [data]);

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
        renderItem={memoizedValue}
      />
    </View>
  );
};

export default Lists;
