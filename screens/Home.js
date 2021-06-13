import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import axios from 'axios';
import {MainLayout, Post} from '../components';
import {SIZES} from '../constants';

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      const {data} = await axios.get('https://picsum.photos/v2/list?limit=10');
      setProperties(data);
    };

    fetchFeeds();
  }, []);

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
        renderItem={({item}) => <Post post={item} />}
      />
    </MainLayout>
  );
};

export default Home;
