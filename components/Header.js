import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function Header() {
  const nav = useNavigation()
  return (
    <View style={{
      width: "100%",
      height: 80, 
    }}
    className={"flex flex-row items-center justify-between p-4 "}
    >  
      <Text className={'text-2xl  font-bold '}>SpaceMedia</Text> 
      <TouchableOpacity onPress={()=>{
        nav.navigate('Settings')
      }}>
      <Ionicons name="settings-outline" size={26} color="black" />
      </TouchableOpacity> 
    </View>
  );
}
