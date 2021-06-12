import React from 'react';
import {ScrollView} from 'react-native';
import {dummyData} from '../constants';
import {
  MainLayout,
  HeaderBack,
  SectionTitle,
  SearchBar,
  Lists,
} from '../components';

const Search = ({navigation}) => {
  return (
    <MainLayout>
      {/* Header */}
      <HeaderBack onPress={() => navigation.goBack()} />

      <ScrollView
        contentContainerStyle={{marginBottom: 100}}
        showsVerticalScrollIndicator={false}>
        {/* List Header */}
        <SectionTitle title="Discover the world" />

        {/* Search Bar */}
        <SearchBar />

        {/* Trending Hashtags Section */}
        <SectionTitle title="Trending hashtags" seeAll={true} />
        <Lists data={dummyData.trendingHashtags} />

        {/* Top Community */}
        <SectionTitle title="Top community" seeAll={true} />
        <Lists data={dummyData.topCommunity} />

        {/* Top nomads */}
        <SectionTitle title="Top nomads" seeAll={true} />
      </ScrollView>
    </MainLayout>
  );
};

export default Search;
