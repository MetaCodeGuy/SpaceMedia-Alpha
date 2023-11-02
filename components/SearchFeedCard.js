import { useNavigation } from '@react-navigation/native';
import { Image } from '@rneui/themed';
import React from 'react';
import { View, Text } from 'react-native';
import FeedLoader from './FeedLoader';

export default function SearchFeedCard({ dat }) {
  const nav = useNavigation()

  if (dat.links[0].href) return (
    <View onTouchEnd={() => {
      nav.navigate("FeedPage", { dat })
    }}
      style={{ width: "43%", maxWidth: 200, borderRadius: 10, margin: 10, height: 150 }}>

      <Image
        source={{ uri: dat.links[0].href }}
        style={{ borderRadius: 10, marginBottom: 10, width: "100%", height: "100%" }}
        resizeMode="cover"
      />
      <Text style={{ position: 'absolute', padding: 5, color: 'white', bottom: 0, zIndex: 10 }}>{dat.data[0].title?.slice(0, 50)}...</Text>
    </View>
  )
  else {
    return <FeedLoader />
  }
}
