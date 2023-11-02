import { useNavigation } from '@react-navigation/native';
import { Image } from '@rneui/themed';
import React from 'react';
import {   Text, TouchableOpacity } from 'react-native';

export default function LaunchCard({ img, name, data }) {
  const nav = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => nav.navigate("LaunchMedia", { data })}
      style={{
        width: 150,
        borderRadius: 10,
        elevation: 5,
        display: 'flex',
        borderRadius: 10,
        backgroundColor:'white',
        margin: 5,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        maxHeight: 250,
        height: 150
      }}>
      <Image
        source={{ uri: img }}
        resizeMode='cover'
        style={{ width: 80, height: 80 }}
      />
      <Text>{name.slice(0, 10)}...</Text>
    </TouchableOpacity>
  );
}
