export const trendingHashtags = [
  {
    id: 1,
    hashTag: 'adventure',
    thumbnail: require('../assets/images/hashtag/adventure.jpg'),
    dist: (Math.random() * 6).toFixed(1),
  },
  {
    id: 2,
    hashTag: 'roadtrip',
    thumbnail: require('../assets/images/hashtag/roadtrip.jpg'),
    dist: (Math.random() * 6).toFixed(1),
  },
  {
    id: 3,
    hashTag: 'nature',
    thumbnail: require('../assets/images/hashtag/nature.jpg'),
    dist: (Math.random() * 6).toFixed(1),
  },
  {
    id: 4,
    hashTag: 'sky',
    thumbnail: require('../assets/images/hashtag/sky.jpg'),
    dist: (Math.random() * 6).toFixed(1),
  },
  {
    id: 5,
    hashTag: 'tech',
    thumbnail: require('../assets/images/hashtag/tech.jpg'),
    dist: (Math.random() * 6).toFixed(1),
  },
  {
    id: 6,
    hashTag: 'politics',
    thumbnail: require('../assets/images/hashtag/politics.jpg'),
    dist: (Math.random() * 6).toFixed(1),
  },
  {
    id: 7,
    hashTag: 'books',
    thumbnail: require('../assets/images/hashtag/books.jpg'),
    dist: (Math.random() * 6).toFixed(1),
  },
];

export const topCommunity = [
  {
    id: 1,
    title: 'france',
    thumbnail: require('../assets/images/community/france.jpg'),
    posts: Math.floor(Math.random() * 200),
  },
  {
    id: 2,
    title: 'italy',
    thumbnail: require('../assets/images/community/italy.jpg'),
    posts: Math.floor(Math.random() * 200),
  },
  {
    id: 3,
    title: 'china',
    thumbnail: require('../assets/images/community/china.jpg'),
    posts: Math.floor(Math.random() * 200),
  },
  {
    id: 4,
    title: 'usa',
    thumbnail: require('../assets/images/community/usa.jpg'),
    posts: Math.floor(Math.random() * 200),
  },
  {
    id: 5,
    title: 'india',
    thumbnail: require('../assets/images/community/india.jpg'),
    posts: Math.floor(Math.random() * 200),
  },
  {
    id: 6,
    title: 'russia',
    thumbnail: require('../assets/images/community/russia.jpg'),
    posts: Math.floor(Math.random() * 200),
  },
  {
    id: 7,
    title: 'london',
    thumbnail: require('../assets/images/community/london.jpg'),
    posts: Math.floor(Math.random() * 200),
  },
];

export const topNomads = [
  {
    id: 1,
    name: 'playaparker',
    thumbnail: require('../assets/images/nomads/playaparker.jpg'),
    followers: Math.floor(Math.random() * 300) + 'K',
  },
  {
    id: 2,
    name: 'mhogan',
    thumbnail: require('../assets/images/nomads/mhogan.jpg'),
    followers: Math.floor(Math.random() * 300) + 'K',
  },
  {
    id: 3,
    name: 'rayjosh',
    thumbnail: require('../assets/images/nomads/rayjosh.jpg'),
    followers: Math.floor(Math.random() * 300) + 'K',
  },
];

const dummyData = {trendingHashtags, topCommunity, topNomads};

export default dummyData;
