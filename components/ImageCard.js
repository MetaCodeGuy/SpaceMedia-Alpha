import { Octicons } from '@expo/vector-icons'; 
import React from 'react';
import { HandleDownload } from './DownLoadImage'
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ImageCard({ img, dat }) {
  const nav = useNavigation()
  return (
    <TouchableOpacity onPress={() => { nav.navigate("RoverInfo", { dat }) }} 
    // style={{
    //   width: "45%", position: 'relative', margin: 5, height: "20%", minWidth: 150,
    //   minHeight: 20, maxHeight: 150
    // }}
  className={'w-[150] h-[300] max-h-[250] my-4 '}
    >

      <Image
        source={{ uri: img }}
        resizeMode="cover"
        style={{ width: "100%", height: '100%',borderRadius: 10 }}
      />
      <TouchableOpacity onPress={() => HandleDownload(img)} style={{ width: 50, height: 50, bottom: 10, right: 10, backgroundColor: 'white', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10, zIndex: 13 }}>
        <Octicons name="download" size={24} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
