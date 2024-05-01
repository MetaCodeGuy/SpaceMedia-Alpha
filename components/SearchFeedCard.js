import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FeedLoader from './FeedLoader';

const NasaLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png'

export default function SearchFeedCard({ dat }) {
  const nav = useNavigation()

  if (dat.links[0].href) return (
    <TouchableOpacity onPress={() => {
      nav.navigate("FeedPage", { dat })
    }}
      style={{
        width: "100%",       
        borderRadius: 10, margin: 1,
        height: 300,
        marginVertical: 10,
      }}>

      <Image
        source={{ uri: dat.links[0].href }}
        style={{ borderRadius: 10, width: "100%", height: "80%" }}
        resizeMode="cover"
      />
      <View className={'w-full h-[20%] flex flex-row items-center p-1 '}>
        <Image
          source={{ uri: NasaLogo }}
          className={"w-10 h-10 rounded-full "}
        />
        <Text style={{
          fontSize: 18,
          width: "100%",
          padding: 5,
        }}>{dat.data[0].title?.slice(0, 50)}...</Text>
      </View>
    </TouchableOpacity>
  )
  else {
    return <FeedLoader />
  }
}
