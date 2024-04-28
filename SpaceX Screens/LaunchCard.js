import { useNavigation } from '@react-navigation/native';
import { Image } from '@rneui/themed';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function LaunchCard({ img, name, data }) {
  const nav = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => nav.navigate("LaunchMedia", { data })}
      style={{
        width: "45%",
        borderRadius: 10,
        display: 'flex',
        borderRadius: 10,
        margin: 1, 
        marginVertical: 10,
        borderWidth: 1,
        borderColor:'lightgray',
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
      <Text style={{ }}>{name.slice(0, 25)}...</Text>
    </TouchableOpacity>
  );
}
