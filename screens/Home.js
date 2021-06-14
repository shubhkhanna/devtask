import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {FlatList} from 'react-native';
import axios from 'axios';
import {MainLayout, Post} from '../components';
import {SIZES} from '../constants';

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      // fetching post
      const {data} = await axios.get('https://picsum.photos/v2/list?limit=10');
      setProperties(data);
    };

    fetchFeeds();
  }, []);

  const renderItem = useCallback(({item}) => <Post post={item} />, []);

  const memoizedValue = useMemo(() => renderItem, [properties]);

  return (
    <MainLayout containerStyle={{flexDirection: 'column'}}>
      {/* Feeds list */}
      <FlatList
        data={properties}
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="normal"
        snapToInterval={SIZES.height - 70}
        keyExtractor={item => `${item.id}`}
        renderItem={memoizedValue}
        max
      />
    </MainLayout>
  );
};

export default Home;
