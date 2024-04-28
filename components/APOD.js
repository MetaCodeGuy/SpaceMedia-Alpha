import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AppContext } from '../App';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';

export default function APOD() {

  const data = useContext(AppContext)
  const nav = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => nav.navigate("apod")}
      style={{
        elevation: 1
      }}
      className={'w-[95%] h-[300] '}
    >
      {
        data[0].media_type == "video" ?
          <Image
            source={require('../assets/adaptive-icon.png')}
            resizeMode="cover"
            style={{ width: '100%', height: '100%', borderRadius: 10 }}
          /> :
          <Image
            source={{ uri: data[0].url }}
            resizeMode="cover"
            style={{ width: '100%', height: '100%', borderRadius: 10 }}
          />}
      <Text
        style={{
          position: 'absolute',
          padding: 10, borderRadius: 5, zIndex: 10,
          color: 'white',
          fontSize: 16, fontWeight: '900', bottom: 10,
          right: 20
        }}>{data[0].copyright?.trim() || "No CopyRights"}</Text>
    </TouchableOpacity>

  )

}
