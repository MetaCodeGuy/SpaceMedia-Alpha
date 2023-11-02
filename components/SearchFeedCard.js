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
      style={{ width: "100%", 
      borderRadius: 10, margin:1,marginBottom:15, height:250}}>

      <Image
        source={{ uri: dat.links[0].href }}
        style={{ borderRadius: 10, width: "100%", height: "100%" }}
        resizeMode="contain"
      />
      <Text style={{ 
        fontSize:18,
        width:"100%", 
         position: 'absolute' ,
         backgroundColor:'black',
         padding: 5,fontWeight:900, color: 'white', bottom: 0, 
         zIndex: 10, }}>{dat.data[0].title?.slice(0, 50)}...</Text>
    </View>
  )
  else {
    return <FeedLoader />
  }
}
