import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function CButton({ title, navTo, sol }) {
  const nav = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate("MarsGallery", { navTo, sol })
      }}
      style={{
        borderRadius: 50,
        backgroundColor: '#3A3A3A',
        paddingHorizontal: 20,
        paddingVertical: 10
      }}>

      <Text style={{
        fontSize: 18,
        color: 'white',
        fontWeight: "900"
      }}>{title}</Text>
    </TouchableOpacity>
  );
}
