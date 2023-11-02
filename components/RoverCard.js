import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image  } from 'react-native';

export default function RoverCard({ img, title }) {
  const nav = useNavigation()
  return (
    <View 
     onTouchEnd={() => nav.navigate("Rover", { img, title })}>
      <View style={{
        width: "25%",marginRight:15, minWidth: 180, height: "95%",
        minHeight: 100,
        
        borderRadius: 10
      }}>
        <View style={{ borderRadius: 10, height: "95%" }}>
          <Image
            source={img}
            resizeMode='cover'
            style={{ width: '100%', height: "100%", borderRadius: 10 }}
          />
        </View>
        <Text style={{ textAlign: 'center', fontWeight: '900' ,color:'white'}}>{title}</Text>
      </View>
    </View>
  );
}
