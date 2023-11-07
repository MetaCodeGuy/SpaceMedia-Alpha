import React, { useContext } from 'react';
import { View, Text, Image, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import { AppContext } from '../App';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';

export default function APOD() {

  const data = useContext(AppContext)
  const nav = useNavigation()
  console.log(data[0].url);
  return (
    <>
      <View
        onTouchEnd={() => nav.navigate("apod")}
        style={{
          width: "95%", position: 'relative', height: "35%",
          borderRadius: 10,
          marginTop: 5,
          margin: 'auto',
          backgroundColor: 'black',
          maxHeight: 200,
          elevation: 1,
        }}>
       {
       data[0].media_type =="video" ? 
       <Image
          source={require('../assets/adaptive-icon.png')}
          resizeMode="cover"
          style={{ width: '100%', height: '100%', borderRadius: 10 }}
        />:
       <Image
          source={{ uri: data[0].url }}
          resizeMode="cover"
          style={{ width: '100%', height: '100%', borderRadius: 10 }}
        />}
        <Text
          style={{ position: 'absolute', color: 'white', backgroundColor: '#3A3A3A', padding: 10, borderRadius: 5, zIndex: 10, fontSize: 14, fontWeight: '900', bottom: 10, right: 20 }}>{data[0].copyright?.trim() || "No CopyRights"}</Text>
      </View>
      <Text style={{ marginTop: 5, fontWeight: '900' }}>Astronomical Picture Of The Day</Text>
    </>
  )

}
